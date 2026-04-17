import { Worker } from "bullmq";
import { redisConnection } from "./connection";
import { processEmailsJob } from "../jobs/processEmailsJob";
import { User } from "../models/user.model";

console.log("🔥 Worker started...");

export const emailWorker = new Worker(
  "email-processing",
  async (job) => {
    console.log("🔥 Worker picked a job");

    if (job.name === "process-user-emails") {
      const { userId, startTime, endTime, includeProcessed } = job.data;

      const now = new Date();

      const safeEndTime = endTime ? new Date(endTime) : now;

      // default: last 24 hours
      const safeStartTime = startTime
        ? new Date(startTime)
        : new Date(now.getTime() - 24 * 60 * 60 * 1000);

      console.log(`👤 Processing user: ${userId}`);
      console.log(`⏱️ Range: ${startTime} → ${endTime}`);

      try {
        // ✅ PASS FULL DATA
        const result = await processEmailsJob({
          userId,
          startTime: safeStartTime,
          endTime: safeEndTime,
          includeProcessed,
        });

        console.log(`✅ Finished user: ${userId}`);
        if (result?.processedCount > 0) {
          await User.findByIdAndUpdate(userId, {
            "schedule.lastProcessedAt": new Date(),
            "schedule.lastProcessedCount": result.processedCount,
          });
        }
      } catch (err) {
        console.error("❌ Job failed inside worker:", err);
        throw err; // 🔥 enables retry
      } finally {
        // ✅ ALWAYS reset + update lastRunAt
        await User.findByIdAndUpdate(userId, {
          "schedule.isRunning": false,
          "schedule.lastRunAt": new Date(),
        });
      }
    }
  },
  {
    connection: redisConnection,
    concurrency: 1,
  },
);

// ==============================
// 🔥 EVENTS
// ==============================

emailWorker.on("completed", (job) => {
  console.log(`🎉 Job completed: ${job.id}`);
});

emailWorker.on("failed", (job, err) => {
  console.error(`❌ Job failed: ${job?.id}`, err.message);
});
