import Button from "../../../shared/ui/components/Button";
import { useLabels } from "../../labels/hooks/useLabels";

interface Props {
  filters: any;
  setFilters: (f: any) => void;
  onBulkArchive: () => void;
}

const EmailFilters = ({ filters, setFilters, onBulkArchive }: Props) => {
  const { configs } = useLabels();

  return (
    <div className="flex items-center justify-between mb-5 flex-wrap gap-4">
      
      {/* LEFT: FILTERS */}
      <div className="flex items-center gap-3 flex-wrap">
        
        {/* LABEL */}
        <select
          className="filter-select"
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
          className="filter-select"
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
          className="filter-select"
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

      </div>

      {/* RIGHT: ACTION */}
      <div className="flex items-center gap-2">
        <Button variant="danger" onClick={onBulkArchive}>
          Archive Noise
        </Button>
      </div>
    </div>
  );
};

export default EmailFilters;