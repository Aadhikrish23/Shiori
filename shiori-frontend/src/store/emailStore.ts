import { create } from "zustand";

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
  dashboard: any;
  loading: boolean;
  processing: boolean;

  setStats: (stats: Stats) => void;
  setDashboard: (data: any) => void;
  setLoading: (val: boolean) => void;
  setProcessing: (val: boolean) => void;
}

export const useEmailStore = create<Store>((set) => ({
  stats: null,
  dashboard: null,
  loading: false,
  processing: false,

  setStats: (stats) => set({ stats }),
  setDashboard: (data) => set({ dashboard: data }),
  setLoading: (val) => set({ loading: val }),
  setProcessing: (val) => set({ processing: val }),
}));