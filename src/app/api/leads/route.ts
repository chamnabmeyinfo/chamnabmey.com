import { NextResponse } from 'next/server';
import { submitClientLead, LeadSubmission } from '@/lib/firebase';

export async function POST(request: Request) {
  try {
    const body: LeadSubmission = await request.json();

    if (!body.name || !body.email || !body.phoneOrTelegram || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields: Name, Email, Phone/Telegram, and Message are required.' },
        { status: 400 }
      );
    }

    const result = await submitClientLead(body);
    return NextResponse.json({ success: true, result });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || 'Failed to record consultation request.' },
      { status: 500 }
    );
  }
}
