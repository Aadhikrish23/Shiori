import Layout from "../../../shared/ui/layout/Layout";
import { useEffect, useState } from "react";
import { useEmail } from "../../email/hooks/useEmail";
import ProcessModal from "../components/ProcessModal";
import { useSchedule } from "../hooks/useSchedule";
const Processing = () => {
  const { stats, loading, fetchStats } = useEmail();

  const [openModal, setOpenModal] = useState(false);

  // 🔥 Automation state
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<"interval" | "daily">("interval");
  const [unit, setUnit] = useState<"minutes" | "hours">("minutes");
  const [value, setValue] = useState(5);
  const [dailyInterval, setDailyInterval] = useState(1);
  const [time, setTime] = useState("09:00");

  const [saving, setSaving] = useState(false);
  const [initialized, setInitialized] = useState(false); 
  const { saveSchedule, getSchedule } = useSchedule();


  useEffect(() => {
    fetchStats();

    const loadSchedule = async () => {
      try {
        const data = await getSchedule();

        if (!data) return;

        setEnabled(data.enabled);
        setMode(data.type);

        if (data.type === "interval") {
          if (data.intervalMinutes >= 60) {
            setUnit("hours");
            setValue(data.intervalMinutes / 60);
          } else {
            setUnit("minutes");
            setValue(data.intervalMinutes);
          }
        }

        if (data.type === "daily") {
          setDailyInterval(data.dailyInterval || 1);
          setTime(data.dailyTime || "09:00");
        }
      } catch (err) {
        console.error("Failed to load schedule", err);
      } finally {
        setInitialized(true); // 🔥 allow autosave AFTER load
      }
    };

    loadSchedule();

    const interval = setInterval(() => {
      // Optional optimization: only refresh when tab is active
      if (document.visibilityState === "visible") {
        fetchStats();
      }
    }, 5000); // every 5 sec

    return () => clearInterval(interval);
  }, []);

  // ==============================
  // 🔥 AUTO SAVE (SAFE)
  // ==============================
  useEffect(() => {
    if (!initialized) return; // ❗ prevent initial overwrite

    if (!enabled) {
      saveSchedule({ enabled: false });
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        setSaving(true);

        let payload: any = {
          enabled,
          type: mode,
        };

        if (mode === "interval") {
          payload.intervalMinutes = unit === "hours" ? value * 60 : value;
        }

        if (mode === "daily") {
          payload.dailyInterval = dailyInterval;
          payload.dailyTime = time;
        }

        await saveSchedule(payload);
      } catch (err) {
        console.error("Auto save failed", err);
      } finally {
        setSaving(false);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [enabled, mode, unit, value, dailyInterval, time, initialized]);

  const isDisabled = !enabled;

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Processing</h1>

        {/* 📊 STATS */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500">Total Processed</p>
            <h2 className="text-xl font-bold">
              {loading ? "..." : stats?.totalProcessed || 0}
            </h2>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500">Processed Today</p>
            <h2 className="text-xl font-bold">
              {loading ? "..." : stats?.processedToday || 0}
            </h2>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500">Last Run</p>

            <h2 className="text-sm font-medium">
              {stats?.lastRunAt
                ? new Date(stats.lastRunAt).toLocaleString()
                : "Never"}
            </h2>

            {stats?.lastActivityAt && (
              <p className="text-xs text-gray-500 mt-1">
                Last Activity: Processed {stats.lastActivityCount} emails at{" "}
                {new Date(stats.lastActivityAt).toLocaleString()}
              </p>
            )}
          </div>
        </div>

        {/* ⚙️ PROCESS */}
        <div className="bg-white p-4 rounded shadow">
          <button
            onClick={() => setOpenModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Process Emails
          </button>
        </div>

        {/* 🤖 AUTOMATION */}
        <div className="bg-white p-5 rounded shadow space-y-5">
          <h2 className="font-semibold text-lg">Automation</h2>

          {/* ENABLE */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={enabled}
              onChange={(e) => setEnabled(e.target.checked)}
            />
            <span>Enable automation</span>

            {saving && (
              <span className="text-sm text-gray-400 ml-2">Saving...</span>
            )}
          </div>

          <div
            className={`space-y-4 ${
              isDisabled ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            {/* MODE */}
            <div className="flex gap-3">
              <button
                onClick={() => setMode("interval")}
                className={`px-3 py-1 rounded ${
                  mode === "interval" ? "bg-blue-600 text-white" : "bg-gray-200"
                }`}
              >
                Interval
              </button>

              <button
                onClick={() => setMode("daily")}
                className={`px-3 py-1 rounded ${
                  mode === "daily" ? "bg-blue-600 text-white" : "bg-gray-200"
                }`}
              >
                Daily
              </button>
            </div>

            {/* INTERVAL */}
            {mode === "interval" && (
              <div className="flex gap-2 items-center">
                <span>Every</span>

                <select
                  value={value}
                  onChange={(e) => setValue(Number(e.target.value))}
                  className="border p-2 rounded"
                >
                  {unit === "minutes" ? (
                    <>
                      <option value={5}>5</option>
                      <option value={15}>15</option>
                      <option value={30}>30</option>
                    </>
                  ) : (
                    <>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={5}>5</option>
                      <option value={10}>10</option>
                    </>
                  )}
                </select>

                <select
                  value={unit}
                  onChange={(e) =>
                    setUnit(e.target.value as "minutes" | "hours")
                  }
                  className="border p-2 rounded"
                >
                  <option value="minutes">Minutes</option>
                  <option value="hours">Hours</option>
                </select>
              </div>
            )}

            {/* DAILY */}
            {mode === "daily" && (
              <div className="space-y-3">
                <div className="flex gap-2 items-center">
                  <span>Every</span>

                  <input
                    type="number"
                    min={1}
                    value={dailyInterval}
                    onChange={(e) => setDailyInterval(Number(e.target.value))}
                    className="border p-2 rounded w-20"
                  />

                  <span>day(s)</span>
                </div>

                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="border p-2 rounded"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <ProcessModal open={openModal} onClose={() => setOpenModal(false)} />
    </Layout>
  );
};

export default Processing;
