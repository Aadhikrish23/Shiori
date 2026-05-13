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

  job: any;

  setStats: (stats: Stats) => void;
  setDashboard: (data: any) => void;
  setLoading: (val: boolean) => void;

  setJob: (job: any) => void;
}

export const useEmailStore = create<Store>((set) => ({
  stats: null,
  dashboard: null,
  loading: false,

  job: null,

  // 🔥 FIXED: supports functional updates
  setJob: (job) =>
    set((state) => ({
      job: typeof job === "function" ? job(state.job) : job,
    })),

  setStats: (stats) => set({ stats }),
  setDashboard: (data) => set({ dashboard: data }),
  setLoading: (val) => set({ loading: val }),
}));