import { useMemo, useEffect, useState } from "react";
import TimePicker from "./TimePicker";

interface Props {
  mode: "interval" | "daily";
  setMode: (m: "interval" | "daily") => void;

  unit: "minutes" | "hours";
  setUnit: (u: "minutes" | "hours") => void;

  value: number;
  setValue: (v: number) => void;

  dailyInterval: number;
  setDailyInterval: (v: number) => void;

  time: string;
  setTime: (t: string) => void;
}

const minuteSteps = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, "1h"];
const hourSteps = ["55m", 1, 2, 3, 4, 6, 8, 12, 18, 23, "1d"];
const daySteps = ["23h", 1, 2, 3, 5, 7, 10, 15, 30];

const timePresets = ["06:00", "09:00", "12:00", "15:00", "18:00", "21:00"];

const formatTime = (t: string) => {
  const [h, m] = t.split(":");
  let hour = Number(h);
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  return `${hour}:${m} ${ampm}`;
};

const Scheduler = ({
  mode,
  setMode,
  unit,
  setUnit,
  value,
  setValue,
  dailyInterval,
  setDailyInterval,
  time,
  setTime,
}: Props) => {
  const [open, setOpen] = useState(false);

  // ✅ default time
  useEffect(() => {
    if (!time) setTime("09:00");
  }, [time, setTime]);

  // 🔥 UI MODE
  const uiMode = useMemo(() => {
    if (mode === "daily") return "days";
    return unit === "hours" ? "hours" : "minutes";
  }, [mode, unit]);

  // 🔥 TRANSITIONS
  const handleClick = (item: any) => {
    // minutes → hours
    if (uiMode === "minutes" && item === "1h") {
      setUnit("hours");
      setValue(1);
      return;
    }

    // hours → minutes
    if (uiMode === "hours" && item === "55m") {
      setUnit("minutes");
      setValue(55);
      return;
    }

    // hours → days
    if (uiMode === "hours" && item === "1d") {
      setMode("daily");
      setDailyInterval(1);
      return;
    }

    // days → hours
    if (uiMode === "days" && item === "23h") {
      setMode("interval");
      setUnit("hours");
      setValue(23);
      return;
    }

    // ✅ normal values (SAFE TYPE CHECK)
    if (typeof item === "number") {
      if (uiMode === "minutes") {
        setUnit("minutes");
        setValue(item);
      }

      if (uiMode === "hours") {
        setUnit("hours");
        setValue(item);
      }

      if (uiMode === "days") {
        setDailyInterval(item);
      }
    }
  };

  const chip =
    "px-3 py-1.5 rounded-full text-sm border transition-all duration-200";
  const active = "bg-blue-600 text-white border-blue-500";
  const inactive =
    "bg-[var(--card)] border-[var(--border)] hover:bg-blue-500/10";

  const renderSteps = () => {
    let steps: any[] = [];

    if (uiMode === "minutes") steps = minuteSteps;
    if (uiMode === "hours") steps = hourSteps;
    if (uiMode === "days") steps = daySteps;

    return steps.map((item) => {
      const isActive =
        (uiMode === "minutes" &&
          unit === "minutes" &&
          value === item) ||
        (uiMode === "hours" &&
          unit === "hours" &&
          value === item) ||
        (uiMode === "days" &&
          dailyInterval === item);

      return (
        <button
          key={item}
          onClick={() => handleClick(item)}
          className={`${chip} ${isActive ? active : inactive}`}
        >
          {typeof item === "number"
            ? uiMode === "minutes"
              ? item
              : uiMode === "hours"
              ? `${item}h`
              : `${item}d`
            : item}
        </button>
      );
    });
  };

  return (
    <div className="space-y-5">
      {/* MODE */}
      <div className="flex gap-2">
        <button
          onClick={() => setMode("interval")}
          className={`px-4 py-1.5 rounded-lg text-sm ${
            mode === "interval"
              ? "bg-blue-600 text-white"
              : "bg-[var(--card)] border border-[var(--border)]"
          }`}
        >
          Interval
        </button>

        <button
          onClick={() => setMode("daily")}
          className={`px-4 py-1.5 rounded-lg text-sm ${
            mode === "daily"
              ? "bg-blue-600 text-white"
              : "bg-[var(--card)] border border-[var(--border)]"
          }`}
        >
          Daily
        </button>
      </div>

      {/* STEPS */}
      <div className="flex items-center flex-wrap gap-2">
        {renderSteps()}

        <span className="text-sm text-[var(--muted)] ml-2">
          {mode === "daily"
            ? "days"
            : unit === "hours"
            ? "hours"
            : "minutes"}
        </span>
      </div>

      {/* DAILY TIME */}
      {mode === "daily" && (
        <div className="space-y-3">
          <p className="text-sm text-[var(--muted)]">Run at</p>

          <div className="flex gap-2 overflow-x-auto">
            {timePresets.map((t) => {
              const isActive = time === t;

              return (
                <button
                  key={t}
                  onClick={() => {
                    if (isActive) setOpen(true);
                    else setTime(t);
                  }}
                  className={`px-4 py-2 rounded-full text-sm border flex items-center gap-2 ${
                    isActive
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-[var(--card)] border-[var(--border)] hover:bg-blue-500/10"
                  }`}
                >
                  {formatTime(t)}
                  {isActive && <span>⏱</span>}
                </button>
              );
            })}
          </div>

          <TimePicker
            open={open}
            onClose={() => setOpen(false)}
            time={time}
            setTime={setTime}
          />
        </div>
      )}
    </div>
  );
};

export default Scheduler;