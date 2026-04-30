import { useState, useEffect } from "react";
import { useEmail } from "../hooks/useEmail";
import * as emailService from "../../../services/emailService";
import Button from "../../../shared/ui/components/Button";
import { motion } from "framer-motion";

const ProcessModal = ({ open, onClose, onComplete }: any) => {
  const { processEmails, job, fetchJobStatus } = useEmail();

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [includeProcessed, setIncludeProcessed] = useState(false);

  const [running, setRunning] = useState(false);
  const [completed, setCompleted] = useState(false);
  const canClose = !running;
  // =========================
  // POLLING
  // =========================
  useEffect(() => {
    if (!running) return;

    const interval = setInterval(async () => {
      const data = await fetchJobStatus();

      if (!data || data.status !== "active") {
        clearInterval(interval);

        setRunning(false);
        setCompleted(true);

        setTimeout(() => {
          setCompleted(false);
          onComplete?.(); // 🔥 trigger parent refresh
          onClose();
        }, 1500);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [running]);

  // =========================
  // START PROCESS
  // =========================
  const handleRun = async () => {
    const ok = await processEmails({
      startDate,
      endDate,
      includeProcessed,
    });

    if (ok) {
      setRunning(true);
      setCompleted(false);
    }
  };
  const today = new Date().toISOString().split("T")[0];
  // ❗ AFTER hooks — safe
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center"
      onClick={() => {
        if (canClose) onClose();
      }}
    >
      <div
        className="bg-[var(--card)] border border-[var(--border)] p-6 rounded-2xl w-[500px] shadow-xl space-y-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold">Process Emails</h2>
        <button
          onClick={() => canClose && onClose()}
          disabled={!canClose}
          className={`absolute top-3 right-3 text-[var(--muted)] text-lg
    ${!canClose ? "opacity-40 cursor-not-allowed" : "hover:text-[var(--text)]"}
  `}
        >
          ✕
        </button>

        {/* FORM */}
        {!running && !completed && (
          <>
            <div className="flex gap-3">
              <input
                type="date"
                value={startDate}
                max={endDate ? endDate : today}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-transparent border border-[var(--border)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="date"
                value={endDate}
                min={startDate}
                max={today}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-transparent border border-[var(--border)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <label className="flex items-center gap-2 text-[var(--text)]">
              <input
                type="checkbox"
                checked={includeProcessed}
                onChange={(e) => setIncludeProcessed(e.target.checked)}
              />
              Reprocess already processed emails
            </label>

            <Button onClick={handleRun}>Run Processing</Button>
          </>
        )}

        {/* PROGRESS */}
        {running && (
          <div className="space-y-3">
            <p className="font-medium">Processing emails...</p>

            <div className="h-2 bg-gray-700 rounded-full">
              <div
                className="h-2 bg-blue-500 rounded-full transition-all"
                style={{ width: `${job?.progress || 0}%` }}
              />
            </div>

            <motion.div
              className="h-2 bg-blue-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${job?.progress || 0}}%` }}
              transition={{ ease: "easeOut", duration: 0.4 }}
            />
            <Button variant="danger" onClick={() => emailService.cancelJob()}>
              Cancel
            </Button>
          </div>
        )}

        {/* COMPLETED */}
        {completed && (
          <div className="text-center space-y-2">
            <p className="text-green-600 font-semibold">
              ✅ Completed Successfully
            </p>
            <p className="text-sm text-gray-500">Closing...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProcessModal;
