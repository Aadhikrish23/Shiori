import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { useState, useEffect } from "react";
import TagInput from "./TagInput";
import { useLabelActions } from "../hooks/useLabelActions";

interface Props {
  open: boolean;
  onClose: () => void;
  initialData?: {
    _id: string;
    name: string;
    tags: string[];
  };
}

const CreateLabelModal = ({ open, onClose, initialData }: Props) => {
  const [keyword, setKeyword] = useState("");
  const [tags, setTags] = useState<string[]>([]);

const { addConfig, updateConfig } = useLabelActions();
  // 🔥 Sync data when editing
  useEffect(() => {
    if (initialData) {
      setKeyword(initialData.name);
      setTags(initialData.tags);
    } else {
      setKeyword("");
      setTags([]);
    }
  }, [initialData, open]);

  const handleSave = async () => {
    if (!keyword) return;

    if (initialData) {
      // 🔥 UPDATE MODE
      await updateConfig(initialData._id, keyword, tags);
    } else {
      // 🔥 CREATE MODE
      await addConfig(keyword, tags);
    }

    onClose();
    setKeyword("");
    setTags([]);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>
        {initialData ? "Edit Label" : "Create Label"}
      </DialogTitle>

      <DialogContent className="space-y-4">
        <input
          type="text"
          placeholder="Enter keyword (e.g. jobs)"
          className="w-full border p-2 rounded"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        <TagInput keyword={keyword} tags={tags} setTags={setTags} />

        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {initialData ? "Update" : "Save"}
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default CreateLabelModal;