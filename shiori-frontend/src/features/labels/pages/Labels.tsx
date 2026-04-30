import Layout from "../../../shared/ui/layout/Layout";
import { useState } from "react";
import CreateLabelModal from "../components/CreateLabelModal";
import LabelCard from "../components/LabelCard";
import { useLabels } from "../hooks/useLabels";
import Button from "../../../shared/ui/components/Button";
const Labels = () => {
  const [open, setOpen] = useState(false);

  const [editingLabel, setEditingLabel] = useState<any>(null);
  const { configs, deleteConfig } = useLabels();
  return (
    <Layout>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--text)]">Labels</h1>
          <p className="text-sm text-[var(--muted)]">
            Define how AI categorizes your emails
          </p>
        </div>

        <Button
          onClick={() => {
            setEditingLabel(null);
            setOpen(true);
          }}
        >
          + Create Label
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {configs.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-[var(--muted)] text-sm">No labels created yet</p>
            <Button
              className="mt-4"
              onClick={() => {
                setEditingLabel(null);
                setOpen(true);
              }}
            >
              Create your first label
            </Button>
          </div>
        ) : (
          configs.map((config) => (
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
          ))
        )}
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
