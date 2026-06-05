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

/**
 * Resolves a blog/project image URL. If it's a Cloudinary URL,
 * it routes it through the backend proxy to hide the Cloudinary origin.
 */
export function getImageUrl(url: string): string {
  if (!url) return '';

  // If the database stored a backend proxy path like /api/blogs/image/v12345/truesun/...
  // Reconstruct the direct Cloudinary URL to bypass the backend proxy entirely!
  // This completely eliminates hanging requests and 404s.
  const proxyPrefix = '/api/blogs/image/';
  if (url.includes(proxyPrefix)) {
    const imagePath = url.split(proxyPrefix)[1];
    return `https://res.cloudinary.com/dyyv00jvc/image/upload/${imagePath}`;
  }

  // If it's a relative local URL, ensure it starts with a leading slash
  if (!url.startsWith('http')) {
    const path = url.startsWith('/') ? url : `/${url}`;
    
    // If it's an API route or upload route, use the backend URL
    if (path.startsWith('/api/') || path.startsWith('/uploads/')) {
      return apiUrl(path);
    }
    
    // Otherwise it's a frontend static image (e.g. /how-long-does-a-solar-panel-installation-take.png)
    // Use the frontend origin
    return `${window.location.origin}${path}`;
  }

  // Serve Cloudinary URLs directly from the CDN
  const cloudinaryDomain = 'res.cloudinary.com';
  if (url.includes(cloudinaryDomain)) {
    return url;
  }

  // Fallback
  return url;
}
