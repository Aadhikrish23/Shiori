import mongoose from "mongoose";

interface ProcessedEmail extends mongoose.Document {
  userId: mongoose.Schema.Types.ObjectId;
  messageId: string;

  // 📧 metadata
  subject: string;
  from: string;
  snippet: string;

  // 🧠 AI fields
  category: string;
  type: "primary" | "update" | "alert" | "promotion";
  action: "needs_action" | "waiting" | "info" | "noise";
  confidence: number;
  isArchived: boolean;
  isImportant: boolean;
  originalLabels: string[];

  processedAt: Date;
}

const processedEmailSchema = new mongoose.Schema<ProcessedEmail>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  messageId: {
    type: String,
    required: true,
  },

  // 📧 metadata
  subject: {
    type: String,
  },
  from: {
    type: String,
  },
  snippet: {
    type: String,
  },

  // 🧠 AI
  category: {
    type: String,
  },
  type: {
    type: String,
    enum: ["primary", "update", "alert", "promotion"],
    default: "primary",
  },
  action: {
    type: String,
    enum: ["needs_action", "waiting", "info", "noise"],
    default: "info",
  },
  confidence: {
    type: Number,
    default: 0.7,
  },
  isArchived: {
    type: Boolean,
  },
  isImportant: {
    type: Boolean,
  },
  originalLabels:{
    type: [String],
     default: []
  }
,
  processedAt: {
    type: Date,
    default: Date.now,
  },
});

// ✅ unique per user
processedEmailSchema.index({ userId: 1, messageId: 1 }, { unique: true });
processedEmailSchema.index({ userId: 1, action: 1 });
processedEmailSchema.index({ userId: 1, type: 1 });
processedEmailSchema.index({ isArchived: 1, isImportant: 1 });

export const ProcessedEmail = mongoose.model(
  "ProcessedEmail",
  processedEmailSchema,
);
