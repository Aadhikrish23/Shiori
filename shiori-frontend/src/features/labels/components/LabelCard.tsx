import Button from "../../../shared/ui/components/Button";

interface Props {
  id: string;
  name: string;
  tags: string[];
  onDelete: () => void;
  onEdit: () => void;
}

const LabelCard = ({ name, tags, onDelete, onEdit }: Props) => {
  return (
    <div
      className="
      group p-5 rounded-xl border
      bg-[var(--card)] border-[var(--border)]
      transition-all duration-200
      hover:shadow-lg hover:scale-[1.02] hover:border-blue-500/30
      "
    >
      {/* HEADER */}
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-[var(--text)]">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h3>

        <div className="opacity-0 group-hover:opacity-100 transition flex gap-2">
          <Button size="sm" variant="ghost" onClick={onEdit}>
            Edit
          </Button>
          <Button size="sm" variant="danger" onClick={onDelete}>
            Delete
          </Button>
        </div>
      </div>

      {/* TAGS */}
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <span
            key={tag}
            className="
              px-2 py-1 text-xs rounded-full
              bg-blue-500/10 text-blue-400
            "
          >
            {tag}
          </span>
        ))}
      </div>

      {/* FOOTER */}
      <p className="text-xs text-[var(--muted)] mt-4">
        {tags.length} keywords
      </p>
    </div>
  );
};

export default LabelCard;