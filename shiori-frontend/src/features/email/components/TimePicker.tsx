import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  time: string;
  setTime: (t: string) => void;
}

const TimePicker = ({ open, onClose, time, setTime }: Props) => {
  const [temp, setTemp] = useState(time);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      
      <div className="w-[320px] rounded-2xl bg-[var(--card)] border border-[var(--border)] shadow-xl p-5 space-y-4">

        <h2 className="text-lg font-semibold text-center">Pick Time</h2>

        {/* SIMPLE INPUT (cleaner than ugly default clock) */}
        <input
          type="time"
          value={temp}
          onChange={(e) => setTemp(e.target.value)}
          className="
            w-full
            border border-[var(--border)]
            bg-transparent
            text-[var(--text)]
            px-3 py-2
            rounded-lg
          "
        />

        {/* ACTIONS */}
        <div className="flex justify-end gap-2 pt-2">
          <button
            onClick={onClose}
            className="px-3 py-1.5 text-sm rounded-lg border border-[var(--border)]"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              setTime(temp);
              onClose();
            }}
            className="px-3 py-1.5 text-sm rounded-lg bg-blue-600 text-white"
          >
            Set
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimePicker;