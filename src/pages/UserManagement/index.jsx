import React from "react";
import { EntityTable } from "../../components/dashboard/EntityTable";

export const UserManagementPage = () => {
  return (
    <div className="max-w-[1440px] mx-auto w-full">
      <div className="mb-lg">
        <h1 className="font-display-lg text-display-lg text-white font-bold tracking-tight">
          User Management
        </h1>
        <p className="font-body-md text-body-md text-[#908fa0] mt-xs">
          Manage system entities, access credentials, and user clearance roles.
        </p>
      </div>
      <EntityTable />
    </div>
  );
};
