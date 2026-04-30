import mongoose from "mongoose";
import { ProcessedEmail } from "../models/processedEmail.model";
import { encrypt, decrypt } from "../utils/crypto";

// ✅ Check if already processed (per user)
export const isProcessed = async (
  userId:  mongoose.Types.ObjectId,
  messageId: string,
): Promise<boolean> => {
  const exists = await ProcessedEmail.findOne({ userId:userId as any, messageId });
  return !!exists;
};

// ✅ Mark as processed (per user)
export const markAsProcessed = async (
  userId:  mongoose.Types.ObjectId,
  messageId: string,
  data: {
    category: string;
    type: string;
    action: string;
    confidence: number;

    subject: string;
    from: string;
    snippet: string;
  },
) => {
  await ProcessedEmail.updateOne(
    { userId:userId as any, messageId },
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
    { upsert: true },
  );
};
export const getEmailStats = async (userId:  mongoose.Types.ObjectId) => {
  const totalProcessed = await ProcessedEmail.countDocuments({ userId:userId as any });

  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);

  const processedToday = await ProcessedEmail.countDocuments({
    userId:userId as any,
    processedAt: { $gte: todayStart },
  });

  const lastProcessed = await ProcessedEmail.findOne({ userId:userId as any })
    .sort({ processedAt: -1 })
    .select("processedAt");

  // 🔥 GET USER SCHEDULE
  const user = await mongoose.model("User").findById(userId).select("schedule");

  return {
    totalProcessed,
    processedToday,
    lastProcessedAt: lastProcessed?.processedAt || null,

    // 🔥 NEW
    lastRunAt: user?.schedule?.lastScheduledRunAt || null,
    lastManualRunAt: user?.schedule?.lastManualRunAt || null,
    lastActivityAt: user?.schedule?.lastProcessedAt || null,
    lastActivityCount: user?.schedule?.lastProcessedCount || 0,
  };
};

export const getDashboardStats = async (
  userId:  mongoose.Types.ObjectId,
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
  const totalProcessed = await ProcessedEmail.countDocuments({ userId:userId as any });

  // 🔥 TODAY
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);

  const processedToday = await ProcessedEmail.countDocuments({
    userId:userId as any,
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
  userId:  mongoose.Types.ObjectId,
  filters: {
    action?: string;
    type?: string;
    label?: string;
    page: number;
    limit: number;
    isImportant:boolean;
    isArchived:boolean
  },
) => {
  const query: any = { userId };

  if (filters.action) query.action = filters.action;
  if (filters.type) query.type = filters.type;
  if (filters.label) query.category = filters.label;
  if (filters.isImportant) {
    query.isImportant = true;
  }
  if (filters.isArchived) {
    query.isArchived = true;
  }

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
  userId:  mongoose.Types.ObjectId,
) => {
  return await ProcessedEmail.countDocuments({ userId:userId as any });
};
