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

export const processEmailsJob = async ({
  userId,
  startTime: startTimeParam,
  endTime: endTimeParam,
  includeProcessed = false,
  traceId,
}: JobParams) => {
  console.log("🔥 JOB START", { traceId, userId, includeProcessed });

  let processedCount = 0;

  try {
    const endTime = endTimeParam || new Date();
    const startTime =
      startTimeParam || new Date(endTime.getTime() - 5 * 60 * 1000);

    console.log("📡 FETCH START", { traceId, startTime, endTime });

    // =========================================
    // 📥 FETCH EMAILS
    // =========================================
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
      console.log("📭 No emails found", { traceId });
      return { processedCount: 0 };
    }

    // =========================================
    // 🏷️ LOAD LABELS
    // =========================================
    const labels: ILabelConfig[] = await getAllLabels(userId.toString());

    if (!labels.length) {
      console.log("⚠️ No labels configured", { traceId });
      return { processedCount: 0 };
    }

    // =========================================
    // 🏷️ PREPARE LABEL MAP
    // =========================================
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

    // =========================================
    // 🧹 FILTER PROCESSED EMAILS
    // =========================================
    let emailsToProcess = emails;

    if (!includeProcessed) {
      const processedChecks = await Promise.all(
        emails.map((email) => isProcessed(userId, email.id))
      );

      emailsToProcess = emails.filter((_, i) => !processedChecks[i]);
    }

    console.log("🧹 FILTER RESULT", {
      traceId,
      toProcess: emailsToProcess.length,
    });

    if (!emailsToProcess.length) {
      console.log("📭 Nothing to process", { traceId });
      return { processedCount: 0 };
    }

    // =========================================
    // 📦 BATCHING
    // =========================================
    const batches = chunkArray(emailsToProcess, 12);

    console.log("📦 BATCH CREATED", {
      traceId,
      totalBatches: batches.length,
    });

    // =========================================
    // 🚀 PARALLEL AI CALLS
    // =========================================
    const limit = pLimit(2); // 🔥 SAFE concurrency (2–3 max)

    const batchResults = await Promise.all(
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

          return { batch, aiResults };
        })
      )
    );

    // =========================================
    // 🔁 APPLY RESULTS (SEQUENTIAL SAFE)
    // =========================================
    for (const { batch, aiResults } of batchResults) {
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

        // 🏷️ APPLY LABEL
        await applyLabel(userId, email.id, labelId);

        // ⭐ IMPORTANT LOGIC
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

        // 🔧 DEFAULTS
        if (!aiResult.type || !aiResult.action) {
          aiResult.type = "primary";
          aiResult.action = "info";
          aiResult.confidence = 0.6;
        }

        if (aiResult.confidence < 0.65) {
          console.log("⚠️ LOW CONFIDENCE", {
            traceId,
            emailId: email.id,
          });
        }

        // 💾 SAVE
        await markAsProcessed(userId, email.id, {
          category: matchedLabel.name,
          type: aiResult.type,
          action: aiResult.action,
          confidence: aiResult.confidence,
          subject: email.subject,
          from: email.sender,
          snippet: email.snippet,
        });

        processedCount++;
      }
    }

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