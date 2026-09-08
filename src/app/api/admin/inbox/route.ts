import { NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/adminAuth';
import { getInboxMessages } from '@/lib/contentStore';

export async function GET() {
  const auth = await isAuthenticated();
  if (!auth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const messages = await getInboxMessages();
  return NextResponse.json({ messages });
}
