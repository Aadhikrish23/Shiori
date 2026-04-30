import { Response } from "express";
import * as scheduleService from "../services/scheduleService";
import { AuthRequest } from "../types/express";

export const saveSchedule = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id;
  if (!userId) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  await scheduleService.saveSchedule(userId, req.body);
  res.json({ message: "Schedule saved" });
};

export const getSchedule = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id;
  if (!userId) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  const data = await scheduleService.getSchedule(userId);
  res.json(data);
};