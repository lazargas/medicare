import dbConnect, { ConnectionObject } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET(req: Request, context: any) {
    try {
      const { email } = await context.params;
     
      if (!email) {
        return NextResponse.json({ success: false, error: 'Please provide an id' }, {
        });
      }
      const connection:ConnectionObject = await dbConnect();
      const db = connection.db!;
      const articlesCollection = db.collection("Users_v2");
      
      let user = await articlesCollection.findOne({email:email});
      if (!user) {
        return NextResponse.json({ success: false, data:[]});
      }
      return NextResponse.json({ success: true, data: user });
    } catch (error) {
      return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
    }
  }
  