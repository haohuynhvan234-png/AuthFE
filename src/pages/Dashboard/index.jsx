import React from "react";
import { ProfileSidebar } from "../../components/userProfile/ProfileSidebar";
import { SecuritySettings } from "../../components/userProfile/SecuritySettings";
import { DangerZone } from "../../components/userProfile/DangerZone";

export const DashboardPage = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-64px)] relative">
      {/* Background ambient glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#6366f1]/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-lg max-w-[1440px] w-full relative z-10">
        {/* Left Column: Profile Card */}
        <div className="md:col-span-4 flex flex-col gap-lg">
          <ProfileSidebar />
        </div>

        {/* Right Column: Security & Danger Zone Cards */}
        <div className="md:col-span-8 flex flex-col gap-lg">
          <SecuritySettings />
          <DangerZone onSignOut={() => onNavigate && onNavigate("auth")} />
        </div>
      </div>
    </div>
  );
};
