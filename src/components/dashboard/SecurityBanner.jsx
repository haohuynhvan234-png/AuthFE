import React from "react";

export const SecurityBanner = () => {
  return (
    <div
      id="security-banner"
      className="bg-error-container/10 backdrop-blur-md rounded-xl p-md border-l-4 border-error flex items-center gap-md shadow-lg"
    >
      <span className="material-symbols-outlined text-error text-[28px]">
        shield_lock
      </span>
      <div>
        <h3 className="font-label-md text-label-md text-error tracking-wide">
          Elevated Clearance Active
        </h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant/80">
          Restricted zone. Activity is logged.
        </p>
      </div>
    </div>
  );
};
