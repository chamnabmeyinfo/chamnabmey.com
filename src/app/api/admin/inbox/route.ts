import { NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/adminAuth';
import { getInboxMessages, deleteInboxMessage } from '@/lib/contentStore';

export async function GET() {
  const auth = await isAuthenticated();
  if (!auth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const messages = await getInboxMessages();
  return NextResponse.json({ messages });
}

export async function DELETE(request: Request) {
  const auth = await isAuthenticated();
  if (!auth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if (!id) {
    return NextResponse.json({ error: 'Message ID is required' }, { status: 400 });
  }

  await deleteInboxMessage(id);
  return NextResponse.json({ success: true, message: 'Message deleted successfully' });
}
