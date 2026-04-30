import { X } from "lucide-react";
import { motion } from "framer-motion";
import {
  archiveEmail,
  markImportant,
  unarchiveEmail,
  unmarkImportant,
} from "../../../services/emailService";
import { useEffect, useState } from "react";
import Button from "../../../shared/ui/components/Button";

interface Props {
  email: any;
  open: boolean;
  onClose: () => void;
  onUpdate: (updated: any) => void;
}

const EmailDrawer = ({ email, open, onClose, onUpdate }: Props) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);
  if (!open || !email) return null;
  const handleArchive = async () => {
    setLoading(true);
    await archiveEmail(email.messageId);
    onUpdate({ ...email, isArchived: true, isImportant: false });
    setLoading(false);
  };

  const handleUnarchive = async () => {
    setLoading(true);
    await unarchiveEmail(email.messageId);
    onUpdate({ ...email, isArchived: false });
    setLoading(false);
  };

  const handleImportant = async () => {
    setLoading(true);
    await markImportant(email.messageId);
    onUpdate({ ...email, isImportant: true, isArchived: false });
    setLoading(false);
  };

  const handleUnimportant = async () => {
    setLoading(true);
    await unmarkImportant(email.messageId);
    onUpdate({ ...email, isImportant: false });
    setLoading(false);
  };
  const isHTML =
    email.body &&
    (email.body.includes("<html") ||
      email.body.includes("<div") ||
      email.body.includes("<table"));

  const safeBody = isHTML
    ? email.body
    : (email.body || email.snippet || "").replace(/\n/g, "<br>");

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* BACKDROP */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="flex-1 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* DRAWER */}
      <motion.div
        initial={{ x: 520 }}
        animate={{ x: 0 }}
        exit={{ x: 520 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 25,
        }}
        className="w-200 bg-[var(--card)] border-l border-[var(--border)] h-full shadow-2xl p-6 overflow-y-auto sticky top-0 bg-[var(--card)] z-10 pb-3 border-b border-[var(--border)] mb-4"
      >
        {/* HEADER */}
        <div className="flex justify-between items-start mb-5 gap-4">
          {/* LEFT */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-[var(--text)] leading-snug">
              {email.subject || "(No Subject)"}
            </h2>
            <p className="text-sm text-[var(--muted)] mt-1">{email.from}</p>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2">
            <a
              href={`https://mail.google.com/mail/u/0/#all/${email.messageId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition"
            >
              Gmail
            </a>

            <Button
              size="sm"
              variant="ghost"
              onClick={email.isArchived ? handleUnarchive : handleArchive}
              disabled={loading}
            >
              {email.isArchived ? "Unarchive" : "Archive"}
            </Button>

            <Button
              size="sm"
              variant="secondary"
              onClick={email.isImportant ? handleUnimportant : handleImportant}
              disabled={loading}
            >
              {email.isImportant ? "Unmark" : "Important"}
            </Button>

            <button
              onClick={onClose}
              className="ml-2 text-[var(--muted)] hover:text-[var(--text)]"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* META */}
        <div className="flex gap-2 text-xs mb-4 flex-wrap">
          <span className="px-2 py-1 rounded-full bg-blue-500/10 text-blue-400">
            {email.category}
          </span>

          <span
            className={`px-2 py-1 rounded-full ${
              email.action === "needs_action"
                ? "bg-red-500/10 text-red-400"
                : "bg-gray-500/10 text-gray-300"
            }`}
          >
            {email.action}
          </span>

          <span className="px-2 py-1 rounded-full bg-gray-500/10 text-gray-300">
            {(email.confidence * 100).toFixed(0)}%
          </span>
        </div>

        {/* CONTENT */}
        <div className="text-sm text-[var(--text)] leading-relaxed">
          {email.loading ? (
            <div className="space-y-3 animate-pulse">
              <div className="h-4 bg-white/10 rounded w-3/4"></div>
              <div className="h-4 bg-white/10 rounded w-1/2"></div>
              <div className="h-4 bg-white/10 rounded w-full"></div>
              <div className="h-4 bg-white/10 rounded w-2/3"></div>
            </div>
          ) : isHTML ? (
            <div className="email-body">
              <iframe
                srcDoc={safeBody}
                className="w-full h-[80vh] border-none rounded-lg"
              />
            </div>
          ) : (
            <div className="whitespace-pre-wrap break-words text-[var(--muted)] text-sm leading-relaxed bg-white/5 p-4 rounded-xl border border-[var(--border)] font-mono">
              {email.body || email.snippet}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default EmailDrawer;
