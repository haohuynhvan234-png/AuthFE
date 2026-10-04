import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import apiClient from "../../api/apiClient";
import { useAuth } from "../../context/AuthContext";
import { extractErrorMessage } from "../../lib/toast";

export const EntityTable = () => {
  const { user: currentUser } = useAuth();
  const [entities, setEntities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [updatingRoleId, setUpdatingRoleId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await apiClient.get("/api/auth/admin/users");
      if (res.data && res.data.data) {
        setEntities(res.data.data);
      }
    } catch (err) {
      const msg = extractErrorMessage(err, "Không thể tải danh sách tài khoản.");
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleRoleChange = async (targetUser, newRole) => {
    if (targetUser.role === newRole) return;

    if (targetUser._id === currentUser?._id && newRole !== "admin") {
      toast.error("Bạn không thể tự hạ quyền Admin của chính mình.");
      return;
    }

    setUpdatingRoleId(targetUser._id);
    try {
      const res = await apiClient.patch(`/api/auth/admin/users/${targetUser._id}/role`, {
        role: newRole,
      });
      toast.success(res.data?.message || `Đã chuyển vai trò sang ${newRole.toUpperCase()}`);
      setEntities((prev) =>
        prev.map((item) =>
          item._id === targetUser._id ? { ...item, role: newRole } : item
        )
      );
    } catch (err) {
      const msg = extractErrorMessage(err, "Cập nhật vai trò thất bại.");
      toast.error(msg);
    } finally {
      setUpdatingRoleId(null);
    }
  };

  const handleDeleteUser = async (id, email) => {
    if (id === currentUser?._id) {
      toast.error("Bạn không thể tự xóa tài khoản của chính mình.");
      return;
    }

    if (!window.confirm(`Bạn có chắc chắn muốn xóa người dùng: ${email}?`)) {
      return;
    }

    setDeletingId(id);
    try {
      const res = await apiClient.delete(`/api/auth/admin/users/${id}`);
      toast.success(res.data?.message || "Đã xóa người dùng thành công.");
      setEntities((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      const msg = extractErrorMessage(err, "Xóa người dùng thất bại.");
      toast.error(msg);
    } finally {
      setDeletingId(null);
    }
  };

  const filteredEntities = entities.filter((entity) => {
    const matchesSearch =
      entity.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entity.email?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole =
      roleFilter === "all" ||
      (entity.role || "user").toLowerCase() === roleFilter.toLowerCase();
    return matchesSearch && matchesRole;
  });

  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    const d = new Date(dateStr);
    return isNaN(d.getTime())
      ? "N/A"
      : d.toLocaleDateString("vi-VN", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        });
  };

  return (
    <div className="bg-[#141d33]/80 backdrop-blur-xl rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
      {/* Controls Bar */}
      <div className="p-lg flex flex-col md:flex-row justify-between items-stretch md:items-center gap-md border-b border-white/5">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#908fa0] text-[20px]">
            search
          </span>
          <input
            type="text"
            placeholder="Tìm theo tên hoặc email tài khoản..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#0c1426]/90 border border-white/10 rounded-xl py-2 pl-10 pr-4 font-body-sm text-sm text-white placeholder-[#464554] focus:outline-none focus:border-[#8083ff]/60 transition-colors"
          />
        </div>

        {/* Filter & Refresh */}
        <div className="flex items-center gap-sm flex-wrap">
          <div className="flex items-center bg-[#0c1426]/90 border border-white/10 rounded-xl p-1">
            <button
              onClick={() => setRoleFilter("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer ${
                roleFilter === "all"
                  ? "bg-[#5659f4] text-white"
                  : "text-[#908fa0] hover:text-white"
              }`}
            >
              All ({entities.length})
            </button>
            <button
              onClick={() => setRoleFilter("admin")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer ${
                roleFilter === "admin"
                  ? "bg-[#5659f4] text-white"
                  : "text-[#908fa0] hover:text-white"
              }`}
            >
              Admin ({entities.filter((e) => e.role === "admin").length})
            </button>
            <button
              onClick={() => setRoleFilter("user")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer ${
                roleFilter === "user"
                  ? "bg-[#5659f4] text-white"
                  : "text-[#908fa0] hover:text-white"
              }`}
            >
              User ({entities.filter((e) => e.role !== "admin").length})
            </button>
          </div>

          <button
            onClick={fetchUsers}
            disabled={loading}
            title="Tải lại danh sách"
            className="flex items-center gap-1.5 px-3 py-2 bg-[#0c1426]/90 hover:bg-[#1f2a47] border border-white/10 rounded-xl text-xs font-mono text-white transition-colors cursor-pointer disabled:opacity-50"
          >
            <span
              className={`material-symbols-outlined text-[18px] ${
                loading ? "animate-spin" : ""
              }`}
            >
              refresh
            </span>
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5 bg-[#0e1628]/60">
              <th className="py-3 px-4 font-mono text-[11px] text-[#908fa0] uppercase tracking-wider font-semibold">
                User / Account
              </th>
              <th className="py-3 px-4 font-mono text-[11px] text-[#908fa0] uppercase tracking-wider font-semibold">
                Vai trò (Role)
              </th>
              <th className="py-3 px-4 font-mono text-[11px] text-[#908fa0] uppercase tracking-wider font-semibold">
                Auth Type
              </th>
              <th className="py-3 px-4 font-mono text-[11px] text-[#908fa0] uppercase tracking-wider font-semibold">
                Created At
              </th>
              <th className="py-3 px-4 font-mono text-[11px] text-[#908fa0] uppercase tracking-wider font-semibold text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {loading ? (
              <tr>
                <td colSpan={5} className="py-12 text-center text-[#908fa0]">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div className="w-8 h-8 border-3 border-[#5659f4] border-t-transparent rounded-full animate-spin"></div>
                    <span className="font-mono text-xs">Đang tải dữ liệu từ MongoDB...</span>
                  </div>
                </td>
              </tr>
            ) : filteredEntities.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-12 text-center text-[#908fa0] font-mono text-xs">
                  Không tìm thấy tài khoản nào phù hợp.
                </td>
              </tr>
            ) : (
              filteredEntities.map((entity) => {
                const isCurrent = entity._id === currentUser?._id;
                const isAdmin = entity.role === "admin";
                const isUpdatingThis = updatingRoleId === entity._id;

                return (
                  <tr
                    key={entity._id}
                    className="hover:bg-white/[0.02] transition-colors group"
                  >
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-[#1b253f] border border-white/10 flex items-center justify-center font-bold text-xs text-[#c0c1ff] overflow-hidden flex-shrink-0">
                          {entity.avatar && entity.avatar !== "default.jpg" ? (
                            <img
                              src={entity.avatar}
                              alt={entity.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            (entity.name || entity.email || "U")
                              .slice(0, 2)
                              .toUpperCase()
                          )}
                        </div>
                        <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="font-sans text-sm font-semibold text-white truncate max-w-[200px]">
                              {entity.name || "Unnamed User"}
                            </span>
                            {isCurrent && (
                              <span className="text-[9px] font-mono font-bold bg-[#5659f4]/30 text-[#a5a7ff] px-1.5 py-0.5 rounded border border-[#5659f4]/40">
                                YOU
                              </span>
                            )}
                          </div>
                          <span className="font-mono text-xs text-[#908fa0] truncate max-w-[250px]">
                            {entity.email}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td className="py-3.5 px-4">
                      <div className="inline-flex items-center gap-2">
                        <select
                          value={entity.role || "user"}
                          disabled={isUpdatingThis || isCurrent}
                          onChange={(e) => handleRoleChange(entity, e.target.value)}
                          className={`font-mono text-xs font-bold px-2.5 py-1 rounded-lg border appearance-none cursor-pointer focus:outline-none transition-all ${
                            isAdmin
                              ? "bg-[#6f00be]/30 text-[#ddb7ff] border-[#6f00be]/50 hover:bg-[#6f00be]/40"
                              : "bg-[#1e2942] text-[#60a5fa] border-[#3b82f6]/30 hover:bg-[#253352]"
                          } ${isUpdatingThis ? "opacity-50 cursor-wait" : ""}`}
                        >
                          <option value="user" className="bg-[#0c1426] text-[#60a5fa]">USER</option>
                          <option value="admin" className="bg-[#0c1426] text-[#ddb7ff]">ADMIN</option>
                        </select>
                        {isUpdatingThis && (
                          <div className="w-3.5 h-3.5 border-2 border-[#5659f4] border-t-transparent rounded-full animate-spin"></div>
                        )}
                      </div>
                    </td>

                    <td className="py-3.5 px-4">
                      <span className="text-xs font-mono text-[#c7c4d7] bg-[#0c1426] px-2 py-1 rounded border border-white/5">
                        {entity.authType || (entity.googleId ? "google" : "local")}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 font-mono text-xs text-[#908fa0]">
                      {formatDate(entity.createdAt)}
                    </td>

                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {/* Quick Role Toggle */}
                        {!isCurrent && (
                          <button
                            onClick={() =>
                              handleRoleChange(
                                entity,
                                isAdmin ? "user" : "admin"
                              )
                            }
                            disabled={isUpdatingThis}
                            title={
                              isAdmin
                                ? "Hạ quyền xuống User"
                                : "Nâng quyền lên Admin"
                            }
                            className={`p-1.5 rounded-lg border text-xs font-mono transition-colors cursor-pointer flex items-center gap-1 ${
                              isAdmin
                                ? "text-[#ddb7ff] bg-[#6f00be]/20 border-[#6f00be]/30 hover:bg-[#6f00be]/30"
                                : "text-[#60a5fa] bg-[#1e2942] border-[#3b82f6]/20 hover:bg-[#253352]"
                            }`}
                          >
                            <span className="material-symbols-outlined text-[16px]">
                              {isAdmin ? "shield_person" : "verified_user"}
                            </span>
                            <span>{isAdmin ? "Set User" : "Set Admin"}</span>
                          </button>
                        )}

                        {!isCurrent && (
                          <button
                            onClick={() => handleDeleteUser(entity._id, entity.email)}
                            disabled={deletingId === entity._id}
                            title="Xóa tài khoản"
                            className="p-1.5 rounded-lg text-[#908fa0] hover:text-[#ff6b6b] hover:bg-[#ff6b6b]/10 transition-colors cursor-pointer disabled:opacity-50"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              delete
                            </span>
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Footer Info */}
      <div className="p-4 bg-[#0e1628]/40 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="font-mono text-xs text-[#908fa0]">
          Tổng cộng: <strong className="text-white">{filteredEntities.length}</strong> / {entities.length} tài khoản trong Database
        </p>
      </div>
    </div>
  );
};
