import React from "react";

export const SystemLogsStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-md mb-lg">
      {/* Failed Logins Card */}
      <div className="bg-surface-container/80 backdrop-blur-md rounded-xl p-md shadow-sm relative overflow-hidden group border border-outline-variant/10">
        <div className="absolute -right-6 -top-6 w-24 h-24 bg-error/10 rounded-full blur-xl group-hover:bg-error/20 transition-all duration-500"></div>
        <div className="flex justify-between items-start mb-sm">
          <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wide">
            Failed Logins (24h)
          </h3>
          <span className="material-symbols-outlined text-error bg-error/10 p-xs rounded-md">
            warning
          </span>
        </div>
        <div className="flex items-end gap-sm">
          <span className="font-display-lg text-display-lg text-on-surface leading-none font-bold">
            1,248
          </span>
          <span className="font-label-sm text-label-sm text-error flex items-center mb-1">
            <span className="material-symbols-outlined text-[14px]">
              arrow_upward
            </span>{" "}
            12%
          </span>
        </div>
        <div className="mt-md h-12 w-full flex items-end gap-1 opacity-70">
          <div className="w-full bg-error rounded-t-sm h-1/4"></div>
          <div className="w-full bg-error rounded-t-sm h-1/3"></div>
          <div className="w-full bg-error rounded-t-sm h-1/2"></div>
          <div className="w-full bg-error rounded-t-sm h-[80%]"></div>
          <div className="w-full bg-error rounded-t-sm h-full"></div>
          <div className="w-full bg-error rounded-t-sm h-[90%]"></div>
          <div className="w-full bg-error rounded-t-sm h-[60%]"></div>
        </div>
      </div>

      {/* Active Sessions Card */}
      <div className="bg-surface-container/80 backdrop-blur-md rounded-xl p-md shadow-sm relative overflow-hidden group border border-outline-variant/10">
        <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-all duration-500"></div>
        <div className="flex justify-between items-start mb-sm">
          <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wide">
            Active Sessions
          </h3>
          <span className="material-symbols-outlined text-primary bg-primary/10 p-xs rounded-md">
            router
          </span>
        </div>
        <div className="flex items-end gap-sm">
          <span className="font-display-lg text-display-lg text-on-surface leading-none font-bold">
            8,492
          </span>
          <span className="font-label-sm text-label-sm text-primary flex items-center mb-1">
            <span className="material-symbols-outlined text-[14px]">
              arrow_upward
            </span>{" "}
            5%
          </span>
        </div>
        <div className="mt-md h-12 w-full flex items-end gap-1 opacity-70">
          <div className="w-full bg-primary rounded-t-sm h-2/3"></div>
          <div className="w-full bg-primary rounded-t-sm h-[70%]"></div>
          <div className="w-full bg-primary rounded-t-sm h-[75%]"></div>
          <div className="w-full bg-primary rounded-t-sm h-[65%]"></div>
          <div className="w-full bg-primary rounded-t-sm h-3/4"></div>
          <div className="w-full bg-primary rounded-t-sm h-full"></div>
          <div className="w-full bg-primary rounded-t-sm h-[80%]"></div>
        </div>
      </div>

      {/* System Health Card */}
      <div className="bg-surface-container/80 backdrop-blur-md rounded-xl p-md shadow-sm relative overflow-hidden group flex flex-col justify-between border border-outline-variant/10">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-tertiary/5 to-transparent pointer-events-none"></div>
        <div>
          <div className="flex justify-between items-start mb-sm">
            <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wide">
              System Health
            </h3>
            <div className="relative flex h-3 w-3 mt-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-tertiary"></span>
            </div>
          </div>
          <div className="font-display-lg text-display-lg text-on-surface leading-none font-bold">
            99.9%
          </div>
        </div>
        <div className="space-y-xs mt-md">
          <div className="flex justify-between font-label-sm text-label-sm">
            <span className="text-on-surface-variant">API Latency</span>
            <span className="text-tertiary font-mono">42ms</span>
          </div>
          <div className="flex justify-between font-label-sm text-label-sm">
            <span className="text-on-surface-variant">Rate Limit Drops</span>
            <span className="text-on-surface font-mono">14/min</span>
          </div>
        </div>
      </div>
    </div>
  );
};
