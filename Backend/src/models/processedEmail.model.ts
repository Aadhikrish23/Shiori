import mongoose from "mongoose";

interface ProcessedEmail extends mongoose.Document {
  userId: mongoose.Schema.Types.ObjectId;
  messageId: string;
  category: string;
  processedAt: Date;
}

const processedEmailSchema = new mongoose.Schema<ProcessedEmail>({
  userId: {
    type: String,
    required: true,
  },
  messageId: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  processedAt: {
    type: Date,
    default: Date.now,
  },
});

// ✅ COMPOUND UNIQUE INDEX
processedEmailSchema.index({ userId: 1, messageId: 1 }, { unique: true });

export const ProcessedEmail = mongoose.model(
  "ProcessedEmail",
  processedEmailSchema
);