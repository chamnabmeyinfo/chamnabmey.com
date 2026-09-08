import { NextResponse } from 'next/server';
import { saveInboxMessage } from '@/lib/contentStore';

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') || '';
    let name = '';
    let email = '';
    let phone = '';
    let subject = '';
    let message = '';

    if (contentType.includes('application/x-www-form-urlencoded')) {
      const formData = await request.formData();
      name = formData.get('name')?.toString() || '';
      email = formData.get('email')?.toString() || '';
      phone = formData.get('phone')?.toString() || '';
      subject = formData.get('subject')?.toString() || '';
      message = formData.get('message')?.toString() || '';
    } else if (contentType.includes('application/json')) {
      const data = await request.json();
      name = data.name || '';
      email = data.email || '';
      phone = data.phone || '';
      subject = data.subject || '';
      message = data.message || '';
    }

    // Save to admin inbox
    if (name || email || message) {
      await saveInboxMessage({
        name,
        email,
        phone,
        subject,
        message,
        source: 'Website Contact Form'
      });
    }

    return new NextResponse('Thank you! Your message has been sent successfully.', {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return new NextResponse('Oops! Something went wrong. Please try contacting via Telegram or Email directly.', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
}
