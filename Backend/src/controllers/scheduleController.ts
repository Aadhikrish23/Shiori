import { Response } from "express";
import { User } from "../models/user.model";

export const saveSchedule = async (req: any, res: Response) => {
  const userId = req.user.id;

  const updates = req.body;

  const user = await User.findById(userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // 🔥 merge instead of overwrite
  user.schedule = {
    ...user.schedule,
    ...updates,
  };

  await user.save();

  res.json({ message: "Schedule saved" });
};
export const getSchedule = async (req: any, res: Response) => {
  const userId = req.user.id;

  const user = await User.findById(userId).select("schedule");

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user.schedule);
};