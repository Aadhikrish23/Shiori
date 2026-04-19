import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { useState } from "react";
import { useEmail } from "../../email/hooks/useEmail";

interface Props {
  open: boolean;
  onClose: () => void;
}

const ProcessModal = ({ open, onClose }: Props) => {
  const { processEmails } = useEmail();

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reprocess, setReprocess] = useState(false);
const now = new Date().toLocaleDateString('en-CA'); 
 const handleSubmit = async () => {
  let success = false;

  if (startDate && endDate) {
    success = await processEmails({
      startDate,
      endDate,
      includeProcessed: reprocess,
    });
  } else {
    success = await processEmails();
  }

  if (success) {
    alert("Processing started 🚀"); // simple feedback
  } else {
    alert("Failed to start processing");
  }

  onClose();
};
  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Process Emails</DialogTitle>

      <DialogContent className="space-y-4">
        <div className="flex gap-4">
          <input
            type="date"
            
            className="border p-2 rounded w-full"
            value={startDate}
            max={endDate?endDate:now} 
            onChange={(e) => setStartDate(e.target.value)}
          />

          <input
            type="date"
            className="border p-2 rounded w-full"
            value={endDate}
            max={now} 
            min={startDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={reprocess}
            onChange={(e) => setReprocess(e.target.checked)}
          />
          <span>Reprocess already processed emails</span>
        </div>

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Run Processing
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default ProcessModal;
