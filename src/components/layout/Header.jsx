import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import avatarImg from "../../assets/avatar.png";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getBreadcrumbTitle = () => {
    switch (location.pathname) {
      case "/user-management":
        return "USER_MANAGEMENT";
      case "/system-logs":
        return "SYSTEM_AUDIT";
      case "/security":
      case "/dashboard":
      case "/":
        return "AUTH_PROD";
      default:
        return "AUTH_PROD";
    }
  };

  return (
    <header className="fixed top-0 left-72 right-0 h-16 bg-[#0b1326]/90 backdrop-blur-xl border-b border-white/5 z-40 flex items-center justify-between px-lg">
      <div className="flex items-center gap-sm text-xs font-mono text-[#908fa0]">
        <span 
          onClick={() => navigate("/dashboard")}
          className="hover:text-[#c0c1ff] cursor-pointer transition-colors"
        >
          PROJECTS
        </span>
        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        <span className="text-white font-semibold uppercase tracking-wider">{getBreadcrumbTitle()}</span>
      </div>

      <div className="flex items-center gap-lg">
        <span className="bg-[#6f00be]/30 text-[#ddb7ff] px-3 py-1 rounded-full text-xs font-mono border border-[#6f00be]/40 uppercase tracking-wider font-semibold">
          ADMIN
        </span>
        
        <button 
          aria-label="Notifications"
          className="relative text-[#c7c4d7] hover:text-[#c0c1ff] transition-colors flex items-center p-1"
        >
          <span className="material-symbols-outlined text-[22px]">notifications</span>
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#ffb4ab] rounded-full ring-2 ring-[#0b1326]"></span>
        </button>

        <div className="flex items-center gap-md pl-md border-l border-white/10">
          <img
            alt="Profile Avatar"
            title="View Profile & Security"
            onClick={() => navigate("/security")}
            className="w-8 h-8 rounded-full object-cover ring-2 ring-[#c0c1ff]/30 hover:ring-[#c0c1ff]/60 transition-all cursor-pointer"
            src={avatarImg}
          />
        </div>
      </div>
    </header>
  );
};
