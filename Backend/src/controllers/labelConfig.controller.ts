import { Request, Response } from "express";
import * as labelService from "../services/labelService";
import { generateLabelDescription } from "../services/aiService";
import { AuthRequest } from "../types/express";

// assume req.user.id exists from auth middleware

export const getLabels = async (req: AuthRequest, res: Response) => {
  const userId = req.user?.id;
  if (!userId) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  const labels = await labelService.getLabels(userId);
  console.log("USER ID:", userId);
console.log("LABELS:", labels);
  res.json(labels);
};

export const createLabelController = async (
  req: AuthRequest,
  res: Response,
) => {
  const { name, tags } = req.body;
    const userId = req.user?.id;
  if (!userId) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  const description = await generateLabelDescription({ name, tags });
  const label = await labelService.createLabel(
    userId,
    name,
    tags,
    description,
  );

  res.json(label);
};

export const updateLabelController = async (
  req: AuthRequest,
  res: Response,
) => {
  const { id } = req.params;
  const { name, tags } = req.body;
    const userId = req.user?.id;
  if (!userId) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
 if (!id || typeof id !== "string") {
  return res.status(400).json({ message: "Invalid ID" });
}
  const description = await generateLabelDescription({ name, tags });

  const updated = await labelService.updateLabel(
    userId,
    id,
    name,
    tags,
    description,
  );

  res.json(updated);
};

export const deleteLabelController = async (
  req: AuthRequest,
  res: Response,
) => {
  const { id } = req.params;
 if (!id || typeof id !== "string") {
  return res.status(400).json({ message: "Invalid ID" });
}
  const userId = req.user?.id;
  if (!userId) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  await labelService.deleteLabel(userId, id);

  res.json({ success: true });
};
