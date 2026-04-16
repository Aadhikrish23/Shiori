import Layout from "../components/layout/Layout";
import { useEffect, useState } from "react";
import CreateLabelModal from "../components/labels/CreateLabelModal";
import LabelCard from "../components/labels/LabelCard";
import { useLabelConfigStore } from "../store/labelConfigStore";

const Labels = () => {
  const [open, setOpen] = useState(false);
  const { configs, deleteConfig, fetchLabels } = useLabelConfigStore();
  const [editingLabel, setEditingLabel] = useState<any>(null);
  useEffect(() => {
    fetchLabels();
  }, []);
  return (
    <Layout>
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Labels</h1>
        <button
          onClick={() => {
            setEditingLabel(null);
            setOpen(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Create Label
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {configs.map((config) => (
          <LabelCard
            key={config._id}
            id={config._id}
            name={config.name}
            tags={config.tags}
            onDelete={() => deleteConfig(config._id)}
            onEdit={() => {
              setEditingLabel(config);
              setOpen(true);
            }}
          />
        ))}
      </div>

      <CreateLabelModal
        open={open}
        onClose={() => {
          setOpen(false);
          setEditingLabel(null);
        }}
        initialData={editingLabel}
      />
    </Layout>
  );
};

export default Labels;
