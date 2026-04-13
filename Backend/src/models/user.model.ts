import mongoose from "mongoose";

export interface IUser extends Document {
  email: string;
  accessToken: string;
  refreshToken: string;
  schedule: {
    enabled: boolean;
    type: "interval" | "daily";
    intervalMinutes: number;
    dailyTime: string;
    lastRunAt: Date | null;
    isRunning: boolean;
  };
}

const userSchema = new mongoose.Schema<IUser>({
  email: { type: String, required: true, unique: true },
  accessToken: { type: String, required: true },
  refreshToken: { type: String, required: true },
  schedule: {
  enabled: { type: Boolean, default: true },

  type: {
    type: String,
    enum: ["interval", "daily"],
    default: "interval",
  },

  intervalMinutes: { type: Number, default: 5 },

  dailyTime: { type: String, default: "09:00" },

  lastRunAt: { type: Date, default: null },

  isRunning: { type: Boolean, default: false }, // 🔥 prevents overlap
},
  
});

export const User = mongoose.model<IUser>("User", userSchema);