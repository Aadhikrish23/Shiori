import { NextFunction, Request, Response } from "express";
import { emailQueue } from "../queue/emailQueue";

export const processUserEmails = async (req: Request, res: Response) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({
      error: "userId is required",
    });
  }

  await emailQueue.add(
    "process-user-emails",
    { userId },
    {
      jobId: `user-${userId}`, // prevents duplicate jobs
    }
  );

  res.json({ message: "User job added" });
};

export const processCustomRange = async (req: Request, res: Response ,next:NextFunction) => {
  try {
    const {
      userId,
      startDate,
      endDate,
      includeProcessed = false,
    } = req.body;

    if (!userId || !startDate || !endDate) {
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
        jobId: `manual-${userId}-${Date.now()}`, // unique
      }
    );

    res.json({
      message: "Custom processing job added",
    });
  } catch (err) {
    next(err);
  }
};