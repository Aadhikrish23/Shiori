import API from "./api";

export const saveSchedule = async (data: any) => {
  const res = await API.put("/schedule", data);
  return res.data;
};
export const getSchedule = async () => {
  const res = await API.get("/schedule");
  return res.data;
};