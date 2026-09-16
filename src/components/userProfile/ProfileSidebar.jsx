import React from "react";
import { useAuth } from "../../context/AuthContext";
import avatarImg from "../../assets/avatar.png";

export const ProfileSidebar = () => {
  const { user } = useAuth();

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  return (
    <div className="bg-[#172036]/70 backdrop-blur-xl rounded-2xl p-lg shadow-xl relative overflow-hidden flex flex-col items-center text-center border border-white/5">
      {/* Glassmorphism gradient shine */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative w-28 h-28 rounded-full overflow-hidden mb-md shadow-xl group ring-4 ring-white/5">
        <img
          alt="User Avatar"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={avatarImg}
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer">
          <span className="material-symbols-outlined text-white text-2xl">
            photo_camera
          </span>
        </div>
      </div>

      <h2 className="font-headline-sm text-headline-sm text-white mb-xs font-bold tracking-tight text-xl">
        {user?.name || "Anonymous User"}
      </h2>
      <p className="font-body-sm text-body-sm text-[#908fa0] mb-md font-mono text-xs">
        {user?.email || "no-email@authapi.dev"}
      </p>

      <span className={`text-[11px] font-mono font-bold px-4 py-1 rounded-full uppercase tracking-wider mb-lg border shadow-xs ${
        user?.role === "admin"
          ? "bg-[#6f00be]/30 text-[#ddb7ff] border-[#6f00be]/40"
          : "bg-[#1e2942] text-[#3b82f6] border-[#3b82f6]/20"
      }`}>
        {user?.role ? user.role.toUpperCase() : "USER"}
      </span>

      <div className="w-full bg-[#0d1527]/80 rounded-xl p-md flex justify-between items-center border border-white/5">
        <span className="font-mono text-xs text-[#908fa0] tracking-wider uppercase font-semibold">
          JOINED
        </span>
        <span className="font-mono text-xs text-white font-semibold">
          {formatDate(user?.createdAt)}
        </span>
      </div>
    </div>
  );
};
