import { LabelConfig } from "../models/labelConfig.model";

export const getAllLabels = async () => {
  return await LabelConfig.find();
};

export const createLabel = async (name: string, description: string) => {
  return await LabelConfig.create({ name, description });
};
