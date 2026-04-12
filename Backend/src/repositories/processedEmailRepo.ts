import { ProcessedEmail } from "../models/processedEmail.model";

// ✅ Check if already processed (per user)
export const isProcessed = async (
  userId: string,
  messageId: string
): Promise<boolean> => {
  const exists = await ProcessedEmail.findOne({ userId, messageId });
  return !!exists;
};

// ✅ Mark as processed (per user)
export const markAsProcessed = async (
  userId: string,
  messageId: string,
  category: string
) => {
  await ProcessedEmail.create({
    userId,
    messageId,
    category,
  });
};