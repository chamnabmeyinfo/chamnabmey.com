import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // 1. Generate base64 Data URL (guaranteed to persist everywhere)
    const mimeType = file.type || 'application/octet-stream';
    const base64Url = `data:${mimeType};base64,${buffer.toString('base64')}`;

    // 2. Try saving to public/uploads directory for fast local static serving if disk is writable
    let publicUrl = base64Url;
    try {
      const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
      }

      // Safe clean filename
      const ext = path.extname(file.name) || (mimeType.includes('pdf') ? '.pdf' : '.jpg');
      const safeName = 'upload-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7) + ext;
      const filePath = path.join(uploadsDir, safeName);

      fs.writeFileSync(filePath, buffer);
      // In local dev, publicUrl can be /uploads/safeName
      // But base64 is also returned for guaranteed serverless persistence
      publicUrl = `/uploads/${safeName}`;
    } catch (fsErr) {
      // Ephemeral disk or read-only serverless: fallback to base64Url
      publicUrl = base64Url;
    }

    return NextResponse.json({
      success: true,
      url: publicUrl,
      dataUrl: base64Url,
      filename: file.name,
      size: file.size,
      mimeType,
    });
  } catch (error: any) {
    console.error('Upload API error:', error);
    return NextResponse.json({ error: error.message || 'Upload failed' }, { status: 500 });
  }
}
