import { NextResponse } from 'next/server';
import { logoutAdmin } from '@/lib/adminAuth';

export async function POST() {
  try {
    await logoutAdmin();
    return NextResponse.json({ success: true, message: 'Logged out successfully' });
  } catch (error: any) {
    return NextResponse.json({ error: 'Logout failed' }, { status: 500 });
  }
}
