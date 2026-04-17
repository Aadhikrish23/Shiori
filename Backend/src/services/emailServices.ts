import mongoose from "mongoose";
import {
  getEmailStats,
  getDashboardStats,
} from "../repositories/processedEmailRepo";


export const getStats = async (userId: mongoose.Schema.Types.ObjectId) => {
  return await getEmailStats(userId);
};

export const getDashboard = async (userId:  mongoose.Schema.Types.ObjectId) => {
  return await getDashboardStats(userId);
};