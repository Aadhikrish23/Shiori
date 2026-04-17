import { Request, Response } from "express";
import * as labelService from "../services/labelService";

// assume req.user.id exists from auth middleware

export const getLabels = async (req: any, res: Response) => {
  const labels = await labelService.getLabels(req.user.id);
  res.json(labels);
};

export const createLabelController = async (req: any, res: Response) => {
  const { name, tags } = req.body;

  const label = await labelService.createLabel(req.user.id, name, tags);

  res.json(label);
};

export const updateLabelController = async (req: any, res: Response) => {
  const { id } = req.params;
  const { name, tags } = req.body;

  const updated = await labelService.updateLabel(
    req.user.id,
    id,
    name,
    tags
  );

  res.json(updated);
};

export const deleteLabelController = async (req: any, res: Response) => {
  const { id } = req.params;

  await labelService.deleteLabel(req.user.id, id);

  res.json({ success: true });
};