import { create } from "zustand";

interface Stats {
  totalProcessed: number;
  processedToday: number;
  lastProcessedAt: string | null;
  lastManualRunAt?: string | null;
}

interface Store {
  stats: Stats | null;
  dashboard: any;
  loading: boolean;

  job: any; // 🔥 NEW

  setStats: (stats: Stats) => void;
  setDashboard: (data: any) => void;
  setLoading: (val: boolean) => void;

  setJob: (job: any) => void; // 🔥 NEW
}

export const useEmailStore = create<Store>((set) => ({
  stats: null,
  dashboard: null,
  loading: false,

  job: null,

  setJob: (job) => set({ job }),

  setStats: (stats) => set({ stats }),
  setDashboard: (data) => set({ dashboard: data }),
  setLoading: (val) => set({ loading: val }),
}));