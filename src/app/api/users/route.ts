// pages/api/users/index.ts
import dbConnect from '@/lib/dbConnect';
import User from '@/lib/models/User';
import { NextRequest, NextResponse } from 'next/server';

export const config = {
  api: {
    bodyParser:true
  },
  maxDuration: 5,
}

type Data = {
  success: boolean;
  data?: any;
  error?: string;
};

export async function GET(req: Request) {
  try {
    await dbConnect();
    const users = await User.find({});
    return NextResponse.json({ success: true, data: users });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message });
  }
};

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { name, email, image, blogs } = await req.json();
    console.log(name, email, image, blogs);
    
  
    if (!name || !email) {
      return NextResponse.json({ success: false, error: 'Please provide all fields' });
    }
    const newUser = new User({
      name: name as string,
      email : email as string,
      image : image ? image as string: "",
      blogs : blogs ? blogs as string: ""
    });
    const user = await User.create(newUser);
    return NextResponse.json({ success: true, data: user });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message });
  }
};


export async function DELETE(req: Request) {
  try {
    await dbConnect();
    const user = await User.deleteMany({});
    return NextResponse.json({ success: true, data: user });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message });
  }
};


