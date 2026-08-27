import React, { useState } from "react";

export const LogsTable = () => {
  const [activeCategory, setActiveCategory] = useState("All Events");
  const [searchQuery, setSearchQuery] = useState("");

  const logs = [
    {
      id: "LOG-1001",
      timestamp: "2023-10-27 14:32:01 UTC",
      eventType: "Failed Login Attempt",
      eventIcon: "login",
      iconColor: "text-error",
      category: "Auth",
      user: "unknown@example.com",
      userAvatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDddRzR_FdcztYxLppfgRlaUD2FuBm9WVLiQDmT_N1qMN0MwmfW87iGtP_ci2ztlJUFbeS9r-YMGpUTKsd_Pm_7yMWlDKfeThELWLsQAJrCrFWIn0OrCwPJ3s7FqmTDWtYqZ0s_SiqnNIloaK9P3bSnznMmKMqULS64cwAzvMCF0-HLoNbOES53iRqyDhSMSfUfTqPCFe-mfAVV7B6aVRLa2SWqAg66og9TLVTZM3_yF6jGTD4Hdhrl",
      ip: "192.168.1.105",
      status: "Failure",
      statusColor: "bg-error/10 text-error",
      dotColor: "bg-error",
    },
    {
      id: "LOG-1002",
      timestamp: "2023-10-27 14:28:45 UTC",
      eventType: "Password Changed",
      eventIcon: "key",
      iconColor: "text-primary",
      category: "Config",
      user: "j.doe@company.com",
      initials: "JD",
      ip: "10.0.4.22",
      status: "Success",
      statusColor: "bg-tertiary/10 text-tertiary",
      dotColor: "bg-tertiary",
    },
    {
      id: "LOG-1003",
      timestamp: "2023-10-27 14:15:12 UTC",
      eventType: "User Created",
      eventIcon: "person_add",
      iconColor: "text-on-surface-variant",
      category: "Config",
      user: "admin_sys",
      userBadge: "Super Admin",
      initials: "SA",
      ip: "10.0.0.1",
      status: "Success",
      statusColor: "bg-tertiary/10 text-tertiary",
      dotColor: "bg-tertiary",
    },
    {
      id: "LOG-1004",
      timestamp: "2023-10-27 14:10:05 UTC",
      eventType: "Successful Login",
      eventIcon: "login",
      iconColor: "text-tertiary",
      category: "Auth",
      user: "j.doe@company.com",
      initials: "JD",
      ip: "10.0.4.22",
      status: "Success",
      statusColor: "bg-tertiary/10 text-tertiary",
      dotColor: "bg-tertiary",
    },
  ];

  const filteredLogs = logs.filter((log) => {
    const matchesCat =
      activeCategory === "All Events" || log.category === activeCategory;
    const matchesSearch =
      log.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.ip.includes(searchQuery) ||
      log.eventType.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-surface-container-low/60 backdrop-blur-xl rounded-xl shadow-lg border border-white/5 flex flex-col overflow-hidden">
      {/* Filters and Controls */}
      <div className="p-md bg-surface-container/40 border-b border-white/5 flex flex-col lg:flex-row gap-md items-center justify-between">
        <div className="flex flex-wrap items-center gap-sm w-full lg:w-auto">
          <div className="relative flex-1 min-w-[240px]">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search IP, User, or Request ID..."
              className="w-full bg-surface/50 border border-white/10 rounded-lg py-sm pl-10 pr-sm font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary focus:bg-surface/80 transition-all placeholder:text-on-surface-variant/50"
            />
          </div>

          <div className="flex bg-surface/50 border border-white/10 rounded-lg p-1">
            {["All Events", "Auth", "Config"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-sm py-1 rounded text-label-sm font-label-sm transition-all ${
                  activeCategory === cat
                    ? "bg-surface-variant text-on-surface shadow-sm font-semibold"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-sm w-full lg:w-auto justify-end">
          <button className="flex items-center gap-xs px-sm py-sm border border-white/10 rounded-lg text-on-surface-variant hover:bg-surface-variant transition-colors text-label-sm font-label-sm">
            <span className="material-symbols-outlined text-[16px]">
              filter_list
            </span>
            Filters
          </button>
          <div className="h-6 w-[1px] bg-white/10"></div>
          <button
            title="Refresh Logs"
            className="flex items-center gap-xs text-on-surface-variant hover:text-primary transition-colors p-1"
          >
            <span className="material-symbols-outlined text-[20px]">
              refresh
            </span>
          </button>
        </div>
      </div>

      {/* Logs Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container/20">
              <th className="py-sm px-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-medium whitespace-nowrap">
                Timestamp
              </th>
              <th className="py-sm px-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-medium whitespace-nowrap">
                Event Type
              </th>
              <th className="py-sm px-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-medium whitespace-nowrap">
                User / Identity
              </th>
              <th className="py-sm px-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-medium whitespace-nowrap">
                Source IP
              </th>
              <th className="py-sm px-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-medium whitespace-nowrap text-right">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="font-body-sm text-body-sm text-on-surface divide-y divide-white/5">
            {filteredLogs.map((log) => (
              <tr
                key={log.id}
                className="hover:bg-surface-variant/30 transition-colors group"
              >
                <td className="py-md px-md whitespace-nowrap">
                  <div className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                    {log.timestamp}
                  </div>
                </td>
                <td className="py-md px-md">
                  <div className="flex items-center gap-2">
                    <span
                      className={`material-symbols-outlined text-[16px] ${log.iconColor}`}
                    >
                      {log.eventIcon}
                    </span>
                    <span className="font-medium">{log.eventType}</span>
                  </div>
                </td>
                <td className="py-md px-md">
                  <div className="flex items-center gap-2">
                    {log.userAvatar ? (
                      <img
                        src={log.userAvatar}
                        alt="User"
                        className="w-6 h-6 rounded-full bg-surface-variant object-cover"
                      />
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-secondary-container/30 flex items-center justify-center text-secondary font-label-sm text-label-sm font-semibold">
                        {log.initials}
                      </div>
                    )}
                    <span className="flex items-center gap-1 font-mono">
                      {log.user}
                      {log.userBadge && (
                        <span className="bg-primary/20 text-primary px-1 rounded text-[10px] uppercase font-label-sm font-semibold">
                          {log.userBadge}
                        </span>
                      )}
                    </span>
                  </div>
                </td>
                <td className="py-md px-md">
                  <span className="font-label-sm text-label-sm bg-surface/50 px-2 py-1 rounded text-on-surface-variant border border-white/5 font-mono">
                    {log.ip}
                  </span>
                </td>
                <td className="py-md px-md text-right">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-1 rounded-md font-label-sm text-label-sm font-semibold ${log.statusColor}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${log.dotColor}`}
                    ></span>
                    {log.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="p-sm bg-surface-container/20 border-t border-white/5 flex justify-between items-center text-on-surface-variant font-label-sm text-label-sm">
        <span>Showing 1-{filteredLogs.length} of 12,492 events</span>
        <div className="flex items-center gap-2">
          <button
            className="p-1 hover:text-on-surface transition-colors disabled:opacity-50"
            disabled
          >
            <span className="material-symbols-outlined text-[18px]">
              chevron_left
            </span>
          </button>
          <span className="px-2 py-1 bg-surface-variant text-on-surface rounded font-semibold">
            1
          </span>
          <button className="p-1 hover:text-on-surface transition-colors">
            <span className="material-symbols-outlined text-[18px]">
              chevron_right
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
