import { Worker, Job } from "bullmq";
import { redisConnection } from "./connection";
import { processEmailsJob } from "../jobs/processEmailsJob";
import { User } from "../models/user.model";

console.log("🔥 Workers starting...");

// ==============================
// 🧠 SHARED HANDLER
// ==============================
async function handleJob(job: Job) {
  const { userId, startTime, endTime, includeProcessed, jobType } = job.data;
  const traceId = job.data.traceId || `trace-${job.id}`;

  console.log("⚙️ WORKER START", {
    traceId,
    jobId: job.id,
    userId,
    jobType,
  });

  const now = new Date();
  const safeEndTime = endTime ? new Date(endTime) : now;

  let safeStartTime: Date;

  if (startTime) {
    safeStartTime = new Date(startTime);
  } else if (jobType === "bulk") {
    safeStartTime = new Date();
    safeStartTime.setFullYear(safeStartTime.getFullYear() - 1);
  } else {
    safeStartTime = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  }

  console.log("🚀 JOB DISPATCH", {
    traceId,
    startTime: safeStartTime,
    endTime: safeEndTime,
    includeProcessed,
  });

  try {
    const result = await processEmailsJob({
      userId,
      startTime: safeStartTime,
      endTime: safeEndTime,
      includeProcessed,
      traceId,
    },job);

    console.log("✅ WORKER DONE", {
      traceId,
      processed: result?.processedCount,
    });

    if (result?.processedCount > 0) {
      await User.findByIdAndUpdate(userId, {
        "schedule.lastProcessedAt": new Date(),
        "schedule.lastProcessedCount": result.processedCount,
      });
    }

    return result;
  } catch (err: any) {
    console.error("❌ JOB FAILED", {
      traceId,
      error: err.message,
      stack: err.stack,
    });
    throw err;
  } finally {
    await User.findByIdAndUpdate(userId, {
      "schedule.isRunning": false,
      "schedule.lastRunAt": new Date(),
    });
  }
}

// ==============================
// 🚀 SINGLE ROUTER WORKER
// ==============================
export const emailWorker = new Worker(
  "email-processing",
  async (job) => {
    console.log("👀 WORKER RECEIVED JOB", {
      jobId: job.id,
      jobType: job.data.jobType,
    });

    if (job.name !== "process-user-emails") return;

    let jobType = (job.data.jobType || "free").toLowerCase();

    // 🔥 Normalize (prevents mismatch bugs)
    if (!["free", "premium", "bulk"].includes(jobType)) {
      console.log("⚠️ UNKNOWN JOB TYPE → defaulting to free", {
        jobId: job.id,
        received: job.data.jobType,
      });
      jobType = "free";
    }

    // 🔥 Assign concurrency behavior
    if (jobType === "premium") {
      return await handleJob(job); // high priority handled by queue priority
    }

    if (jobType === "bulk") {
      return await handleJob(job);
    }

    // default free
    return await handleJob(job);
  },
  {
    connection: redisConnection,
    concurrency: 3, // adjust as needed
  }
);

// ==============================
// 🔥 EVENTS
// ==============================
emailWorker.on("completed", (job) => {
  console.log("🎉 JOB COMPLETED", {
    jobId: job.id,
  });
});

emailWorker.on("failed", (job, err) => {
  console.error("❌ JOB FAILED EVENT", {
    jobId: job?.id,
    error: err.message,
  });
});