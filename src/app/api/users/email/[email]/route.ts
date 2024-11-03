import dbConnect from "@/lib/dbConnect";
import User from "@/lib/models/User";
import { NextResponse } from "next/server";

export async function GET(req: Request, context: any) {
    try {
      const { email } = await context.params;
     
      if (!email) {
        return NextResponse.json({ success: false, error: 'Please provide an id' }, {
        });
      }
      await dbConnect();
      const user = await User.findOne({email:email});
      if (!user) {
        return NextResponse.json({ success: false, error: 'User not found' }, { status: 404 });
      }
      return NextResponse.json({ success: true, data: user });
    } catch (error) {
      return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
    }
  }
  