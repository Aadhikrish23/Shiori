import Layout from "../components/layout/Layout";
import { useEffect, useState } from "react";
import { useEmailStore } from "../store/emailStore";
import ProcessModal from "../components/processing/ProcessModal";

const Processing = () => {
  const { stats, loading, fetchStats } = useEmailStore();

  const [openModal, setOpenModal] = useState(false);

  // 🔥 Automation state
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<"interval" | "daily">("interval");
  const [unit, setUnit] = useState<"minutes" | "hours">("minutes");
  const [value, setValue] = useState(5);
  const [dailyInterval, setDailyInterval] = useState(1);
  const [time, setTime] = useState("");

  const isDisabled = !enabled;

  useEffect(() => {
    fetchStats();
  }, []);

  const handleSaveAutomation = () => {
    if (!enabled) {
      alert("Enable automation first");
      return;
    }

    if (mode === "interval") {
      if (unit === "minutes" && value < 5) {
        alert("Minimum is 5 minutes");
        return;
      }
    }

    if (mode === "daily" && !time) {
      alert("Please select time for daily schedule");
      return;
    }

    console.log({
      enabled,
      mode,
      unit,
      value,
      dailyInterval,
      time,
    });

    alert("Automation settings saved (backend next)");
  };

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
              {stats?.lastProcessedAt
                ? new Date(stats.lastProcessedAt).toLocaleString()
                : "Never"}
            </h2>
          </div>
        </div>

        {/* ⚙️ ACTION */}
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

          {/* Enable */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={enabled}
              onChange={(e) => setEnabled(e.target.checked)}
            />
            <span>Enable automation</span>
          </div>

          {/* Disabled wrapper */}
          <div
            className={`space-y-4 ${
              isDisabled ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            {/* Mode */}
            <div className="flex gap-3">
              <button
                onClick={() => setMode("interval")}
                className={`px-3 py-1 rounded ${
                  mode === "interval"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                Interval
              </button>

              <button
                onClick={() => setMode("daily")}
                className={`px-3 py-1 rounded ${
                  mode === "daily"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
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
                    onChange={(e) =>
                      setDailyInterval(Number(e.target.value))
                    }
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

            {/* SAVE */}
            <button
              onClick={handleSaveAutomation}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Save Automation
            </button>
          </div>
        </div>
      </div>

      <ProcessModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </Layout>
  );
};

export default Processing;