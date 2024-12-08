import dbConnect, { ConnectionObject } from "@/lib/dbConnect";
import Tag from "@/lib/models/Tag";
import { NextResponse } from "next/server";

export async function GET(req: Request, context: any) {
  try {
    await dbConnect();
    const { name } = await context.params;
    const connection: ConnectionObject = await dbConnect();  // Just need to ensure connection is established
    const db = connection.db!;
    const tagsCollection = db.collection("Tags_v2");
    const tagsData = await tagsCollection.find({name:name}).toArray();
    return NextResponse.json({ success: true, data: tagsData });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
  }
}