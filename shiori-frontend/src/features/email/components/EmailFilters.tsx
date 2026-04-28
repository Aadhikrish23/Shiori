import { useLabels } from "../../labels/hooks/useLabels";

interface Props {
  filters: any;
  setFilters: (f: any) => void;
  onBulkArchive: () => void; // 🔥 add this
}

const EmailFilters = ({ filters, setFilters, onBulkArchive }: Props) => {
  const { configs } = useLabels(); // 🔥 dynamic labels

  return (
    <div className="flex flex-wrap gap-3 mb-4">
      {/* LABEL FILTER */}
      <select
        className="border p-2 rounded"
        value={filters.label || ""}
        onChange={(e) =>
          setFilters({ ...filters, label: e.target.value, page: 1 })
        }
      >
        <option value="">All Labels</option>

        {configs.map((label) => (
          <option key={label._id} value={label.name}>
            {label.name.charAt(0).toUpperCase() + label.name.slice(1)}
          </option>
        ))}
      </select>

      {/* ACTION */}
      <select
        className="border p-2 rounded"
        value={filters.action || ""}
        onChange={(e) =>
          setFilters({ ...filters, action: e.target.value, page: 1 })
        }
      >
        <option value="">All Actions</option>
        <option value="needs_action">Needs Action</option>
        <option value="info">Info</option>
        <option value="waiting">Waiting</option>
        <option value="noise">Noise</option>
        <option value="archived">Archived</option>
        <option value="important">Important</option>
      </select>

      {/* TYPE */}
      <select
        className="border p-2 rounded"
        value={filters.type || ""}
        onChange={(e) =>
          setFilters({ ...filters, type: e.target.value, page: 1 })
        }
      >
        <option value="">All Types</option>
        <option value="primary">Primary</option>
        <option value="alert">Alert</option>
        <option value="update">Update</option>
        <option value="promotion">Promotion</option>
      </select>
      <button
        onClick={() => {
          console.log("CLICKED");
          onBulkArchive();
        }}
      >
        Archive all noise emails
      </button>
    </div>
  );
};

export default EmailFilters;
