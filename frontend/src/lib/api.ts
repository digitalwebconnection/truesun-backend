/**
 * api.ts — Centralized API base URL resolver + backend warm-up utility
 *
 * In development:   Vite proxy forwards /api/* → http://localhost:5000
 * In production:    VITE_API_URL must be set to the deployed backend URL
 *                   e.g. VITE_API_URL=https://truesun-backend.onrender.com
 *
 * Usage:
 *   import { apiUrl, warmUpBackend } from '../../lib/api';
 *   fetch(apiUrl('/api/projects'))
 */

const base = import.meta.env.VITE_API_URL
  ? import.meta.env.VITE_API_URL.replace(/\/$/, '') // strip trailing slash
  : ''; // empty string = use relative URL (Vite proxy handles it in dev)

/**
 * Build a full URL for the given API path.
 * @param path - starts with "/" e.g. "/api/projects"
 */
export function apiUrl(path: string): string {
  return `${base}${path}`;
}

/**
 * Silently ping the backend health endpoint to wake it from Render cold-start.
 * Called once when the React app mounts. Fire-and-forget — never throws.
 *
 * By the time a user clicks "Projects" or "Blog", the backend has already had
 * ~5-10 seconds to boot up, dramatically reducing perceived cold-start delay.
 */
export function warmUpBackend(): void {
  // Only runs in production where VITE_API_URL is set (i.e. Render is involved)
  if (!import.meta.env.VITE_API_URL) return;

  const healthUrl = apiUrl('/api/health');

  const attempt = (retries: number, delay: number) => {
    fetch(healthUrl, { method: 'GET', cache: 'no-store' })
      .then((res) => {
        if (!res.ok && retries > 0) {
          setTimeout(() => attempt(retries - 1, delay * 2), delay);
        }
      })
      .catch(() => {
        if (retries > 0) {
          setTimeout(() => attempt(retries - 1, delay * 2), delay);
        }
      });
  };

  // Ping immediately, then retry up to 3 times (2s, 4s, 8s gaps)
  attempt(3, 2000);
}
