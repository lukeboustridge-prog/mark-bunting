import { cookies } from 'next/headers';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'changeme';
const SESSION_COOKIE = 'mb_admin_session';
const SESSION_SECRET = process.env.SESSION_SECRET || 'default-secret-change-me';

// Simple hash-based session token
export function createSessionToken(): string {
  const timestamp = Date.now().toString();
  // Simple but sufficient for a single-user admin
  return Buffer.from(`${timestamp}:${SESSION_SECRET}`).toString('base64');
}

export function validateSessionToken(token: string): boolean {
  try {
    const decoded = Buffer.from(token, 'base64').toString();
    return decoded.endsWith(`:${SESSION_SECRET}`);
  } catch {
    return false;
  }
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE);
  if (!session) return false;
  return validateSessionToken(session.value);
}

export async function login(password: string): Promise<boolean> {
  if (password !== ADMIN_PASSWORD) return false;
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, createSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: '/',
  });
  return true;
}

export async function logout(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

export function verifyPassword(password: string): boolean {
  return password === ADMIN_PASSWORD;
}
