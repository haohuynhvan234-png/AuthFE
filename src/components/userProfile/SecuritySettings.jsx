import React, { useState } from "react";

export const SecuritySettings = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="bg-[#172036]/70 backdrop-blur-xl rounded-2xl p-xl shadow-xl relative overflow-hidden border border-white/5">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>

      {/* Header Title */}
      <div className="flex items-center gap-md mb-lg">
        <div className="w-10 h-10 rounded-full bg-[#8083ff]/20 border border-[#8083ff]/30 flex items-center justify-center text-[#c0c1ff]">
          <span className="material-symbols-outlined text-xl">history</span>
        </div>
        <div>
          <h3 className="font-headline-sm text-headline-sm text-white font-bold text-lg">
            Security
          </h3>
          <p className="font-body-sm text-body-sm text-[#908fa0] text-xs">
            Manage your password and authentication settings
          </p>
        </div>
      </div>

      {/* Form Fields */}
      <form className="flex flex-col gap-lg" onSubmit={(e) => e.preventDefault()}>
        {/* Current Password */}
        <div className="flex flex-col gap-xs">
          <label className="font-mono text-[11px] text-[#908fa0] uppercase tracking-wider font-semibold">
            CURRENT PASSWORD
          </label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Enter current password"
            className="w-full bg-[#0e1628]/80 text-white placeholder-[#464554] rounded-xl py-3 px-4 font-body-md text-sm outline-none border border-white/5 focus:border-[#8083ff]/50 transition-all shadow-inner"
          />
        </div>

        {/* New Password */}
        <div className="flex flex-col gap-xs">
          <label className="font-mono text-[11px] text-[#908fa0] uppercase tracking-wider font-semibold">
            NEW PASSWORD
          </label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
            className="w-full bg-[#0e1628]/80 text-white placeholder-[#464554] rounded-xl py-3 px-4 font-body-md text-sm outline-none border border-white/5 focus:border-[#8083ff]/50 transition-all shadow-inner"
          />
          {/* Password strength line & label matching Image 1 */}
          <div className="mt-xs">
            <div className="w-full h-1 bg-[#232c45] rounded-full overflow-hidden">
              <div className="w-1/4 h-full bg-[#ff6b6b] rounded-full"></div>
            </div>
            <span className="font-mono text-[11px] text-[#ff6b6b] mt-1 inline-block">
              Weak password
            </span>
          </div>
        </div>

        {/* Confirm New Password */}
        <div className="flex flex-col gap-xs">
          <label className="font-mono text-[11px] text-[#908fa0] uppercase tracking-wider font-semibold">
            CONFIRM NEW PASSWORD
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
            className="w-full bg-[#0e1628]/80 text-white placeholder-[#464554] rounded-xl py-3 px-4 font-body-md text-sm outline-none border border-white/5 focus:border-[#8083ff]/50 transition-all shadow-inner"
          />
        </div>

        {/* Submit button */}
        <div className="mt-sm flex justify-end">
          <button
            type="submit"
            className="bg-[#5659f4] hover:bg-[#4548e2] text-white font-label-md text-sm font-semibold px-6 py-2.5 rounded-xl shadow-lg shadow-[#5659f4]/25 transition-all active:scale-98"
          >
            Update Password
          </button>
        </div>
      </form>
    </div>
  );
};
