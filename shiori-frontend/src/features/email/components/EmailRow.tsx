// File: src/features/email/components/EmailRow.tsx

import Badge from "../../../shared/ui/components/Badge";

const EmailRow = ({ email, onClick }: any) => {
  return (
    <div
      onClick={() => onClick(email)}
      className="
        grid grid-cols-12 gap-4 p-4 border-b border-[var(--border)]
        hover:bg-[var(--accent-soft)]
        transition-all duration-200 cursor-pointer
        hover:scale-[1.01]
      "
    >
      <div className="col-span-5">
        <p className="font-medium text-[var(--text)] truncate">
          {email.subject || "(No Subject)"}
        </p>
        <p className="text-xs text-[var(--muted)] truncate">
          {email.from}
        </p>
      </div>

      <div className="col-span-2">
        <Badge label={email.category} variant="blue" />
      </div>

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

      <div className="col-span-2 text-[var(--text)] text-sm">
        {(email.confidence * 100).toFixed(0)}%
      </div>

      <div className="col-span-1 text-xs text-[var(--muted)]">
        {new Date(email.processedAt).toLocaleDateString()}
      </div>
    </div>
  );
};

export default EmailRow;