import Layout from "../../../shared/ui/layout/Layout";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useEmailList } from "../hooks/useEmailList";
import { useEmail } from "../hooks/useEmail";
import { useSchedule } from "../hooks/useSchedule";
import Button from "../../../shared/ui/components/Button";
import Card from "../../../shared/ui/components/Card";

import EmailRow from "../components/EmailRow";
import EmailFilters from "../components/EmailFilters";
import Pagination from "../components/Pagination";
import ProcessModal from "../components/ProcessModal";
import { useScheduler } from "../hooks/useScheduler";
import EmailDrawer from "../components/EmailDrawer";
import { archiveall, getSingleEmail } from "../../../services/emailService";
import SectionHeader from "../../../shared/ui/components/SectionHeader";
import Scheduler from "../components/Scheduler";

const Emails = () => {
  const { emails, pagination, loading, fetchEmails, setEmails } =
    useEmailList();
  const { stats, fetchStats, job,  processBulk } = useEmail();
  const { nextRun, remaining, refreshNextRun, formatNextRun } =
    useScheduler();
  const { saveSchedule, getSchedule } = useSchedule();
  const [selectedEmail, setSelectedEmail] = useState<any>(null);

  // =========================
  // FILTERS
  // =========================
  const [filters, setFilters] = useState({
    page: 1,
    limit: 12,
    label: "",
    action: "",
    type: "",
  });

  const [openModal, setOpenModal] = useState(false);

  // =========================
  // SCHEDULER STATE
  // =========================
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<"interval" | "daily">("interval");

  const [unit, setUnit] = useState<"minutes" | "hours">("minutes");
  const [value, setValue] = useState(5);

  const [dailyInterval, setDailyInterval] = useState(1);
  const [time, setTime] = useState("09:00");

  const [initialized, setInitialized] = useState(false);

  // =========================
  // INITIAL LOAD
  // =========================
  useEffect(() => {
    const t = setTimeout(() => {
      fetchEmails(filters);
    }, 300);

    return () => clearTimeout(t);
  }, [filters]);
  useEffect(() => {
    fetchStats();
  }, []);

  useEffect(() => {
    const load = async () => {
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
      } finally {
        setInitialized(true);
      }
    };

    load();
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!selectedEmail) return;

      if (e.key === "Escape") {
        setSelectedEmail(null);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedEmail]);
  // =========================
  // 🔥 REFRESH AFTER COMPLETE
  // =========================
  const [hasRefetched, setHasRefetched] = useState(false);

  useEffect(() => {
    if (job?.status === "completed" && !hasRefetched) {
      setHasRefetched(true);

      fetchEmails(filters);
      fetchStats();
      refreshNextRun();
    }

    if (job?.status !== "completed") {
      setHasRefetched(false);
    }
  }, [job?.status]);

  useEffect(() => {
    if (!initialized) return;

    const timeout = setTimeout(async () => {
      try {
        if (!enabled) {
          await saveSchedule({ enabled: false });

          // ✅ CLEAR UI STATE
          refreshNextRun();
          return;
        }

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

          // 🔥 IMPORTANT: also send intervalMinutes
          payload.intervalMinutes = dailyInterval * 24 * 60;
        }

        await saveSchedule(payload);

        // ✅ UPDATE UI IMMEDIATELY
        refreshNextRun();
      } catch (err) {
        console.error(err);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [enabled, mode, unit, value, dailyInterval, time, initialized]);

  const handleEmailClick = useCallback(async (email: any) => {
    setSelectedEmail({ ...email, loading: true });

    try {
      const full = await getSingleEmail(email.messageId);

      setSelectedEmail({
        ...email,
        ...full,
        loading: false,
      });
    } catch {
      setSelectedEmail({
        ...email,
        loading: false,
      });
    }
  }, []);
  const emailListUI = useMemo(() => {
    if (loading) {
      return (
        <div className="p-6 space-y-3 animate-pulse">
          <div className="h-4 bg-[var(--border)] rounded w-1/3" />
          <div className="h-4 bg-[var(--border)] rounded w-1/2" />
          <div className="h-4 bg-[var(--border)] rounded w-full" />
        </div>
      );
    }

    if (emails.length === 0) {
      return <p className="p-6 text-[var(--muted)]">No emails found</p>;
    }

    return emails.map((email) => (
      <EmailRow key={email._id} email={email} onClick={handleEmailClick} />
    ));
  }, [emails, loading, handleEmailClick]);
  // =========================
  // UI
  // =========================
  return (
    <Layout>
      <div className="space-y-6">
        {/* HEADER */}
        <SectionHeader
          title="Emails"
          subtitle="AI-powered email classification"
          right={
            <div className="flex gap-3">
              <Button onClick={() => setOpenModal(true)}>Custom Process</Button>

              <Button variant="secondary" onClick={processBulk}>
                Bulk Process
              </Button>
            </div>
          }
        />

        {/* 🔥 PROGRESS
        {job?.status === "active" && (
          <div className="bg-white border rounded-xl p-5">
            <div className="flex justify-between mb-2">
              <span className="font-medium">Processing...</span>
              <span>{job.progress || 0}%</span>
            </div>

            <div className="h-2 bg-gray-200 rounded">
              <div
                className="h-2 bg-blue-600 transition-all duration-300"
                style={{ width: `${job.progress || 0}%` }}
              />
            </div>

            <button
              onClick={() => emailService.cancelJob()}
              className="mt-3 px-3 py-1 bg-red-500 text-white rounded"
            >
              Cancel
            </button>
          </div>
        )} */}

        {/* 🔥 AUTOMATION */}
        <div className="bg-[var(--card)] border border-[var(--border)] p-5 rounded-xl space-y-4">
          <h2 className="font-semibold text-lg">Automation</h2>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={enabled}
              onChange={(e) => setEnabled(e.target.checked)}
            />
            <span>Enable automation</span>
          </div>
          <div
            className={`p-5 rounded-xl border${
              enabled
                ? "bg-blue-500/10 border border-blue-500/20"
                : "bg-[var(--card)] border-[var(--border)]"
            }`}
          >
            {/* HEADER */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-[var(--muted)]">Next Run</p>
                {!enabled ? (
                  <p className="text-sm  text-[var(--muted)]">
                    Automation is disabled
                  </p>
                ) : (
                  <p className="text-lg font-semibold text-[var(--text)]">
                    {formatNextRun(nextRun)}
                  </p>
                )}
              </div>

              {/* STATUS BADGE */}
              <div>
                <div>
                  {!enabled ? (
                    <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-[var(--muted)]">
                      Disabled
                    </span>
                  ) : job?.status === "active" ? (
                    <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700">
                      Running
                    </span>
                  ) : (
                    <span className="text-xs px-3 py-1 rounded-full bg-gray-500/10 text-gray-300">
                      Idle
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* COUNTDOWN */}
            <div className="mt-4">
              <p className="text-xs text-[var(--muted)]">Starts in</p>
              {!enabled ? (
                <p className="text-sm  text-[var(--muted)]">—</p>
              ) : (
                <p className="text-2xl font-bold text-blue-600">
                  {remaining || "—"}
                </p>
              )}
            </div>

            {/* PROGRESS BAR (optional but 🔥) */}
            {enabled && remaining && (
              <div className="mt-4 h-2 bg-blue-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 animate-pulse w-full" />
              </div>
            )}
          </div>

          <div
            className={`space-y-4 ${
              !enabled ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            <Scheduler
              mode={mode}
              setMode={setMode}
              unit={unit}
              setUnit={setUnit}
              value={value}
              setValue={setValue}
              dailyInterval={dailyInterval}
              setDailyInterval={setDailyInterval}
              time={time}
              setTime={setTime}
            />
          </div>
        </div>

        {/* 🔥 STATS */}
        <div className="grid grid-cols-3 gap-4">
          <Card>
            <p className="text-xs text-[var(--muted)]">Total</p>
            <p className="text-2xl font-semibold text-[var(--text)]">
              {stats?.totalProcessed || 0}
            </p>
          </Card>

          <Card>
            <p className="text-xs text-[var(--muted)]">Today</p>
            <p className="text-2xl font-semibold text-[var(--text)]">
              {stats?.processedToday || 0}
            </p>
          </Card>

          <Card>
            <p className="text-xs text-[var(--muted)]">Last Processed</p>
            <p className="text-2xl font-semibold text-[var(--text)]">
              {stats?.lastProcessedAt
                ? new Date(stats.lastProcessedAt).toLocaleString()
                : "Never"}
            </p>
          </Card>
        </div>

        {/* FILTERS */}
        <EmailFilters
          filters={filters}
          setFilters={setFilters}
          onBulkArchive={async () => {
            await archiveall();
            fetchEmails(filters); // 🔥 refresh list after bulk archive
          }}
        />

        {/* LIST */}
        <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] overflow-hidden shadow-sm">
          {emailListUI}
        </div>
        <Pagination
          pagination={pagination}
          onPageChange={(page) => setFilters({ ...filters, page })}
        />
      </div>

      <ProcessModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onComplete={() => {
          fetchEmails(filters);
          fetchStats();
        }}
      />
      <EmailDrawer
        email={selectedEmail}
        open={!!selectedEmail}
        onClose={() => setSelectedEmail(null)}
        onUpdate={(updated) => {
          setSelectedEmail(updated);

          setEmails((prev) =>
            prev.map((e) => (e.messageId === updated.messageId ? updated : e)),
          );
        }}
      />
    </Layout>
  );
};

export default Emails;
