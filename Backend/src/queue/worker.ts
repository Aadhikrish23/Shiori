import { Worker } from "bullmq";
import { redisConnection } from "./connection";
import { processEmailsJob } from "../jobs/processEmailsJob";
console.log("🔥 Worker started...");

export const emailWorker = new Worker(
  "email-processing",
  async (job) => {
    console.log("🔥 Worker picked a job"); // 👈 ADD THIS FIRST

    if (job.name === "process-user-emails") {
      const { userId } = job.data;

      console.log(`👤 Processing user: ${userId}`);
      console.log(`🆔 Job ID: ${job.id}`);

      await processEmailsJob({ userId });

      console.log(`✅ Finished user: ${userId}`);
    }
  },
  {
    connection: redisConnection,
    concurrency: 1,
  }
);

// 🔥 ADD THESE (CRITICAL)
emailWorker.on("completed", (job) => {
  console.log(`🎉 Job completed: ${job.id}`);
});

emailWorker.on("failed", (job, err) => {
  console.error(`❌ Job failed: ${job?.id}`, err.message);
});
emailWorker.on("failed", (job, err) => {
  console.error("❌ Job failed HARD:", err);
});