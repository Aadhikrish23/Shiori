import API from "./api";

export const getLabels = async () => {
  const res = await API.get("/labels");
  return res.data;
};

export const createLabel = async (data: {
  name: string;
  tags: string[];
}) => {
  const res = await API.post("/labels", data);
  return res.data;
};

export const updateLabel = async (
  id: string,
  data: { name: string; tags: string[] }
) => {
  const res = await API.put(`/labels/${id}`, data);
  return res.data;
};

export const deleteLabel = async (id: string) => {
  await API.delete(`/labels/${id}`);
};