// File: LabelCard.tsx

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
        group relative p-5 rounded-xl border
        bg-[var(--card)] border-[var(--border)]
        transition-all duration-300
        hover:shadow-lg hover:scale-[1.02]
        hover:border-blue-500/30
        overflow-hidden
      "
    >
      {/* Glow effect */}
      <div className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        bg-gradient-to-r from-blue-500/10 to-purple-500/10
        transition
      " />

      {/* HEADER */}
      <div className="flex justify-between items-start mb-3 relative z-10">
        <h3 className="text-lg font-semibold text-[var(--text)] capitalize">
          {name}
        </h3>

        <div className="
          opacity-0 group-hover:opacity-100
          transition flex gap-2
        ">
          <Button variant="ghost" onClick={onEdit}>
            Edit
          </Button>
          <Button variant="danger" onClick={onDelete}>
            Delete
          </Button>
        </div>
      </div>

      {/* TAGS */}
      <div className="flex gap-2 flex-wrap relative z-10">
        {tags.slice(0, 5).map((tag) => (
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

        {tags.length > 5 && (
          <span className="text-xs text-[var(--muted)]">
            +{tags.length - 5} more
          </span>
        )}
      </div>

      {/* FOOTER */}
      <p className="text-xs text-[var(--muted)] mt-4 relative z-10">
        {tags.length} keywords
      </p>
    </div>
  );
};

export default LabelCard;