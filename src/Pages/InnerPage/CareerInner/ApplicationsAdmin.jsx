import { useEffect, useMemo, useState } from "react";
import { apiUrl } from "../../../config/api";

const STORAGE_KEY = "stratumer_admin_secret";
const STATUSES = ["pending", "reviewing", "interview", "accepted", "rejected"];

function formatBytes(bytes) {
  if (!bytes && bytes !== 0) return "—";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function formatDate(value) {
  if (!value) return "—";
  return new Date(value).toLocaleString();
}

const ApplicationsAdmin = () => {
  const [secret, setSecret] = useState(
    () => sessionStorage.getItem(STORAGE_KEY) || ""
  );
  const [secretInput, setSecretInput] = useState(secret);
  const [authError, setAuthError] = useState("");
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState(null);
  const [applications, setApplications] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [statusFilter, setStatusFilter] = useState("");
  const [search, setSearch] = useState("");
  const [notesDraft, setNotesDraft] = useState("");
  const [statusDraft, setStatusDraft] = useState("pending");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const selected = useMemo(
    () => applications.find((app) => app.id === selectedId) || null,
    [applications, selectedId]
  );

  const adminFetch = async (path, options = {}) => {
    const headers = {
      ...(options.headers || {}),
      "X-Admin-Secret": secret,
    };

    if (options.body && !(options.body instanceof FormData)) {
      headers["Content-Type"] = "application/json";
    }

    const response = await fetch(apiUrl(`/api/admin${path}`), {
      ...options,
      headers,
    });

    if (response.status === 401) {
      throw new Error("Unauthorized");
    }

    const contentType = response.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Request failed");
      }
      return data;
    }

    if (!response.ok) {
      throw new Error("Request failed");
    }

    return response;
  };

  const loadData = async () => {
    if (!secret) return;
    setLoading(true);
    setAuthError("");
    setMessage("");

    try {
      const query = new URLSearchParams();
      if (statusFilter) query.set("status", statusFilter);
      if (search.trim()) query.set("q", search.trim());

      const [statsData, listData] = await Promise.all([
        adminFetch("/stats"),
        adminFetch(`/applications?${query.toString()}`),
      ]);

      setStats(statsData.stats);
      setApplications(listData.applications);

      if (
        selectedId &&
        !listData.applications.some((app) => app.id === selectedId)
      ) {
        setSelectedId(null);
      }
    } catch (err) {
      if (err.message === "Unauthorized") {
        setAuthError("Invalid admin secret.");
        sessionStorage.removeItem(STORAGE_KEY);
        setSecret("");
      } else {
        setAuthError(err.message || "Failed to load applications.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (secret) {
      loadData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secret, statusFilter]);

  useEffect(() => {
    if (selected) {
      setNotesDraft(selected.notes || "");
      setStatusDraft(selected.status || "pending");
    }
  }, [selected]);

  const handleUnlock = (e) => {
    e.preventDefault();
    const value = secretInput.trim();
    if (!value) {
      setAuthError("Enter the admin secret.");
      return;
    }
    sessionStorage.setItem(STORAGE_KEY, value);
    setSecret(value);
  };

  const handleLogout = () => {
    sessionStorage.removeItem(STORAGE_KEY);
    setSecret("");
    setSecretInput("");
    setApplications([]);
    setStats(null);
    setSelectedId(null);
  };

  const handleSave = async () => {
    if (!selected) return;
    setSaving(true);
    setMessage("");

    try {
      const data = await adminFetch(`/applications/${selected.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          status: statusDraft,
          notes: notesDraft,
        }),
      });

      setApplications((prev) =>
        prev.map((app) => (app.id === data.application.id ? data.application : app))
      );
      setMessage("Application updated.");
      const statsData = await adminFetch("/stats");
      setStats(statsData.stats);
    } catch (err) {
      setMessage(err.message || "Failed to update.");
    } finally {
      setSaving(false);
    }
  };

  const handleDownloadResume = async () => {
    if (!selected) return;
    try {
      const response = await adminFetch(`/applications/${selected.id}/resume`);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = selected.resumeOriginalName || "resume";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      setMessage(err.message || "Failed to download resume.");
    }
  };

  if (!secret) {
    return (
      <div className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center px-4">
        <form
          onSubmit={handleUnlock}
          className="w-full max-w-md bg-[#1e293b] rounded-lg p-8 border border-slate-700"
        >
          <h1 className="font-Rajdhani text-2xl font-bold mb-2">
            Applications Access
          </h1>
          <p className="font-Nunito text-slate-300 mb-6 text-sm">
            Enter the admin secret to view job applications.
          </p>
          <input
            type="password"
            value={secretInput}
            onChange={(e) => setSecretInput(e.target.value)}
            placeholder="Admin secret"
            className="w-full rounded border border-slate-600 bg-slate-900 px-4 py-3 outline-none focus:border-sky-400"
          />
          {authError ? (
            <p className="text-red-400 text-sm mt-3 font-Nunito">{authError}</p>
          ) : null}
          <button
            type="submit"
            className="mt-6 w-full rounded bg-sky-500 hover:bg-sky-400 transition-colors py-3 font-Nunito font-semibold"
          >
            Unlock
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100">
      <header className="border-b border-slate-800 px-4 sm:px-8 py-4 flex flex-wrap gap-4 items-center justify-between">
        <div>
          <h1 className="font-Rajdhani text-2xl font-bold">
            Stratumer Applications
          </h1>
          <p className="font-Nunito text-slate-400 text-sm">
            Internal hiring review panel
          </p>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={loadData}
            className="px-4 py-2 rounded border border-slate-600 hover:border-sky-400 transition-colors font-Nunito text-sm"
          >
            Refresh
          </button>
          <button
            type="button"
            onClick={handleLogout}
            className="px-4 py-2 rounded bg-slate-700 hover:bg-slate-600 transition-colors font-Nunito text-sm"
          >
            Lock
          </button>
        </div>
      </header>

      <div className="px-4 sm:px-8 py-6">
        {stats ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
            {[
              ["Total", stats.total],
              ["Pending", stats.pending],
              ["Reviewing", stats.reviewing],
              ["Interview", stats.interview],
              ["Accepted", stats.accepted],
              ["Rejected", stats.rejected],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-3"
              >
                <p className="font-Nunito text-xs uppercase tracking-wide text-slate-400">
                  {label}
                </p>
                <p className="font-Rajdhani text-2xl font-bold mt-1">{value}</p>
              </div>
            ))}
          </div>
        ) : null}

        <div className="flex flex-wrap gap-3 mb-6">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search name, email, phone"
            className="min-w-[220px] flex-1 rounded border border-slate-700 bg-slate-900 px-4 py-2 outline-none focus:border-sky-400 font-Nunito"
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded border border-slate-700 bg-slate-900 px-4 py-2 outline-none font-Nunito"
          >
            <option value="">All statuses</option>
            {STATUSES.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={loadData}
            className="rounded bg-sky-500 hover:bg-sky-400 px-4 py-2 font-Nunito font-semibold"
          >
            Search
          </button>
        </div>

        {authError ? (
          <p className="text-red-400 mb-4 font-Nunito">{authError}</p>
        ) : null}
        {message ? (
          <p className="text-sky-300 mb-4 font-Nunito">{message}</p>
        ) : null}

        <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
          <div className="xl:col-span-2 rounded-lg border border-slate-800 overflow-hidden bg-slate-900/40">
            <div className="px-4 py-3 border-b border-slate-800 font-Nunito text-sm text-slate-300">
              {loading
                ? "Loading..."
                : `${applications.length} application${
                    applications.length === 1 ? "" : "s"
                  }`}
            </div>
            <div className="max-h-[70vh] overflow-y-auto divide-y divide-slate-800">
              {applications.map((app) => (
                <button
                  key={app.id}
                  type="button"
                  onClick={() => setSelectedId(app.id)}
                  className={`w-full text-left px-4 py-4 transition-colors ${
                    selectedId === app.id
                      ? "bg-sky-500/15"
                      : "hover:bg-slate-800/60"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-Rajdhani font-semibold text-lg">
                        {app.fullName}
                      </p>
                      <p className="font-Nunito text-sm text-slate-400">
                        {app.email}
                      </p>
                    </div>
                    <span className="text-xs uppercase tracking-wide rounded-full border border-slate-600 px-2 py-1 font-Nunito">
                      {app.status}
                    </span>
                  </div>
                  <p className="font-Nunito text-xs text-slate-500 mt-2">
                    {formatDate(app.createdAt)}
                  </p>
                </button>
              ))}
              {!loading && applications.length === 0 ? (
                <p className="px-4 py-8 text-slate-400 font-Nunito text-sm">
                  No applications found.
                </p>
              ) : null}
            </div>
          </div>

          <div className="xl:col-span-3 rounded-lg border border-slate-800 bg-slate-900/40 p-5 min-h-[420px]">
            {selected ? (
              <div className="space-y-5">
                <div>
                  <h2 className="font-Rajdhani text-3xl font-bold">
                    {selected.fullName}
                  </h2>
                  <p className="font-Nunito text-slate-400 mt-1">
                    {selected.jobTitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-Nunito text-sm">
                  <div>
                    <p className="text-slate-400">Email</p>
                    <p className="mt-1 break-all">{selected.email}</p>
                  </div>
                  <div>
                    <p className="text-slate-400">Phone</p>
                    <p className="mt-1">{selected.phone}</p>
                  </div>
                  <div>
                    <p className="text-slate-400">Submitted</p>
                    <p className="mt-1">{formatDate(selected.createdAt)}</p>
                  </div>
                  <div>
                    <p className="text-slate-400">Updated</p>
                    <p className="mt-1">{formatDate(selected.updatedAt)}</p>
                  </div>
                </div>

                <div>
                  <p className="font-Nunito text-slate-400 text-sm mb-2">
                    Applicant note
                  </p>
                  <p className="font-Nunito whitespace-pre-wrap rounded border border-slate-800 bg-slate-950/50 p-4 text-sm">
                    {selected.message || "No note provided."}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="font-Nunito text-sm">
                    <p className="text-slate-400">Resume</p>
                    <p className="mt-1">
                      {selected.resumeOriginalName} (
                      {formatBytes(selected.resumeSize)})
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleDownloadResume}
                    className="rounded bg-slate-700 hover:bg-slate-600 px-4 py-2 font-Nunito text-sm"
                  >
                    Download resume
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-Nunito text-sm text-slate-400 block mb-2">
                      Status
                    </label>
                    <select
                      value={statusDraft}
                      onChange={(e) => setStatusDraft(e.target.value)}
                      className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 font-Nunito"
                    >
                      {STATUSES.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-Nunito text-sm text-slate-400 block mb-2">
                    Internal notes
                  </label>
                  <textarea
                    value={notesDraft}
                    onChange={(e) => setNotesDraft(e.target.value)}
                    rows={4}
                    className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 font-Nunito outline-none focus:border-sky-400"
                    placeholder="Add hiring notes..."
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSave}
                  disabled={saving}
                  className="rounded bg-sky-500 hover:bg-sky-400 disabled:opacity-60 px-5 py-2.5 font-Nunito font-semibold"
                >
                  {saving ? "Saving..." : "Save changes"}
                </button>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-slate-400 font-Nunito">
                Select an application to view details.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsAdmin;
