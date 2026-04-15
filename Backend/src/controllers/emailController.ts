import { NextFunction, Request, Response } from "express";
import { emailQueue } from "../queue/emailQueue";
import { getEmailStats } from "../repositories/processedEmailRepo";

// 🔥 PROCESS DEFAULT (cron/manual trigger)
export const processUserEmails = async (req: any, res: Response) => {
  const userId = req.user?.id;

  if (!userId) {
    return res.status(401).json({
      error: "Unauthorized",
    });
  }

  await emailQueue.add(
    "process-user-emails",
    { userId },
    {
      jobId: `user-${userId}`, // prevent duplicate
    }
  );

  res.json({ message: "User job added" });
};

// 🔥 PROCESS CUSTOM RANGE
export const processCustomRange = async (
  req: any,
  res: Response,
  next: NextFunction
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

    await emailQueue.add(
      "process-user-emails",
      {
        userId,
        startTime,
        endTime,
        includeProcessed,
      },
      {
        jobId: `manual-${userId}-${Date.now()}`,
      }
    );

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
  next: NextFunction
) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const stats = await getEmailStats(userId);

    res.json(stats);
  } catch (err) {
    next(err);
  }
};