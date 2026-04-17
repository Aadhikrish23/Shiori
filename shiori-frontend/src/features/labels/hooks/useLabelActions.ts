import { useLabelConfigStore } from "../../../store/labelConfigStore";
import * as labelService from "../../../services/labelService";

export const useLabelActions = () => {
  const {
    configs,
    setConfigs,
    addConfigLocal,
    removeConfigLocal,
    updateConfigLocal,
  } = useLabelConfigStore();

  const fetchLabels = async () => {
    const data = await labelService.getLabels();
    setConfigs(data);
  };

  const addConfig = async (name: string, tags: string[]) => {
    const newLabel = await labelService.createLabel({ name, tags });
    addConfigLocal(newLabel);
  };

  const deleteConfig = async (id: string) => {
    await labelService.deleteLabel(id);
    removeConfigLocal(id);
  };

  const updateConfig = async (
    id: string,
    name: string,
    tags: string[]
  ) => {
    const updated = await labelService.updateLabel(id, { name, tags });
    updateConfigLocal(updated);
  };

  return {
    configs,
    fetchLabels,
    addConfig,
    deleteConfig,
    updateConfig,
  };
};