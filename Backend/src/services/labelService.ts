import * as labelRepo from "../repositories/labelConfigRepo";

export const getLabels = (userId: string) => {
  return labelRepo.getAllLabels(userId);
};

export const createLabel = (userId: string, name: string, tags: string[],description:string) => {
  return labelRepo.createLabel(userId, name, tags,description);
};

export const updateLabel = (
  userId: string,
  id: string,
  name: string,
  tags: string[],description:string
) => {
  return labelRepo.updateLabel(userId, id, name, tags,description);
};

export const deleteLabel = (userId: string, id: string) => {
  return labelRepo.deleteLabel(userId, id);
};