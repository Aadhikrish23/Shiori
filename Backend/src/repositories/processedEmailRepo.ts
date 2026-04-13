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