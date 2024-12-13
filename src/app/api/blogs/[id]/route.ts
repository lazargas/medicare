// pages/api/blogs/[id].ts
import dbConnect from '@/lib/dbConnect';
import Blog from '@/lib/models/Blog';
import { NextResponse } from 'next/server';

export async function GET(req: Request, context: any) {
  const { id } = await context.params;

  try {
    await dbConnect();
    const blog = await Blog.findById(id);
    if (!blog) {
      return NextResponse.json({ success: false, error: 'Blog not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: blog });
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
    };
    const blog = await Blog.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
    if (!blog) {
      return NextResponse.json({ success: false, error: 'Blog not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: blog });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
  }
}

export async function DELETE(req: Request, context: any) {
  const { id } = await context.params;

  try {
    await dbConnect();
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      return NextResponse.json({ success: false, error: 'Blog not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
  }
}
