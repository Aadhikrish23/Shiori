import { NextFunction, Request, Response } from "express";
import { emailQueue } from "../queue/emailQueue";
import * as emailService from "../services/emailServices";
import { User } from "../models/user.model";
import {
  archiveEmail,
  getFullEmail,
  getGmailClient,
  starEmail,
  unArchiveEmail,
  unStarEmail,
} from "../services/gmailService";
import { ProcessedEmail } from "../models/processedEmail.model";
import { AuthRequest } from "../types/express";
// 🔥 PROCESS DEFAULT (cron/manual trigger)
export const processUserEmails = async (req: AuthRequest, res: Response) => {
  const userId = req.user?.id;

  if (!userId) {
    return res.status(401).json({
      error: "Unauthorized",
    });
  }

  const job = await emailQueue.add("process-user-emails", {
    userId,
    jobType: req.user?.plan === "premium" ? "premium" : "free",
  });
  await User.findByIdAndUpdate(userId, {
    currentJobId: job.id,
  });
  res.json({ message: "User job added" });
};

// 🔥 PROCESS CUSTOM RANGE
export const processCustomRange = async (
  req: AuthRequest,
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

    const job = await emailQueue.add(
      "process-user-emails",
      {
        userId,
        startTime,
        endTime,
        includeProcessed,
        jobType: req.user?.plan === "premium" ? "premium" : "free",
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
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const stats = await emailService.getStats(userId);

    res.json(stats);
  } catch (err) {
    next(err);
  }
};

export const getDashboardController = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const data = await emailService.getDashboard(userId);

    res.json(data);
  } catch (err) {
    next(err);
  }
};
export const getEmailListController = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }
    const result = await emailService.getEmailList(userId, req.query);

    res.json(result);
  } catch (err) {
    next(err);
  }
};
export const getEmailOverviewController = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }
    const data = await emailService.getEmailOverview(userId);

    res.json(data);
  } catch (err) {
    next(err);
  }
};
export const processBulkEmails = async (req: AuthRequest, res: Response) => {
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
  const job = await emailQueue.add(
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

export const getSingleEmailController = async (
  req: AuthRequest,
  res: Response,
) => {
  try {
    const userId = req.user?.id;
    const messageId = Array.isArray(req.params.id)
      ? req.params.id[0]
      : req.params.id;
    if (!userId || !messageId) {
      return res.status(400).json({ message: "Invalid request" });
    }

    const email = await getFullEmail(userId, messageId);

    res.json(email);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch email" });
  }
};
export const markImportantController = async (
  req: AuthRequest,
  res: Response,
) => {
  const userId = req.user?.id;
  const messageId = Array.isArray(req.params.id)
    ? req.params.id[0]
    : req.params.id;
  if (!userId) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  await starEmail(userId, messageId);

  await ProcessedEmail.updateOne(
    { userId: userId as any, messageId },
    {
      $set: {
        action: "needs_action",
      },
    },
  );

  res.json({ success: true });
};
export const archiveController = async (req: AuthRequest, res: Response) => {
  const userId = req.user?.id;
  const messageId = Array.isArray(req.params.id)
    ? req.params.id[0]
    : req.params.id;
  if (!userId) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  await archiveEmail(userId, messageId);

  await ProcessedEmail.updateOne(
    { userId: userId as any, messageId },
    {
      $set: {
        action: "noise",
      },
    },
  );

  res.json({ success: true });
};

export const unarchiveController = async (req: AuthRequest, res: Response) => {
  const userId = req.user?.id;
  const messageId = Array.isArray(req.params.id)
    ? req.params.id[0]
    : req.params.id;
  if (!userId) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  await unArchiveEmail(userId, messageId);

  await ProcessedEmail.updateOne(
    { userId: userId as any, messageId },
    {
      $set: {
        action: "info",
      },
    },
  );

  res.json({ success: true });
};
export const unmarkImportantController = async (
  req: AuthRequest,
  res: Response,
) => {
  const userId = req.user?.id;
  const messageId = Array.isArray(req.params.id)
    ? req.params.id[0]
    : req.params.id;
  if (!userId) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  await unStarEmail(userId, messageId);

  await ProcessedEmail.updateOne(
    { userId: userId as any, messageId },
    {
      $set: {
        action: "info",
      },
    },
  );

  res.json({ success: true });
};

export const archiveNoise = async (req: AuthRequest, res: Response) => {
  const userId = req.user?.id;
  if (!userId) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  const count = await emailService.archiveNoiseEmails(userId);

  res.json({
    success: true,
    archived: count,
  });
};
