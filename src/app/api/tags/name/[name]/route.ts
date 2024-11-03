import dbConnect from "@/lib/dbConnect";
import Tag from "@/lib/models/Tag";
import { NextResponse } from "next/server";

export async function GET(req: Request,context:any) {
    try {
      await dbConnect();
      const {name} = await context.params;
      const tag = await Tag.findOne({name:name}); 
      return NextResponse.json({ success: true, data: tag });
    } catch (error) {
      return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
    }
  }