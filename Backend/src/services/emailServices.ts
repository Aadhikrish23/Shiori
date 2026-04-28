import mongoose from "mongoose";
import {
  getEmailStats,
  getDashboardStats,getProcessedEmailsWithFilters,getProcessedCount
} from "../repositories/processedEmailRepo";
import { archiveEmail, getTotalEmailCount } from "./gmailService";

import { decrypt } from "../utils/crypto";
import { ProcessedEmail } from "../models/processedEmail.model";


export const getStats = async (userId: mongoose.Schema.Types.ObjectId) => {
  return await getEmailStats(userId);
};

export const getDashboard = async (userId:  mongoose.Schema.Types.ObjectId) => {
  return await getDashboardStats(userId);
};



export const getEmailList = async (
  userId: mongoose.Schema.Types.ObjectId,
  query: any
) => {
  const page = Math.max(parseInt(query.page) || 1, 1);
  const limit = Math.min(parseInt(query.limit) || 20, 50);

  const filters = {
    action: query.action,
    type: query.type,
    label: query.label,
    isArchived:query.isArchived,
    isImportant:query.isImportant,
    page,
    limit,
  };

  const { emails, total } = await getProcessedEmailsWithFilters(
    userId,
    filters
  );

  // 🔐 decrypt snippet
  const formatted = emails.map((email) => ({
    ...email,
    snippet: email.snippet ? decrypt(email.snippet) : "",
  }));

  return {
    data: formatted,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  };
};

export const getEmailOverview = async (
  userId: mongoose.Schema.Types.ObjectId
) => {
  const [processed, total] = await Promise.all([
    getProcessedCount(userId),
    getTotalEmailCount(userId),
  ]);

  const unprocessed = Math.max(total - processed, 0);

  return {
    totalEmailsFetched: total,
    totalProcessed: processed,
    totalUnprocessed: unprocessed,
  };
};
export const archiveNoiseEmails = async (userId: mongoose.Schema.Types.ObjectId) => {
  const noiseEmails = await ProcessedEmail.find({
    userId,
    action: "noise",
    isArchived: { $ne: true },
  });

  for (const email of noiseEmails) {
    await archiveEmail(userId, email.messageId);
  }

  await ProcessedEmail.updateMany(
    {
      userId,
      action: "noise",
    },
    {
      $set: { isArchived: true, isImportant: false },
    }
  );

  return noiseEmails.length;
};