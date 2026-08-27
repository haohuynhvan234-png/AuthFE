import React, { useState } from "react";

export const EntityTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");

  const initialEntities = [
    {
      id: "USR-992A",
      name: "Sarah Jenkins",
      email: "s.jenkins@nexus.corp",
      role: "Admin",
      status: "Active",
      joinedDate: "2023-10-15",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBL4-DqPkLPz6brJZJSOzLeM9qxBTlAwoG0ev06KDXKgnYfEJxJnEAQIMtehBe-8qpVnigi1Krs8T_OLQ_muW-uxIK92xevszo7QKTJTwefHO3QwF1oHLia0E9mcXoqwRXWGfObj8hWJEOi4SU5giX6HSDik0-WXF-XtyCFZfYI8q2EoE-Pk26fZRr0WTpT-1DNreAkFUVPd4cZlDl9mhi0km0p6zvgFXYGrmegC1p3D1rhSgM_ySq9",
    },
    {
      id: "USR-774B",
      name: "Marcus Chen",
      email: "m.chen@nexus.corp",
      role: "User",
      status: "Offline",
      joinedDate: "2024-01-22",
      avatar: null,
      initials: "MC",
    },
    {
      id: "USR-441C",
      name: "Alex Rivera",
      email: "a.rivera@nexus.corp",
      role: "Super Admin",
      status: "Active",
      joinedDate: "2023-08-01",
      avatar: null,
      initials: "AR",
    },
    {
      id: "USR-108D",
      name: "Elena Rostova",
      email: "e.rostova@nexus.corp",
      role: "User",
      status: "Active",
      joinedDate: "2024-02-14",
      avatar: null,
      initials: "ER",
    },
  ];

  const filteredEntities = initialEntities.filter((entity) => {
    const matchesSearch =
      entity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entity.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entity.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRole =
      roleFilter === "all" ||
      (roleFilter === "admin" && entity.role.includes("Admin")) ||
      (roleFilter === "user" && entity.role === "User");

    return matchesSearch && matchesRole;
  });

  return (
    <div className="bg-surface-container-low/50 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl relative border border-outline-variant/10">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-surface-container-low via-outline-variant/30 to-surface-container-low"></div>

      {/* Search & Actions Bar */}
      <div className="p-lg flex flex-col md:flex-row justify-between items-center gap-md bg-surface-container/30">
        <div className="relative w-full md:w-96 group">
          <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant/50 group-focus-within:text-primary transition-colors">
            search
          </span>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Query entities (Name, Email, ID)..."
            className="w-full bg-surface-container-highest/20 text-on-surface font-body-sm text-body-sm placeholder:text-on-surface-variant/40 rounded-lg py-3 pl-12 pr-4 outline-none border border-outline-variant/20 focus:border-primary/50 focus:bg-surface-container-highest/40 transition-all shadow-inner"
          />
        </div>

        <div className="flex items-center gap-md w-full md:w-auto">
          <div className="relative">
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="appearance-none bg-surface-container-highest/20 text-on-surface font-label-sm text-label-sm rounded-lg py-3 pl-4 pr-10 outline-none border border-outline-variant/20 focus:border-secondary/50 focus:bg-surface-container-highest/40 transition-all cursor-pointer"
            >
              <option
                value="all"
                className="bg-surface-container-high text-on-surface"
              >
                All Roles
              </option>
              <option
                value="admin"
                className="bg-surface-container-high text-on-surface"
              >
                Administrators
              </option>
              <option
                value="user"
                className="bg-surface-container-high text-on-surface"
              >
                Standard Users
              </option>
            </select>
            <span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[20px]">
              expand_more
            </span>
          </div>

          <button className="bg-primary text-on-primary font-label-sm text-label-sm px-6 py-3 rounded-lg hover:bg-primary-fixed hover:shadow-[0_0_20px_rgba(192,193,255,0.3)] transition-all duration-300 flex items-center gap-sm uppercase tracking-wider font-semibold">
            <span className="material-symbols-outlined text-[18px]">add</span>{" "}
            Provision
          </button>
        </div>
      </div>

      {/* Table Data */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr class="bg-surface-container-high/20">
              <th className="py-md px-lg font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest whitespace-nowrap">
                Entity
              </th>
              <th className="py-md px-lg font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest whitespace-nowrap">
                Contact Matrix
              </th>
              <th className="py-md px-lg font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest whitespace-nowrap">
                Clearance Level
              </th>
              <th className="py-md px-lg font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest whitespace-nowrap">
                System State
              </th>
              <th className="py-md px-lg font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest whitespace-nowrap">
                Lifecycle Start
              </th>
              <th className="py-md px-lg font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest whitespace-nowrap text-right">
                Directives
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/10">
            {filteredEntities.map((entity) => (
              <tr
                key={entity.id}
                className="group hover:bg-surface-container-high/30 transition-colors"
              >
                <td className="py-md px-lg">
                  <div className="flex items-center gap-md">
                    <div className="relative">
                      {entity.avatar ? (
                        <img
                          src={entity.avatar}
                          alt={entity.name}
                          className="w-10 h-10 rounded-full object-cover border border-outline-variant/30"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center border border-outline-variant/30 text-on-surface font-label-sm font-semibold">
                          {entity.initials}
                        </div>
                      )}
                      <div
                        className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-surface ${
                          entity.status === "Active"
                            ? "bg-green-500"
                            : "bg-outline"
                        }`}
                      ></div>
                    </div>
                    <div>
                      <p className="font-body-md text-body-md text-on-surface font-medium group-hover:text-primary transition-colors">
                        {entity.name}
                      </p>
                      <p className="font-label-sm text-label-sm text-on-surface-variant/60">
                        ID: {entity.id}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-md px-lg">
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {entity.email}
                  </p>
                </td>
                <td className="py-md px-lg">
                  <div
                    className={`inline-flex items-center gap-xs px-3 py-1 rounded-md font-label-sm text-label-sm uppercase tracking-wide cursor-pointer transition-colors ${
                      entity.role.includes("Admin")
                        ? "bg-secondary/10 border border-secondary/20 text-secondary hover:bg-secondary/20"
                        : "bg-surface-variant/50 border border-outline-variant/30 text-on-surface-variant hover:bg-surface-variant"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      {entity.role.includes("Admin") ? "shield" : "person"}
                    </span>
                    <span>{entity.role}</span>
                    <span className="material-symbols-outlined text-[14px] ml-1">
                      arrow_drop_down
                    </span>
                  </div>
                </td>
                <td className="py-md px-lg">
                  <span className="inline-flex items-center gap-sm">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        entity.status === "Active"
                          ? "bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]"
                          : "bg-outline shadow-[0_0_8px_rgba(144,143,160,0.6)]"
                      }`}
                    ></span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      {entity.status}
                    </span>
                  </span>
                </td>
                <td className="py-md px-lg">
                  <p className="font-body-sm text-body-sm text-on-surface-variant font-mono">
                    {entity.joinedDate}
                  </p>
                </td>
                <td className="py-md px-lg text-right">
                  <div className="flex items-center justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      title="Modify Configuration"
                      aria-label="Modify Configuration"
                      className="w-8 h-8 rounded-full bg-surface-container-highest hover:bg-primary/20 hover:text-primary text-on-surface-variant flex items-center justify-center transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        edit
                      </span>
                    </button>
                    <button
                      title="Suspend Access"
                      aria-label="Suspend Access"
                      className="w-8 h-8 rounded-full bg-surface-container-highest hover:bg-tertiary/20 hover:text-tertiary text-on-surface-variant flex items-center justify-center transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        lock
                      </span>
                    </button>
                    <button
                      title="Terminate Entity"
                      aria-label="Terminate Entity"
                      className="w-8 h-8 rounded-full bg-surface-container-highest hover:bg-error/20 hover:text-error text-on-surface-variant flex items-center justify-center transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        delete
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="p-lg bg-surface-container/30 border-t border-outline-variant/10 flex flex-col sm:flex-row justify-between items-center gap-md">
        <p className="font-label-sm text-label-sm text-on-surface-variant">
          Showing 1 to {filteredEntities.length} of 14,289 entries
        </p>
        <div className="flex items-center gap-xs">
          <button
            className="w-8 h-8 flex items-center justify-center rounded bg-surface-container-highest text-on-surface-variant hover:bg-surface-variant transition-colors disabled:opacity-50"
            disabled
          >
            <span className="material-symbols-outlined text-[18px]">
              chevron_left
            </span>
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-primary/20 text-primary font-label-sm text-label-sm font-semibold">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-surface-container-highest text-on-surface-variant hover:bg-surface-variant transition-colors font-label-sm text-label-sm">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-surface-container-highest text-on-surface-variant hover:bg-surface-variant transition-colors font-label-sm text-label-sm">
            3
          </button>
          <span className="text-on-surface-variant font-label-sm px-2">
            ...
          </span>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-surface-container-highest text-on-surface-variant hover:bg-surface-variant transition-colors">
            <span className="material-symbols-outlined text-[18px]">
              chevron_right
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
