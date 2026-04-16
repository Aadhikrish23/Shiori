import mongoose from "mongoose";
import { ProcessedEmail } from "../models/processedEmail.model";

// ✅ Check if already processed (per user)
export const isProcessed = async (
  userId: mongoose.Schema.Types.ObjectId,
  messageId: string
): Promise<boolean> => {
  const exists = await ProcessedEmail.findOne({ userId, messageId });
  return !!exists;
};

// ✅ Mark as processed (per user)
export const markAsProcessed = async (
  userId:  mongoose.Schema.Types.ObjectId,
  messageId: string,
  category: string
) => {
  await ProcessedEmail.updateOne(
    { userId, messageId },
    {
      $set: {
        category,
        processedAt: new Date(),
      },
    },
    { upsert: true } // 🔥 no duplicate crash
  );
};

export const getEmailStats = async (
  userId: mongoose.Schema.Types.ObjectId
) => {
  const totalProcessed = await ProcessedEmail.countDocuments({ userId });

  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);

  const processedToday = await ProcessedEmail.countDocuments({
    userId,
    processedAt: { $gte: todayStart },
  });

  const lastProcessed = await ProcessedEmail.findOne({ userId })
    .sort({ processedAt: -1 })
    .select("processedAt");

  // 🔥 GET USER SCHEDULE
  const user = await mongoose.model("User").findById(userId).select("schedule");

  return {
    totalProcessed,
    processedToday,
    lastProcessedAt: lastProcessed?.processedAt || null,

    // 🔥 NEW
    lastRunAt: user?.schedule?.lastRunAt || null,
    lastActivityAt: user?.schedule?.lastProcessedAt || null,
    lastActivityCount: user?.schedule?.lastProcessedCount || 0,
  };
};

export const getDashboardStats = async (
  userId: mongoose.Schema.Types.ObjectId
) => {
  // 🔥 LABEL COUNTS
  const labelStats = await ProcessedEmail.aggregate([
    { $match: { userId } },
    {
      $group: {
        _id: "$category",
        count: { $sum: 1 },
      },
    },
    { $sort: { count: -1 } },
  ]);

  // 🔥 TOTAL
  const totalProcessed = await ProcessedEmail.countDocuments({ userId });

  // 🔥 TODAY
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);

  const processedToday = await ProcessedEmail.countDocuments({
    userId,
    processedAt: { $gte: todayStart },
  });

  return {
    totalProcessed,
    processedToday,
    labels: labelStats,
    activeLabels: labelStats.length,
  };
};