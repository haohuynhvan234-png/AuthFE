import React from "react";
import { SystemLogsHeader } from "../../components/systemLogs/SystemLogsHeader";
import { SystemLogsStats } from "../../components/systemLogs/SystemLogsStats";
import { LogsTable } from "../../components/systemLogs/LogsTable";

export const SystemLogsPage = () => {
  return (
    <div className="flex flex-col w-full relative">
      {/* Background glow effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
        <div className="absolute top-1/3 -left-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] mix-blend-screen opacity-30"></div>
      </div>

      <div className="flex flex-col gap-lg z-10 w-full max-w-[1440px] mx-auto">
        <SystemLogsHeader />
        <SystemLogsStats />
        <LogsTable />
      </div>
    </div>
  );
};
