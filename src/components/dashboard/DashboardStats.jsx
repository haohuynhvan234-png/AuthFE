import React from "react";

export const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg mb-2xl">
      {/* Stat Card 1: Total Entities */}
      <div className="group relative bg-surface-container-high/40 backdrop-blur-xl rounded-xl p-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 border border-outline-variant/10">
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
        <div className="flex justify-between items-start mb-md">
          <span className="material-symbols-outlined text-primary text-[32px] font-light">
            group
          </span>
          <span className="bg-primary-container/20 text-primary font-label-sm text-label-sm px-2 py-1 rounded-md flex items-center gap-xs">
            <span className="material-symbols-outlined text-[14px]">
              trending_up
            </span>{" "}
            +12%
          </span>
        </div>
        <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">
          Total Entities
        </p>
        <p className="font-headline-md text-headline-md text-on-surface">
          14,289
        </p>
      </div>

      {/* Stat Card 2: Active Sessions */}
      <div className="group relative bg-surface-container-high/40 backdrop-blur-xl rounded-xl p-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-secondary/10 border border-outline-variant/10">
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-secondary/5 rounded-full blur-2xl group-hover:bg-secondary/10 transition-colors"></div>
        <div className="flex justify-between items-start mb-md">
          <span className="material-symbols-outlined text-secondary text-[32px] font-light">
            vital_signs
          </span>
          <div className="w-16 h-8 opacity-60">
            <svg
              className="w-full h-full stroke-secondary fill-none"
              strokeWidth="2"
              viewBox="0 0 100 30"
            >
              <path
                d="M0,15 Q10,5 20,15 T40,15 T60,5 T80,25 T100,15"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
        </div>
        <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">
          Active Sessions
        </p>
        <p className="font-headline-md text-headline-md text-on-surface">
          3,492
        </p>
      </div>

      {/* Stat Card 3: Privilege Ratio */}
      <div className="group relative bg-surface-container-high/40 backdrop-blur-xl rounded-xl p-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-tertiary/10 border border-outline-variant/10">
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-tertiary/5 rounded-full blur-2xl group-hover:bg-tertiary/10 transition-colors"></div>
        <div className="flex justify-between items-start mb-md">
          <span className="material-symbols-outlined text-tertiary text-[32px] font-light">
            admin_panel_settings
          </span>
          <div className="w-8 h-8 rounded-full border-4 border-surface-variant relative overflow-hidden">
            <div
              className="absolute inset-0 bg-tertiary"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                height: "15%",
              }}
            ></div>
            <div
              className="absolute inset-0 bg-surface-variant"
              style={{
                clipPath: "polygon(0 15%, 100% 15%, 100% 100%, 0 100%)",
              }}
            ></div>
          </div>
        </div>
        <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">
          Privilege Ratio
        </p>
        <p className="font-headline-md text-headline-md text-on-surface">
          1 : 85
        </p>
      </div>

      {/* Stat Card 4: Failed Auth Events */}
      <div className="group relative bg-surface-container-high/40 backdrop-blur-xl rounded-xl p-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-error/10 border border-outline-variant/10">
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-error/5 rounded-full blur-2xl group-hover:bg-error/10 transition-colors"></div>
        <div className="flex justify-between items-start mb-md">
          <span className="material-symbols-outlined text-error text-[32px] font-light">
            gpp_bad
          </span>
          <span className="bg-error-container/20 text-error font-label-sm text-label-sm px-2 py-1 rounded-md flex items-center gap-xs">
            24h Volatility
          </span>
        </div>
        <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">
          Failed Auth Events
        </p>
        <p className="font-headline-md text-headline-md text-on-surface">127</p>
      </div>
    </div>
  );
};
