const trimSlash = (value) => value.replace(/\/+$/, "");

/**
 * Production: https://api.stratumer.co
 * Development: empty string (Vite proxies /api -> localhost:4000)
 */
export const API_BASE_URL = trimSlash(
  import.meta.env.VITE_API_BASE_URL || ""
);

export function apiUrl(path) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE_URL}${normalized}`;
}
