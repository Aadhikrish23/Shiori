import mongoose from "mongoose";
import * as labelRepo from "../repositories/labelConfigRepo";

export const getLabels = (userId: mongoose.Types.ObjectId) => {
  return labelRepo.getAllLabels(userId);
};

export const createLabel = (userId: mongoose.Types.ObjectId, name: string, tags: string[],description:string) => {
  return labelRepo.createLabel(userId, name, tags,description);
};

export const updateLabel = (
  userId: mongoose.Types.ObjectId,
  id: string,
  name: string,
  tags: string[],description:string
) => {
  return labelRepo.updateLabel(userId, id, name, tags,description);
};

export const deleteLabel = (userId: mongoose.Types.ObjectId, id: string) => {
  return labelRepo.deleteLabel(userId, id);
};