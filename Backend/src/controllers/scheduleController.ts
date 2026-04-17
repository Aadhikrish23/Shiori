import { Response } from "express";
import * as scheduleService from "../services/scheduleService";

export const saveSchedule = async (req: any, res: Response) => {
  await scheduleService.saveSchedule(req.user.id, req.body);
  res.json({ message: "Schedule saved" });
};

export const getSchedule = async (req: any, res: Response) => {
  const data = await scheduleService.getSchedule(req.user.id);
  res.json(data);
};