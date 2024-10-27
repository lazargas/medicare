// pages/api/blogs/index.ts
import dbConnect from '@/lib/dbConnect';
import Blog from '@/lib/models/Blog';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

export async function GET(req: NextApiRequest) {
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
      const body = await req.json();
      const newBlog = new Blog({
        ...body,
        createdAt : new Date().toISOString,
        updatedAt : new Date().toISOString,
        views:0,
      });
      const blog = await Blog.create(newBlog);
      return NextResponse.json({ success: true, data: blog });
    } catch (error) {
      return NextResponse.json({ success: false, error: (error as Error).message });
    }
  };
  
  
  export async function DELETE(req: NextApiRequest) {
    try {
      await dbConnect();
      const blog = await Blog.deleteMany({});
      return NextResponse.json({ success: true, data: blog });
    } catch (error) {
      return NextResponse.json({ success: false, error: (error as Error).message });
    }
  };
  
  
  