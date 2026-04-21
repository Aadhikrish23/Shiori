import { X } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  email: any;
  open: boolean;
  onClose: () => void;
}

const EmailDrawer = ({ email, open, onClose }: Props) => {
  if (!open || !email) return null;

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
              email.action === "Needs_action"
                ? "bg-red-100 text-red-700"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {email.action}
          </span>

          <span className="px-2 py-1 bg-gray-100 rounded">
            {(email.confidence * 100).toFixed(0)}%
          </span>
        </div>

        {/* CONTENT */}
       <div className="text-sm text-gray-700 leading-relaxed">
  {email.loading
    ? "Loading full email..."
    : email.body || email.snippet}
</div>
      </motion.div>
    </div>
  );
};

export default EmailDrawer;
