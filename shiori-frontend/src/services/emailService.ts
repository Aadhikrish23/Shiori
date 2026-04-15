import API from "./api";

export const getStats = async () => {
  const res = await API.get("/email/stats");
  return res.data;
};

export const processEmails = async () => {
  const res = await API.post("/email/process-user");
  return res.data;
};
export const processCustom = async (data: {
  startDate: string;
  endDate: string;
  includeProcessed: boolean;
}) => {
  const res = await API.post("/email/process-custom", data);
  return res.data;
};