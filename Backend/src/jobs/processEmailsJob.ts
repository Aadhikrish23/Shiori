import { classifyEmailsBatch } from "../services/aiService";
import { Email } from "../types/email";
import { ILabelConfig } from "../models/labelConfig.model";
import {
  applyLabel,
  archiveEmail,
  getEmailsByTimeRange,
  getOrCreateLabel,
  starEmail,
} from "../services/gmailService";
import { getAllLabels } from "../repositories/labelConfigRepo";
import {
  isProcessed,
  markAsProcessed,
} from "../repositories/processedEmailRepo";
import mongoose from "mongoose";
import pLimit from "p-limit";

interface JobParams {
  userId: mongoose.Schema.Types.ObjectId;
  startTime?: Date;
  endTime?: Date;
  includeProcessed?: boolean;
  traceId: string;
}

function normalizeLabel(label: string) {
  return label.trim().toLowerCase();
}

function chunkArray<T>(arr: T[], size: number): T[][] {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

export const processEmailsJob = async (
  {
    userId,
    startTime: startTimeParam,
    endTime: endTimeParam,
    includeProcessed = false,
    traceId,
  }: JobParams,
  job?: any // 👈 NEW
) => {
  console.log("🔥 JOB START", { traceId, userId, includeProcessed });

  let processedCount = 0;

  try {
    const endTime = endTimeParam || new Date();
    const startTime =
      startTimeParam || new Date(endTime.getTime() - 5 * 60 * 1000);

    console.log("📡 FETCH START", { traceId, startTime, endTime });

    const emails: Email[] = await getEmailsByTimeRange(
      userId,
      startTime,
      endTime,
      traceId
    );

    console.log("📨 FETCH DONE", {
      traceId,
      totalEmails: emails.length,
    });

    if (!emails.length) {
      return { processedCount: 0 };
    }

    const labels: ILabelConfig[] = await getAllLabels(userId.toString());

    if (!labels.length) {
      return { processedCount: 0 };
    }

    const gmailLabelMap = new Map<string, string>();

    for (const label of labels) {
      const labelName = `AI/${label.name}`;
      const labelId = await getOrCreateLabel(userId, labelName);

      if (labelId) {
        gmailLabelMap.set(labelName, labelId);
      }
    }

    const labelMap = new Map(
      labels.map((l) => [l.name.trim().toLowerCase(), l])
    );

    let emailsToProcess = emails;

    if (!includeProcessed) {
      const processedChecks = await Promise.all(
        emails.map((email) => isProcessed(userId, email.id))
      );

      emailsToProcess = emails.filter((_, i) => !processedChecks[i]);
    }

    if (!emailsToProcess.length) {
      return { processedCount: 0 };
    }

    const batches = chunkArray(emailsToProcess, 12);

    console.log("📦 BATCH CREATED", {
      traceId,
      totalBatches: batches.length,
    });

    const limit = pLimit(2); // 🔥 KEEP PARALLEL

    // ============================
    // 🔥 PROGRESS TRACKING
    // ============================
    let total = emailsToProcess.length;
    let done = 0;

    const updateProgress = async (count: number) => {
      done += count;

      if (job) {
        const percent = Math.floor((done / total) * 100);
        await job.updateProgress(percent);
      }
    };

    // ============================
    // 🚀 PARALLEL PROCESSING (UNCHANGED)
    // ============================
    await Promise.all(
      batches.map((batch, index) =>
        limit(async () => {
          console.log("🤖 AI REQUEST", {
            traceId,
            batchIndex: index,
            size: batch.length,
          });

          const aiResults = await classifyEmailsBatch({
            emails: batch.map((email) => ({
              id: email.id,
              subject: email.subject,
              sender: email.sender,
              body: email.snippet,
            })),
            labels: labels.map((l) => ({
              name: l.name,
              tags: l.tags,
              description: l.description,
            })),
          });

          console.log("🤖 AI RESPONSE", {
            traceId,
            batchIndex: index,
            results: aiResults.length,
          });

          let localCount = 0;

          for (const aiResult of aiResults) {
            const email = batch.find((e) => e.id === aiResult.id);
            if (!email) continue;

            const cleanLabel = normalizeLabel(aiResult.label);
            let matchedLabel = labelMap.get(cleanLabel);

            if (!matchedLabel) {
              matchedLabel =
                labelMap.get("others") || labelMap.get("promotions");
              if (!matchedLabel) continue;
            }

            const labelName = `AI/${matchedLabel.name}`;
            const labelId = gmailLabelMap.get(labelName);
            if (!labelId) continue;

            await applyLabel(userId, email.id, labelId);

            if (aiResult.important) {
              await starEmail(userId, email.id);
            } else if (
              aiResult.confidence >= 0.7 &&
              ["promotions", "spam", "updates"].includes(
                matchedLabel.name.toLowerCase()
              )
            ) {
              await archiveEmail(userId, email.id);
            }

            await markAsProcessed(userId, email.id, {
              category: matchedLabel.name,
              type: aiResult.type || "primary",
              action: aiResult.action || "info",
              confidence: aiResult.confidence || 0.6,
              subject: email.subject,
              from: email.sender,
              snippet: email.snippet,
            });

            processedCount++;
            localCount++;
          }

          // 🔥 UPDATE PROGRESS AFTER EACH BATCH
          await updateProgress(localCount);
        })
      )
    );

    console.log("📊 JOB COMPLETE", {
      traceId,
      processedCount,
    });

    return { processedCount };
  } catch (err: any) {
    console.error("❌ JOB ERROR", {
      traceId,
      error: err.message,
    });
    throw err;
  }
};