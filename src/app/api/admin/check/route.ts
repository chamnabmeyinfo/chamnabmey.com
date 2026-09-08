import { NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/adminAuth';

export async function GET() {
  const auth = await isAuthenticated();
  return NextResponse.json({ authenticated: auth });
}
