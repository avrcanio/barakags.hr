const hits = new Map<string, { count: number; resetAt: number }>();

const WINDOW_MS = 15 * 60 * 1000;
const MAX = 5;

export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);

  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (entry.count >= MAX) {
    return false;
  }

  entry.count += 1;
  return true;
}
