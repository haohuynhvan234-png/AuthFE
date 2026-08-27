import React from "react";
import { ProfileSidebar } from "../../components/userProfile/ProfileSidebar";
import { SecuritySettings } from "../../components/userProfile/SecuritySettings";
import { DangerZone } from "../../components/userProfile/DangerZone";

export const UserProfilePage = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-lg max-w-[1440px] mx-auto w-full">
        {/* Profile Sidebar Info */}
        <div className="md:col-span-4 flex flex-col gap-lg">
          <ProfileSidebar />
        </div>

        {/* Security & Danger Zone Settings */}
        <div className="md:col-span-8 flex flex-col gap-lg">
          <SecuritySettings />
          <DangerZone onSignOut={() => onNavigate("auth")} />
        </div>
      </div>
    </div>
  );
};
