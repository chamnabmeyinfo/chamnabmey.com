import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') || '';
    let data: Record<string, string> = {};

    if (contentType.includes('application/x-www-form-urlencoded')) {
      const formData = await request.formData();
      formData.forEach((value, key) => {
        data[key] = value.toString();
      });
    } else if (contentType.includes('application/json')) {
      data = await request.json();
    }

    console.log('Contact form received:', data);

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
