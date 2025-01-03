// pages/api/tags/[id].ts
import dbConnect, { ConnectionObject } from '@/lib/dbConnect';
import Tag from '@/lib/models/Tag';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

export async function GET(req: Request, context: any) {
  const { id } = await context.params;

  try {
    const connection: ConnectionObject = await dbConnect();  // Just need to ensure connection is established
    const db = connection.db!;
    const tagsCollection = db.collection("Tags_v2");
    const objectId = new ObjectId(id);
    const tagsData = await tagsCollection.findOne({_id:objectId});
    return NextResponse.json({ success: true, data: tagsData });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
  }
}

export async function PUT(req: Request, context: any) {
  const { id } = await context.params;

  try {
    await dbConnect();
    const body = await req.json();
    const updateData = {
        ...body
    }
    const tag = await Tag.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
    if (!tag) {
      return NextResponse.json({ success: false, error: 'Tag not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: tag });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
  }
}

export async function DELETE(req: Request, context: any) {
  const { id } = await context.params;

  try {
    await dbConnect();
    const deletedTag = await Tag.findByIdAndDelete(id);
    if (!deletedTag) {
      return NextResponse.json({ success: false, error: 'Tag not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
  }
}
