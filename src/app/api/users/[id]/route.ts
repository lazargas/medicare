
import dbConnect from '@/lib/dbConnect';
import User from '@/lib/models/User';
import { NextResponse, NextRequest } from 'next/server';

type Data = {
  success: boolean;
  data?: any;
  error?: string;
};

export async function GET(req: Request, context: any) {

  try {
    const { id } = await context.params;
    if (!id) {
      return NextResponse.json({ success: false, error: 'Please provide an id' }, {
      });
    }
    await dbConnect();
    const user = await User.findById(id);
    if (!user) {
      return NextResponse.json({ success: false, error: 'User not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: user });
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
      ...body,
    };
    const user = await User.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'User not found' },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: user });
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 400 }
    );
  }
}

export async function DELETE(req: Request,context:any) {
  const { id } = await context.params;

  try {
    await dbConnect();
    const deletedUser = await User.deleteOne({ _id: id });
    if (!deletedUser) {
      return NextResponse.json({ success: false, error: 'User not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
  }
}
