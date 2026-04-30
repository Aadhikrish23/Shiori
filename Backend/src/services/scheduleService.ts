import mongoose from "mongoose";
import { User } from "../models/user.model";

export const saveSchedule = async (userId: mongoose.Types.ObjectId, updates: any) => {
  const user = await User.findById(userId);

  if (!user) throw new Error("User not found");

  user.schedule = {
    ...user.schedule,
    ...updates,
  };

  await user.save();
};

export const getSchedule = async (userId: mongoose.Types.ObjectId) => {
  const user = await User.findById(userId).select("schedule");

  if (!user) throw new Error("User not found");

  return user.schedule;
};