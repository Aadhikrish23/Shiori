import { create } from "zustand";
import * as labelService from "../services/labelService";

interface LabelConfig {
  _id: string;
  name: string;
  tags: string[];
}

interface Store {
  configs: LabelConfig[];
  fetchLabels: () => Promise<void>;
  addConfig: (name: string, tags: string[]) => Promise<void>;
  deleteConfig: (id: string) => Promise<void>;
  updateConfig: (id: string, name: string, tags: string[]) => Promise<void>;
}

export const useLabelConfigStore = create<Store>((set) => ({
  configs: [],

  fetchLabels: async () => {
    const data = await labelService.getLabels();
    set({ configs: data });
  },

  addConfig: async (name, tags) => {
    const newLabel = await labelService.createLabel({ name, tags });

    set((state) => ({
      configs: [...state.configs, newLabel],
    }));
  },

  deleteConfig: async (id) => {
    await labelService.deleteLabel(id);

    set((state) => ({
      configs: state.configs.filter((c) => c._id !== id),
    }));
  },

  updateConfig: async (id, name, tags) => {
    const updated = await labelService.updateLabel(id, { name, tags });

    set((state) => ({
      configs: state.configs.map((c) =>
        c._id === id ? updated : c
      ),
    }));
  },
}));