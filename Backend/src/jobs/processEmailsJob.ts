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
import { pubClient } from "../config/redis";
import { getEmailsStream } from "../services/gmailService";

interface JobParams {
  userId: mongoose.Types.ObjectId;
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
  job?: any,
) => {
  console.log("🔥 JOB START", { traceId, userId, includeProcessed });

  let processedCount = 0;

  try {
    const endTime = endTimeParam || new Date();
    const startTime =
      startTimeParam || new Date(endTime.getTime() - 5 * 60 * 1000);

    console.log("📡 STREAM FETCH START", { traceId, startTime, endTime });

    const stream = getEmailsStream(userId, startTime, endTime);

    const labels: ILabelConfig[] = await getAllLabels(userId);
    if (!labels.length) return { processedCount: 0 };

    const gmailLabelMap = new Map<string, string>();

    for (const label of labels) {
      const labelName = `AI/${label.name}`;
      const labelId = await getOrCreateLabel(userId, labelName);
      if (labelId) gmailLabelMap.set(labelName, labelId);
    }

    const labelMap = new Map(
      labels.map((l) => [l.name.trim().toLowerCase(), l]),
    );

    // 🔥 CONCURRENCY CONTROL (FIXED)
    const runningTasks = new Set<Promise<void>>();

    const trackTask = (task: Promise<void>) => {
      runningTasks.add(task);
      task.finally(() => runningTasks.delete(task));
    };

    let totalFetched = 0;
    let totalProcessed = 0;

    // ============================
    // 🔥 STREAM LOOP
    // ============================
    for await (const batch of stream) {
      let emailsToProcess = batch;

      // 🔥 FILTER PROCESSED (unchanged logic)
      if (!includeProcessed) {
        const processedChecks = await Promise.all(
          batch.map((email) => isProcessed(userId, email.id)),
        );
        emailsToProcess = batch.filter((_, i) => !processedChecks[i]);
      }

      if (!emailsToProcess.length) continue;

      totalFetched += emailsToProcess.length;

      // 🔥 EMIT FETCHING
      if (job) {
        await pubClient.publish(
          "job-progress",
          JSON.stringify({
            userId: job.data.userId.toString(),
            stage: "fetching",
            fetched: totalFetched,
          }),
        );
      }

      const task = (async () => {
        console.log("🤖 AI REQUEST", {
          traceId,
          size: emailsToProcess.length,
        });

        const aiResults = await classifyEmailsBatch({
          emails: emailsToProcess.map((email) => ({
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
          results: aiResults.length,
        });

        let localCount = 0;

        for (const aiResult of aiResults) {
          const email = emailsToProcess.find((e) => e.id === aiResult.id);
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
              matchedLabel.name.toLowerCase(),
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

        totalProcessed += localCount;

        // 🔥 EMIT PROCESSING
        if (job) {
          await pubClient.publish(
            "job-progress",
            JSON.stringify({
              userId: job.data.userId.toString(),
              stage: "processing",
              processed: totalProcessed,
              fetched: totalFetched,
            }),
          );
        }
      })();

      trackTask(task);

      // 🔥 LIMIT CONCURRENCY
      if (runningTasks.size >= 3) {
        await Promise.race(runningTasks);
      }
    }

    // 🔥 WAIT FOR REMAINING TASKS
    await Promise.all(runningTasks);

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
