import { LabelConfig, ILabelConfig } from "../models/labelConfig.model";

export const getAllLabels = async (): Promise<ILabelConfig[]> => {
  return await LabelConfig.find();
};

export const createLabel = async (
  name: string,
  description: string
): Promise<ILabelConfig> => {
  return await LabelConfig.create({ name, description });
};