import { Request, Response } from "express";
import {
  createLabel,
  deleteLabel,
  getAllLabels,
  updateLabel,
} from "../repositories/labelConfigRepo";

// assume req.user.id exists from auth middleware

export const getLabels = async (req: any, res: Response) => {
  const labels = await getAllLabels(req.user.id);
  res.json(labels);
};

export const createLabelController = async (req: any, res: Response) => {
  const { name, tags } = req.body;

  const label = await createLabel(req.user.id, name, tags);

  res.json(label);
};

export const updateLabelController = async (req: any, res: Response) => {
  const { id } = req.params;
  const { name, tags } = req.body;

  const updated = await updateLabel(req.user.id, id, name, tags);

  res.json(updated);
};

export const deleteLabelController = async (req: any, res: Response) => {
  const { id } = req.params;

  await deleteLabel(req.user.id, id);

  res.json({ success: true });
};