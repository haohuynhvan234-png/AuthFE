import React from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";

export const DangerZone = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleSignOut = async () => {
    await logout();
    toast.success("Đã đăng xuất khỏi tài khoản.");
    navigate("/login");
  };

  return (
    <div className="bg-[#172036]/70 backdrop-blur-xl rounded-2xl p-xl shadow-xl relative overflow-hidden border border-[#ff6b6b]/10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-lg relative z-10">
        <div>
          <h3 className="font-headline-sm text-headline-sm text-[#ff6b6b] mb-xs font-bold text-lg">
            Danger Zone
          </h3>
          <p className="font-body-sm text-body-sm text-[#908fa0] text-xs">
            End your current session across all devices.
          </p>
        </div>
        <button
          onClick={handleSignOut}
          className="bg-[#c92a2a] hover:bg-[#b02525] text-white font-label-md text-xs font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[16px]">logout</span>
          Sign Out
        </button>
      </div>
    </div>
  );
};