import React from "react";

export const SystemLogsHeader = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-md mb-lg">
      <div>
        <div className="flex items-center gap-sm mb-xs">
          <span className="material-symbols-outlined text-primary text-xl">
            shield_locked
          </span>
          <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase font-semibold">
            System Audit
          </span>
        </div>
        <h1 className="font-display-lg text-display-lg text-on-surface font-bold tracking-tight">
          Security Logs
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-sm max-w-2xl">
          Monitor real-time authentication events, detect anomalies, and export
          audit trails for compliance reporting.
        </p>
      </div>

      <div className="flex items-center gap-sm">
        <button className="flex items-center gap-xs px-md py-sm bg-surface-container-high rounded-lg text-on-surface hover:bg-surface-variant transition-all shadow-sm font-label-md text-label-md">
          <span className="material-symbols-outlined text-[18px]">
            download
          </span>
          <span>Export CSV</span>
        </button>
        <button className="flex items-center gap-xs px-md py-sm bg-primary text-on-primary rounded-lg hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all ease-in-out duration-200 font-label-md text-label-md font-semibold">
          <span className="material-symbols-outlined text-[18px]">
            picture_as_pdf
          </span>
          <span>Export PDF</span>
        </button>
      </div>
    </div>
  );
};
