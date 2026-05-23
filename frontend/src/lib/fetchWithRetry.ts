/**
 * fetchWithRetry.ts — Fetch wrapper with timeout, retry, and exponential backoff
 *
 * Render free tier has a ~10-30 second cold start. This retries failed requests
 * with delays so the user's data loads even on first wake-up.
 */

const DEFAULT_TIMEOUT_MS = 20000; // 20 seconds per attempt
const DEFAULT_MAX_RETRIES = 3;
const DEFAULT_BASE_DELAY_MS = 1500;

/**
 * Fetch a URL with automatic retry on failure.
 * Each retry waits exponentially longer: 1.5s, 3s, 6s ...
 */
export async function fetchWithRetry(
  url: string,
  options?: RequestInit,
  maxRetries = DEFAULT_MAX_RETRIES,
  baseDelay = DEFAULT_BASE_DELAY_MS,
  timeoutMs = DEFAULT_TIMEOUT_MS,
): Promise<Response> {
  let lastError: Error = new Error('Unknown error');

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });
      clearTimeout(timer);

      // Treat 5xx as retriable errors
      if (response.status >= 500) {
        throw new Error(`Server error ${response.status}`);
      }

      return response;
    } catch (err) {
      clearTimeout(timer);
      lastError = err instanceof Error ? err : new Error(String(err));

      const isLastAttempt = attempt === maxRetries - 1;
      if (!isLastAttempt) {
        const delay = baseDelay * Math.pow(2, attempt); // 1.5s, 3s, 6s
        console.warn(
          `[fetchWithRetry] Attempt ${attempt + 1}/${maxRetries} failed for ${url}. Retrying in ${delay}ms...`,
        );
        await sleep(delay);
      }
    }
  }

  throw lastError;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
