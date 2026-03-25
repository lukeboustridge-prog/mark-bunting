import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'changeme';
const SESSION_SECRET = process.env.SESSION_SECRET || 'default-secret-change-me';
const SESSION_COOKIE = 'mb_admin_session';

export async function POST(request: Request) {
  const formData = await request.formData();
  const password = formData.get('password') as string;

  if (password !== ADMIN_PASSWORD) {
    const url = new URL('/admin?error=invalid', request.url);
    return NextResponse.redirect(url);
  }

  // Create session token
  const timestamp = Date.now().toString();
  const token = Buffer.from(`${timestamp}:${SESSION_SECRET}`).toString('base64');

  // Set cookie and redirect
  const url = new URL('/admin', request.url);
  const response = NextResponse.redirect(url);
  response.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: '/',
  });

  return response;
}
