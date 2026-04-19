import mongoose from "mongoose";
import {
  getEmailStats,
  getDashboardStats,getProcessedEmailsWithFilters,getProcessedCount
} from "../repositories/processedEmailRepo";
import { getTotalEmailCount } from "./gmailService";

import { decrypt } from "../utils/crypto";


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