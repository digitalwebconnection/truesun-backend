/**
 * dataCache.ts — Stale-while-revalidate localStorage cache
 *
 * Strategy:
 *  1. On first visit  → show skeleton, fetch from API, cache result, render data.
 *  2. On return visit → immediately render CACHED data (instant), then re-fetch
 *     silently in the background and update the cache + UI once fresh data arrives.
 *
 * This means users always see something immediately, and data stays fresh.
 */

const DEFAULT_TTL_MS  = 24 * 60 * 60 * 1000; // 24 hours — blogs & projects rarely change
export const TTL_24H  = 24 * 60 * 60 * 1000; // 24 hours
export const TTL_1H   =      60 * 60 * 1000; // 1 hour  (use for more volatile data)
const STORAGE_PREFIX  = 'ts_cache_';

interface CacheEntry<T> {
  data: T;
  cachedAt: number;
  ttl: number;
}

/** Write data into localStorage cache. Silently swallows quota/SSR errors. */
export function cacheSet<T>(key: string, data: T, ttl = DEFAULT_TTL_MS): void {
  try {
    const entry: CacheEntry<T> = { data, cachedAt: Date.now(), ttl };
    localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(entry));
  } catch {
    // localStorage may be unavailable (private browsing, quota exceeded)
  }
}

/** Read from cache. Returns null if missing. Does NOT check TTL (used for stale reads). */
export function cacheGetStale<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + key);
    if (!raw) return null;
    const entry: CacheEntry<T> = JSON.parse(raw);
    return entry.data;
  } catch {
    return null;
  }
}

/** Read from cache. Returns null if missing OR expired (used for fresh-only reads). */
export function cacheGet<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + key);
    if (!raw) return null;
    const entry: CacheEntry<T> = JSON.parse(raw);
    if (Date.now() - entry.cachedAt > entry.ttl) {
      localStorage.removeItem(STORAGE_PREFIX + key);
      return null;
    }
    return entry.data;
  } catch {
    return null;
  }
}

/** Check whether cached data is fresh (within TTL). */
export function cacheIsFresh(key: string): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + key);
    if (!raw) return false;
    const entry: CacheEntry<unknown> = JSON.parse(raw);
    return Date.now() - entry.cachedAt < entry.ttl;
  } catch {
    return false;
  }
}

/** Remove a specific cache entry. */
export function cacheEvict(key: string): void {
  try {
    localStorage.removeItem(STORAGE_PREFIX + key);
  } catch {
    // ignore
  }
}
