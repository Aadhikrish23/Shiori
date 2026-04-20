import { Request, Response } from "express";
import { emailQueue } from "../queue/emailQueue";
import { User } from "../models/user.model";

export const getJobStatus = async (req: any, res: Response) => {
  const userId = req.user.id;

  const user = await User.findById(userId);

  if (!user?.currentJobId) {
    return res.json({ status: "idle", progress: 0 });
  }

  const job = await emailQueue.getJob(user.currentJobId);

  if (!job) {
    return res.json({ status: "idle", progress: 0 });
  }

  const state = await job.getState();
  console.log("JOB STATUS API:", {
  jobId: user.currentJobId,
  progress: job?.progress,
  state,
});

  return res.json({
    status: state,
    progress: job.progress ?? 0, // 🔥 IMPORTANT
  });
};
export const cancelJob = async (req: any, res: Response) => {
  const userId = req.user.id;

  const user = await User.findById(userId);

  if (!user?.currentJobId) {
    return res.status(400).json({ message: "No active job" });
  }

  const job = await emailQueue.getJob(user.currentJobId);

  if (job) {
    await job.remove();
  }

  await User.findByIdAndUpdate(userId, {
    currentJobId: null,
  });

  res.json({ message: "Job cancelled" });
};