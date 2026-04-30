import { useState, useEffect } from "react";
import TagInput from "./TagInput";
import { useLabelActions } from "../hooks/useLabelActions";
import Button from "../../../shared/ui/components/Button";

const CreateLabelModal = ({ open, onClose, initialData }: any) => {
  const [keyword, setKeyword] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // 🔥 NEW

  const { configs, addConfig, updateConfig } = useLabelActions();

  useEffect(() => {
    if (initialData) {
      setKeyword(initialData.name);
      setTags(initialData.tags);
    } else {
      setKeyword("");
      setTags([]);
    }
    setError("");
    setLoading(false);
  }, [initialData, open]);

  const handleSave = async () => {
    const name = keyword.trim().toLowerCase();

    if (!name) {
      setError("Label name is required");
      return;
    }

    const exists = configs.some(
      (c) =>
        c.name.toLowerCase() === name &&
        (!initialData || c._id !== initialData._id)
    );

    if (exists) {
      setError("Label already exists");
      return;
    }

    try {
      setLoading(true); // 🔥 START LOADING

      if (initialData) {
        await updateConfig(initialData._id, name, tags);
      } else {
        await addConfig(name, tags);
      }

      onClose(); // success → close modal
    } catch (err: any) {
      if (
        err?.response?.status === 409 ||
        err?.message?.includes("duplicate")
      ) {
        setError("Label already exists");
      } else {
        setError("Something went wrong. Try again.");
      }
    } finally {
      setLoading(false); // 🔥 STOP LOADING
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={() => !loading && onClose()} // 🔥 block close while loading
    >
      <div
        className="
        bg-[var(--card)] border border-[var(--border)]
        p-6 rounded-2xl w-[520px]
        shadow-2xl space-y-5
        "
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-semibold text-[var(--text)]">
          {initialData ? "Edit Label" : "Create Label"}
        </h2>

        {/* INPUT */}
        <input
          type="text"
          placeholder="Label name (e.g. jobs)"
          value={keyword}
          disabled={loading} // 🔥 disable
          onChange={(e) => {
            const value = e.target.value;
            setKeyword(value);
            setError("");

            if (!value.trim()) {
              setTags([]);
            }
          }}
          className="
          w-full px-4 py-2.5 rounded-lg
          bg-transparent border border-[var(--border)]
          text-[var(--text)]
          focus:outline-none focus:ring-2 focus:ring-blue-500
          disabled:opacity-50
          "
        />

        {/* ERROR */}
        {error && <p className="text-sm text-red-500">{error}</p>}

        {/* TAG INPUT */}
        <TagInput keyword={keyword} tags={tags} setTags={setTags} />

        {/* ACTIONS */}
        <div className="flex justify-end gap-2 pt-2">
          <Button variant="ghost" onClick={onClose} disabled={loading}>
            Cancel
          </Button>

          <Button
            onClick={handleSave}
            disabled={!keyword.trim() || loading}
            className="min-w-[120px]"
          >
            {loading
              ? initialData
                ? "Updating..."
                : "Creating..."
              : initialData
              ? "Update"
              : "Create"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateLabelModal;