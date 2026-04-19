import mongoose from "mongoose";
import { ProcessedEmail } from "../models/processedEmail.model";
import { encrypt, decrypt } from "../utils/crypto";

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
  userId: mongoose.Schema.Types.ObjectId,
  messageId: string,
  data: {
    category: string;
    type: string;
    action: string;
    confidence: number;

    subject: string;
    from: string;
    snippet: string;
  }
) => {
  await ProcessedEmail.updateOne(
    { userId, messageId },
    {
      $set: {
        // 📧 metadata
        subject: data.subject,
        from: data.from,
        snippet: encrypt(data.snippet), // 🔐 encrypted

        // 🧠 AI
        category: data.category,
        type: data.type,
        action: data.action,
        confidence: data.confidence,

        processedAt: new Date(),
      },
    },
    { upsert: true }
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

export const getProcessedEmailsWithFilters = async (
  userId: mongoose.Schema.Types.ObjectId,
  filters: {
    action?: string;
    type?: string;
    label?: string;
    page: number;
    limit: number;
  }
) => {
  const query: any = { userId };

  if (filters.action) query.action = filters.action;
  if (filters.type) query.type = filters.type;
  if (filters.label) query.category = filters.label;

  const skip = (filters.page - 1) * filters.limit;

  const [emails, total] = await Promise.all([
    ProcessedEmail.find(query)
      .sort({ processedAt: -1 })
      .skip(skip)
      .limit(filters.limit)
      .lean(),

    ProcessedEmail.countDocuments(query),
  ]);

  return {
    emails,
    total,
  };
};
export const getProcessedCount = async (
  userId: mongoose.Schema.Types.ObjectId
) => {
  return await ProcessedEmail.countDocuments({ userId });
};