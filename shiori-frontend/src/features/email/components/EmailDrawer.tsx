import { X } from "lucide-react";
import { motion } from "framer-motion";
import {
  archiveEmail,
  markImportant,
  unarchiveEmail,
  unmarkImportant,
} from "../../../services/emailService";
import { useState } from "react";

interface Props {
  email: any;
  open: boolean;
  onClose: () => void;
  onUpdate: (updated: any) => void;
}

const EmailDrawer = ({ email, open, onClose, onUpdate }: Props) => {
  const [loading, setLoading] = useState(false);
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
  const safeBody =
    email.body && email.body.trim().length > 0
      ? email.body
      : email.snippet?.replace(/\n/g, "<br>");

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* BACKDROP */}
      <div className="flex-1 bg-black/30" onClick={onClose} />

      {/* DRAWER */}
      <motion.div
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        exit={{ x: 500 }}
        transition={{ duration: 0.25 }}
        className="w-[500px] bg-white h-full shadow-xl p-6 overflow-y-auto"
      >
        {/* HEADER */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-lg font-semibold">
              {email.subject || "(No Subject)"}
            </h2>
            <p className="text-sm text-gray-500 mt-1">{email.from}</p>
          </div>

          <div className="flex gap-2">
            <a
              href={`https://mail.google.com/mail/u/0/#all/${email.messageId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1 rounded bg-blue-600 text-white"
            >
              Open in Gmail
            </a>
            <div className="flex gap-2 mt-4">
              {email.isArchived ? (
                <button onClick={handleUnarchive} disabled={loading}>
                  Unarchive
                </button>
              ) : (
                <button onClick={handleArchive} disabled={loading}>
                  Archive
                </button>
              )}

              {email.isImportant ? (
                <button onClick={handleUnimportant} disabled={loading}>
                  Unmark Important
                </button>
              ) : (
                <button onClick={handleImportant} disabled={loading}>
                  Mark Important
                </button>
              )}
            </div>

            <button onClick={onClose} title="openMail">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* META */}
        <div className="flex gap-3 text-xs mb-4">
          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">
            {email.category}
          </span>

          <span
            className={`px-2 py-1 rounded text-xs ${
              email.action === "needs_action"
                ? "bg-red-100 text-red-700"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {email.action}
          </span>
          {email.userOverride && (
            <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded">
              User Modified
            </span>
          )}

          <span className="px-2 py-1 bg-gray-100 rounded">
            {(email.confidence * 100).toFixed(0)}%
          </span>
        </div>

        {/* CONTENT */}
        <div className="text-sm text-gray-700 leading-relaxed">
          {email.loading ? (
            "Loading full email..."
          ) : email.body ? (
            <div className="email-body">
              <iframe
                srcDoc={safeBody}
                className="w-full h-[80vh] border-none"
              />
            </div>
          ) : (
            <p>{email.snippet}</p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default EmailDrawer;
