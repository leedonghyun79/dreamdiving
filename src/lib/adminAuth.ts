import { NextRequest } from 'next/server';

export function isAdmin(request: NextRequest) {
  const expected = process.env.ADMIN_PASSWORD;
  return !!expected && request.headers.get('x-admin-password') === expected;
}
