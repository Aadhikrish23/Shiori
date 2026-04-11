import mongoose from "mongoose";

interface ProcessedEmail extends mongoose.Document {
  messageId: string
  category: string
  processedAt: Date
}


const processedEmailSchema = new mongoose.Schema<ProcessedEmail>({
  messageId: {
    type: String,
    required: true,
    unique: true, // 🔥 prevents duplicates
  },
  category: {
    type: String,
  },
  processedAt: {
    type: Date,
    default: Date.now,
  },
});

export const ProcessedEmail = mongoose.model(
  "ProcessedEmail",
  processedEmailSchema
);