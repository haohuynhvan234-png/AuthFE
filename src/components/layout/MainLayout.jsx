import React from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-surface font-body-md text-on-surface antialiased">
      <Sidebar />
      <div className="pl-72">
        <Header />
        <main className="pt-16 min-h-screen bg-surface w-full p-lg">
          {children}
        </main>
      </div>
    </div>
  );
};
