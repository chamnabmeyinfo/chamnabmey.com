import { cookies } from 'next/headers';

export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'chamnab2026!';
const SESSION_COOKIE_NAME = 'admin_session';

// A simple HMAC/hash token simulation for session verification
function generateToken(pass: string): string {
  let hash = 0;
  for (let i = 0; i < pass.length; i++) {
    hash = (hash << 5) - hash + pass.charCodeAt(i);
    hash |= 0;
  }
  return `sess_${Math.abs(hash)}_auth_ok`;
}

export const EXPECTED_TOKEN = generateToken(ADMIN_PASSWORD);

/**
 * Checks if the incoming request has a valid admin session cookie
 */
export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  return session === EXPECTED_TOKEN;
}

/**
 * Validates provided password and sets cookie if valid
 */
export async function authenticateAdmin(password: string): Promise<boolean> {
  if (password === ADMIN_PASSWORD) {
    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE_NAME, EXPECTED_TOKEN, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    });
    return true;
  }
  return false;
}

/**
 * Logs out the admin by deleting the session cookie
 */
export async function logoutAdmin(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}
