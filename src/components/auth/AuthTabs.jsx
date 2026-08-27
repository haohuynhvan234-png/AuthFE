import React from "react";
import { useNavigate } from "react-router-dom";

export const AuthTabs = ({ activeTab }) => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full bg-[#0c1426] rounded-xl p-1 relative border border-white/5 shadow-inner">
      <button
        type="button"
        onClick={() => navigate("/login")}
        className={`flex-1 py-2 rounded-lg font-mono text-xs font-semibold transition-all duration-200 ${
          activeTab === "signin"
            ? "bg-[#212b45] text-white shadow-sm"
            : "text-[#908fa0] hover:text-white"
        }`}
      >
        Sign In
      </button>

      <button
        type="button"
        onClick={() => navigate("/register")}
        className={`flex-1 py-2 rounded-lg font-mono text-xs font-semibold transition-all duration-200 ${
          activeTab === "signup"
            ? "bg-[#212b45] text-white shadow-sm"
            : "text-[#908fa0] hover:text-white"
        }`}
      >
        Sign Up
      </button>
    </div>
  );
};
