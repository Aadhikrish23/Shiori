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
export const getDashboard = async () => {
  const res = await API.get("/email/dashboard");
  return res.data;
};
export const getEmailList = async (params: {
  page?: number;
  limit?: number;
  label?: string;
  action?: string;
  type?: string;
}) => {
  const res = await API.get("/email/list", { params });
  return res.data;
};
export const getJobStatus = async () => {
  const res = await API.get("/email/job-status");
  return res.data;
};

export const cancelJob = async () => {
  const res = await API.post("/email/cancel-job");
  return res.data;
};
export const processBulk = async () => {
  const res = await API.post("/email/process-bulk");
  return res.data;
};
export const getSingleEmail = async (id: string) => {
  const res = await API.get(`/email/${id}`);
  return res.data;
};
export const markImportant = async (id: string) => {
  await API.post(`/email/${id}/mark-important`);
};

export const archiveEmail = async (id: string) => {
  await API.post(`/email/${id}/archive`);
};
export const unmarkImportant = async (id: string) => {
  await API.post(`/email/${id}/unmark-important`);
};

export const unarchiveEmail = async (id: string) => {
  await API.post(`/email/${id}/unarchive`);
};
export const archiveall = async () => {
  await API.post("/email/archiveall");
};