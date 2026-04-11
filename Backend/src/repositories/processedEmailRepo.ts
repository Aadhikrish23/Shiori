import { ProcessedEmail } from "../models/processedEmail.model";

export const isProcessed = async (messageId: string) => {
  const exists = await ProcessedEmail.findOne({ messageId });
  return !!exists;
};

export const markAsProcessed = async (
  messageId: string,
  category: string
) => {
  await ProcessedEmail.create({
    messageId,
    category,
  });
};