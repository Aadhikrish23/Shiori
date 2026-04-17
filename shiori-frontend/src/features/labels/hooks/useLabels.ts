import { useEffect } from "react";
import { useLabelActions } from "./useLabelActions";

export const useLabels = () => {
  const { configs, fetchLabels, addConfig, deleteConfig, updateConfig } =
    useLabelActions();

  useEffect(() => {
    fetchLabels();
  }, []);

  return {
    configs,
    addConfig,
    deleteConfig,
    updateConfig,
  };
};