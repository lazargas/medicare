// pages/api/tags/index.ts
import dbConnect from '@/lib/dbConnect';
import Tag from '@/lib/models/Tag';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    await dbConnect();
    const tags = await Tag.find({});
    return NextResponse.json({ success: true, data: tags });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const tag = await Tag.create(body);
    return NextResponse.json({ success: true, data: tag });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
  }
}

export async function DELETE(req: Request) {
  try {
    await dbConnect();
    const tag = await Tag.deleteMany({});
    return NextResponse.json({ success: true, data: tag });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message });
  }
};
