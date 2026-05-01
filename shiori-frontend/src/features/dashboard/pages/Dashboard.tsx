// File: src/features/dashboard/pages/Dashboard.tsx

import Layout from "../../../shared/ui/layout/Layout";
import { useEffect } from "react";
import { useEmail } from "../../email/hooks/useEmail";
import SectionHeader from "../../../shared/ui/components/SectionHeader";
import Card from "../../../shared/ui/components/Card";
import Skeleton from "../../../shared/ui/components/Skeleton";

const Dashboard = () => {
  const { dashboard, fetchDashboard } = useEmail();

  useEffect(() => {
    fetchDashboard();
  }, []);

  const labels = (dashboard?.labels || []).sort(
    (a: any, b: any) => b.count - a.count
  );

  const total = dashboard?.totalProcessed || 1;
  const loading = !dashboard;

  return (
    <Layout>
      <div className="space-y-6">

        {/* HEADER */}
        <SectionHeader
          title="Dashboard"
          subtitle="Overview of your email activity"
        />

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {loading ? (
            <>
              <Skeleton className="h-24" />
              <Skeleton className="h-24" />
              <Skeleton className="h-24" />
            </>
          ) : (
            <>
              <Card>
                <p className="text-sm text-[var(--muted)]">Total Emails</p>
                <h3 className="text-2xl font-bold text-[var(--text)] mt-1">
                  {dashboard.totalProcessed}
                </h3>
              </Card>

              <Card>
                <p className="text-sm text-[var(--muted)]">Processed Today</p>
                <h3 className="text-2xl font-bold text-[var(--text)] mt-1">
                  {dashboard.processedToday}
                </h3>
              </Card>

              <Card>
                <p className="text-sm text-[var(--muted)]">Active Labels</p>
                <h3 className="text-2xl font-bold text-[var(--text)] mt-1">
                  {dashboard.activeLabels}
                </h3>
              </Card>
            </>
          )}
        </div>

        {/* LABEL INSIGHTS */}
        <SectionHeader title="Label Insights" />

        <Card>
          {loading ? (
            <Skeleton className="h-40" />
          ) : labels.length === 0 ? (
            <p className="text-sm text-[var(--muted)]">
              No emails processed yet
            </p>
          ) : (
            <div className="space-y-4">
              {labels.map((l: any) => {
                const percent = (l.count / total) * 100;

                return (
                  <div key={l._id}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[var(--text)]">
                        {l._id}
                      </span>
                      <span className="text-[var(--muted)]">
                        {l.count}
                      </span>
                    </div>

                    <div className="h-2 bg-[var(--border)] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 transition-all duration-500"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </Card>
      </div>
    </Layout>
  );
};

export default Dashboard;