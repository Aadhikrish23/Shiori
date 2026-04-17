import { create } from "zustand";

interface LabelConfig {
  _id: string;
  name: string;
  tags: string[];
}

interface Store {
  configs: LabelConfig[];

  setConfigs: (configs: LabelConfig[]) => void;
  addConfigLocal: (config: LabelConfig) => void;
  removeConfigLocal: (id: string) => void;
  updateConfigLocal: (config: LabelConfig) => void;
}

export const useLabelConfigStore = create<Store>((set) => ({
  configs: [],

  setConfigs: (configs) => set({ configs }),

  addConfigLocal: (config) =>
    set((state) => ({
      configs: [...state.configs, config],
    })),

  removeConfigLocal: (id) =>
    set((state) => ({
      configs: state.configs.filter((c) => c._id !== id),
    })),

  updateConfigLocal: (updated) =>
    set((state) => ({
      configs: state.configs.map((c) =>
        c._id === updated._id ? updated : c
      ),
    })),
}));