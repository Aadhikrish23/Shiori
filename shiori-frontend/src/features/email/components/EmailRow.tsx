import Badge from "../../../shared/ui/components/Badge";

interface Props {
  email: any;
  onClick: (email: any) => void;
}

const EmailRow = ({ email, onClick }: Props) => {
  return (
    <div
      onClick={() => onClick(email)}
      className="grid grid-cols-12 gap-4 p-4 border-b border-[var(--border)] 
hover:bg-white/5 transition-all duration-200 cursor-pointer 
hover:scale-[1.01] hover:shadow-md"
    >
      {/* SUBJECT */}
      <div className="col-span-5">
        <p className="font-medium text-[var(--text)] truncate">
          {email.subject || "(No Subject)"}
        </p>
        <p className="text-xs text-[var(--muted)] truncate">{email.from}</p>
      </div>

      {/* LABEL */}
      <div className="col-span-2">
        <Badge label={email.category} variant="blue" />
      </div>

      {/* ACTION */}
      <div className="col-span-2">
        <Badge
          label={email.action}
          variant={
            email.action === "needs_action"
              ? "red"
              : email.action === "info"
                ? "green"
                : "gray"
          }
        />
      </div>
      {/* {email.action === "needs_action" && (
        <span className="text-yellow-500">⭐</span>
      )}

      {email.action === "noise" && (
        <span className="text-gray-400">Archived</span>
      )} */}

      {/* CONFIDENCE */}
      <div className="col-span-2">
        <span className="text-sm font-medium text-[var(--text)]">
          {(email.confidence * 100).toFixed(0)}%
        </span>
      </div>

      {/* TIME */}
      <div className="col-span-1 text-xs text-[var(--muted)]">
        {new Date(email.processedAt).toLocaleDateString()}
      </div>
    </div>
  );
};

export default EmailRow;
