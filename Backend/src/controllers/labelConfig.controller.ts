import { Request, Response } from "express";
import * as labelService from "../services/labelService";
import { generateLabelDescription } from "../services/aiService";

// assume req.user.id exists from auth middleware

export const getLabels = async (req: any, res: Response) => {
  const labels = await labelService.getLabels(req.user.id);
  res.json(labels);
};

export const createLabelController = async (req: any, res: Response) => {
  const { name, tags } = req.body;
  const description = await generateLabelDescription({ name, tags });
  const label = await labelService.createLabel(
    req.user.id,
    name,
    tags,
    description,
  );

  res.json(label);
};

export const updateLabelController = async (req: any, res: Response) => {
  const { id } = req.params;
  const { name, tags } = req.body;
  const description = await generateLabelDescription({ name, tags });

  const updated = await labelService.updateLabel(
    req.user.id,
    id,
    name,
    tags,
    description,
  );

  res.json(updated);
};

export const deleteLabelController = async (req: any, res: Response) => {
  const { id } = req.params;

  await labelService.deleteLabel(req.user.id, id);

  res.json({ success: true });
};
