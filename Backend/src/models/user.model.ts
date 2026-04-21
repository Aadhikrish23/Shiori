import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  accessToken: string;
  refreshToken: string;
  currentJobId: string;

  plan: "free" | "premium";

  schedule: {
    enabled: boolean;
    type: "interval" | "daily";

    intervalMinutes: number;

    dailyInterval: number;
    dailyTime: string;

    lastScheduledRunAt: Date | null;
    lastManualRunAt: Date | null;
    lastProcessedAt: Date | null;
    lastProcessedCount: number;
    isRunning: boolean;
    runningType: "cron" | "manual" | "bulk" | null;
  };
}

const userSchema = new mongoose.Schema<IUser>({
  email: { type: String, required: true, unique: true },
  accessToken: { type: String, required: true },
  refreshToken: { type: String, required: true },
  currentJobId: { type: String, default: null },

  plan: {
    type: String,
    enum: ["free", "premium"],
    default: "free",
  },

  schedule: {
    enabled: { type: Boolean, default: false },

    type: {
      type: String,
      enum: ["interval", "daily"],
      default: "interval",
    },

    intervalMinutes: { type: Number, default: 5 },

    dailyInterval: { type: Number, default: 1 },
    dailyTime: { type: String, default: "09:00" },

    lastScheduledRunAt: { type: Date, default: null },
    lastManualRunAt: { type: Date, default: null },
    isRunning: { type: Boolean, default: false },
    lastProcessedAt: { type: Date, default: null },
    lastProcessedCount: { type: Number, default: 0 },
  },
});

export const User = mongoose.model<IUser>("User", userSchema);
