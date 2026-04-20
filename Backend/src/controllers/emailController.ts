import { NextFunction, Request, Response } from "express";
import { emailQueue } from "../queue/emailQueue";
import * as emailService from "../services/emailServices";
import { User } from "../models/user.model";
// 🔥 PROCESS DEFAULT (cron/manual trigger)
export const processUserEmails = async (req: any, res: Response) => {
  const userId = req.user?.id;

  if (!userId) {
    return res.status(401).json({
      error: "Unauthorized",
    });
  }

  const job = await emailQueue.add("process-user-emails", {
    userId,
    jobType: req.user.plan === "premium" ? "premium" : "free",
  });
  await User.findByIdAndUpdate(userId, {
    currentJobId: job.id,
  });
  res.json({ message: "User job added" });
};

// 🔥 PROCESS CUSTOM RANGE
export const processCustomRange = async (
  req: any,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const { startDate, endDate, includeProcessed = false } = req.body;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!startDate || !endDate) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    const startTime = new Date(startDate);
    const endTime = new Date(endDate);
    const traceId = `trace-${userId}-${Date.now()}`;

    console.log("📥 API REQUEST", {
      traceId,
      userId,
      startDate,
      endDate,
      includeProcessed,
    });

    const job =  await emailQueue.add(
      "process-user-emails",
      {
        userId,
        startTime,
        endTime,
        includeProcessed,
        jobType: req.user.plan === "premium" ? "premium" : "free",
        traceId,
      },
      {
        jobId: `manual-${userId}-${Date.now()}`,
        priority: 2,
      },
    );
     await User.findByIdAndUpdate(userId, {
    currentJobId: job.id,
  });
    res.json({
      message: "Custom processing job added",
    });
  } catch (err) {
    next(err);
  }
};

// 🔥 STATS
export const getEmailStatsController = async (
  req: any,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;

    const stats = await emailService.getStats(userId);

    res.json(stats);
  } catch (err) {
    next(err);
  }
};

export const getDashboardController = async (
  req: any,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;

    const data = await emailService.getDashboard(userId);

    res.json(data);
  } catch (err) {
    next(err);
  }
};
export const getEmailListController = async (
  req: any,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;

    const result = await emailService.getEmailList(userId, req.query);

    res.json(result);
  } catch (err) {
    next(err);
  }
};
export const getEmailOverviewController = async (
  req: any,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;

    const data = await emailService.getEmailOverview(userId);

    res.json(data);
  } catch (err) {
    next(err);
  }
};
export const processBulkEmails = async (req: any, res: Response) => {
  const userId = req.user?.id;
  const { includeProcessed = false } = req.body;

  if (!userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // 🔥 CHECK ACTIVE BULK JOBS
  const activeJobs = await emailQueue.getJobs(["active", "waiting"]);

  const bulkRunning = activeJobs.filter(
    (job) => job.data.jobType === "bulk" && job.data.userId === userId,
  );
  if (bulkRunning.length >= 1) {
    return res.status(400).json({
      message: "Bulk processing already running. Try later.",
    });
  }

  // 🔥 ADD BULK JOB
 const job= await emailQueue.add(
    "process-user-emails",
    {
      userId,
      includeProcessed,
      jobType: "bulk", // 🔥 THIS IS THE KEY
    },
    {
      jobId: `bulk-${userId}-${Date.now()}`,
      priority: 5, // 🔥 LOW priority
    },
  );
 await User.findByIdAndUpdate(userId, {
    currentJobId: job.id,
  });
  res.json({
    message: "Bulk processing started",
  });
};
