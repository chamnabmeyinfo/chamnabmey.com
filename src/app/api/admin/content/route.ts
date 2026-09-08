import { NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/adminAuth';
import { getContent, saveContent } from '@/lib/contentStore';
import { PortfolioContent } from '@/data/portfolioContent';

export async function GET() {
  const content = await getContent();
  return NextResponse.json(content);
}

export async function POST(request: Request) {
  try {
    const auth = await isAuthenticated();
    if (!auth) {
      return NextResponse.json({ error: 'Unauthorized. Please log in.' }, { status: 401 });
    }

    const body: PortfolioContent = await request.json();
    if (!body || !body.profile || !body.hero) {
      return NextResponse.json({ error: 'Invalid content schema' }, { status: 400 });
    }

    await saveContent(body);
    return NextResponse.json({ success: true, message: 'Content saved successfully' });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Failed to save content' }, { status: 500 });
  }
}
