import { NextResponse } from 'next/server';

const SESSION_COOKIE = 'mb_admin_session';

export async function POST(request: Request) {
  const url = new URL('/admin', request.url);
  const response = NextResponse.redirect(url);
  response.cookies.delete(SESSION_COOKIE);
  return response;
}
