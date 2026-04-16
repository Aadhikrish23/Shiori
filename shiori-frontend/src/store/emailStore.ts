import { create } from "zustand";
import * as emailService from "../services/emailService";

interface Stats {
  totalProcessed: number;
  processedToday: number;
  lastProcessedAt: string | null;

  lastRunAt?: string | null;
  lastActivityAt?: string | null;
  lastActivityCount?: number;
}
interface Store {
  stats: Stats | null;
  loading: boolean;
  processing: boolean;
  dashboard: any;

  fetchStats: () => Promise<void>;
  processEmails: (options?: {
    startDate?: string;
    endDate?: string;
    includeProcessed?: boolean;
  }) => Promise<void>;
  
fetchDashboard: () => Promise<void>;
}

export const useEmailStore = create<Store>((set) => ({
  stats: null,
  loading: false,
  processing: false,
  dashboard: null,

  fetchStats: async () => {
    set({ loading: true });
    try {
      const data = await emailService.getStats();
      set({ stats: data });
    } finally {
      set({ loading: false });
    }
  },

 processEmails: async (options) => {
  set({ processing: true });

  try {
    if (options && options.startDate && options.endDate) {
      await emailService.processCustom({
        startDate: options.startDate,
        endDate: options.endDate,
        includeProcessed: options.includeProcessed ?? false,
      });
    } else {
      await emailService.processEmails();
    }
  } finally {
    set({ processing: false });
  }
},
fetchDashboard: async () => {
  try {
    const data = await emailService.getDashboard();
    set({ dashboard: data });
  } catch (err) {
    console.error(err);
  }
},
}));
