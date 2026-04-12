import { Request, Response } from "express";
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