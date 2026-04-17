import { saveSchedule, getSchedule } from "../../../services/scheduleService";

export const useSchedule = () => {
  return {
    saveSchedule,
    getSchedule,
  };
};