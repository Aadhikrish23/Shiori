import Layout from "../../../shared/ui/layout/Layout";
import { useEffect } from "react";
import { useEmail } from "../../email/hooks/useEmail";

const Dashboard = () => {
  const { dashboard, fetchDashboard } = useEmail();

  useEffect(() => {
    fetchDashboard();
  }, []);

  const labels = (dashboard?.labels || []).sort(
    (a: any, b: any) => b.count - a.count
  );

  const total = dashboard?.totalProcessed || 1;

  return (
    <Layout>
      <div className="space-y-8">
        {/* HEADER */}
        <div>
          <h1 className="text-2xl font-bold text-[var(--text)]">
            Dashboard
          </h1>
          <p className="text-sm text-[var(--muted)]">
            Track how your emails are being categorized
          </p>
        </div>

        {/* 🔥 LOADING STATE */}
        {!dashboard ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-pulse">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-28 rounded-xl bg-white/5 border border-[var(--border)]"
              />
            ))}
          </div>
        ) : (
          <>
            {/* 🔥 TOP STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <StatCard
                title="Total Processed"
                value={dashboard.totalProcessed || 0}
                color="blue"
              />

              <StatCard
                title="Processed Today"
                value={dashboard.processedToday || 0}
                color="green"
              />

              <StatCard
                title="Active Labels"
                value={dashboard.activeLabels || 0}
                color="purple"
              />
            </div>

            {/* 🔥 LABEL INSIGHTS */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-[var(--text)]">
                  Label Insights
                </h2>
                <span className="text-xs text-[var(--muted)]">
                  Sorted by usage
                </span>
              </div>

              {labels.length === 0 ? (
                <div className="bg-[var(--card)] border border-[var(--border)] p-6 rounded-xl text-center">
                  <p className="text-[var(--muted)] text-sm">
                    No emails processed yet
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {labels.map((label: any, index: number) => {
                    const percentage = (
                      (label.count / total) *
                      100
                    ).toFixed(1);

                    const isTop = index === 0;

                    return (
                      <div
                        key={label._id}
                        className={`
                        p-5 rounded-xl border transition-all cursor-pointer
                        ${
                          isTop
                            ? "bg-indigo-500/10 border-indigo-500/30 shadow-md"
                            : "bg-[var(--card)] border-[var(--border)] hover:shadow-lg hover:scale-[1.02]"
                        }
                      `}
                      >
                        {/* HEADER */}
                        <div className="flex justify-between items-center">
                          <span className="text-xs uppercase text-[var(--muted)]">
                            {label._id}
                          </span>

                          <span
                            className={`text-xs font-semibold ${
                              isTop
                                ? "text-indigo-400"
                                : "text-[var(--muted)]"
                            }`}
                          >
                            {percentage}%
                          </span>
                        </div>

                        {/* COUNT */}
                        <p className="text-3xl font-bold text-[var(--text)] mt-3">
                          {label.count}
                        </p>

                        <p className="text-xs text-[var(--muted)] mt-1">
                          emails categorized
                        </p>

                        {/* PROGRESS */}
                        <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
                          <div
                            className={`h-full ${
                              isTop ? "bg-indigo-500" : "bg-blue-500"
                            }`}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Dashboard;

/* =========================
   🔥 STAT CARD COMPONENT
========================= */
const StatCard = ({
  title,
  value,
  color,
}: {
  title: string;
  value: number;
  color: "blue" | "green" | "purple";
}) => {
  const colors = {
    blue: "text-blue-400",
    green: "text-green-400",
    purple: "text-purple-400",
  };

  return (
    <div
      className="
      p-6 rounded-xl border
      bg-[var(--card)] border-[var(--border)]
      transition hover:shadow-lg hover:scale-[1.02]
    "
    >
      <p className={`text-sm font-medium ${colors[color]}`}>
        {title}
      </p>

      <h2 className="text-3xl font-bold text-[var(--text)] mt-2">
        {value}
      </h2>
    </div>
  );
};