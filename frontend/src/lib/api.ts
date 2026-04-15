/**
 * api.ts — Centralized API base URL resolver
 *
 * In development:   Vite proxy forwards /api/* → http://localhost:5000
 * In production:    VITE_API_URL must be set to the deployed backend URL
 *                   e.g. VITE_API_URL=https://truesun-backend.vercel.app
 *
 * Usage:
 *   import { apiUrl } from '../../lib/api';
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
