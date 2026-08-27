import React from "react";

export const AuthHeader = ({ activeTab }) => {
  return (
    <div className="flex flex-col items-center gap-2 mb-2 text-center w-full">
      <div className="w-12 h-12 rounded-full bg-[#8083ff]/20 border border-[#8083ff]/30 flex items-center justify-center mb-1 shadow-[0_0_20px_rgba(99,102,241,0.25)]">
        <span
          className="material-symbols-outlined text-[#c0c1ff] text-[26px]"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          security
        </span>
      </div>
      <h1 className="text-white font-bold text-xl tracking-tight">
        {activeTab === "signin" ? "Welcome Back" : "Create Account"}
      </h1>
      <p className="text-[#908fa0] text-xs">
        {activeTab === "signin"
          ? "Authenticate to access your workspace"
          : "Join us to configure your environment"}
      </p>
    </div>
  );
};
