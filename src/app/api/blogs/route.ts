// pages/api/blogs/index.ts
import { auth } from '@/auth';
import dbConnect from '@/lib/dbConnect';
import Blog from '@/lib/models/Blog';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    await dbConnect();
    const blogs = await Blog.find({});
    return NextResponse.json({ success: true, data: blogs });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.formData();
    const data = {
      thumbnail:body.get('thumbnail') as string,
      title: body.get('title') as string,
      content: body.get('content') as string,
      tags: JSON.parse(body.get('tags') as string),
      author_id: body.get('author_id') as string,
      views: parseInt(body.get('views') as string),
      created_at: new Date(body.get('created_at') as string).toLocaleDateString(),
      updated_at: new Date(body.get('updated_at') as string).toLocaleDateString(), 
    }
    const newBlog = new Blog({
      ...data
    });
    const blog = await Blog.create(newBlog);
    return NextResponse.json({ success: true, data: blog });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message });
  }
};


export async function DELETE(req: Request) {
  try {
    await dbConnect();
    const blog = await Blog.deleteMany({});
    return NextResponse.json({ success: true, data: blog });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message });
  }
};


