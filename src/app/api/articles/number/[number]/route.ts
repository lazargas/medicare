import dbConnect, { ConnectionObject } from '@/lib/dbConnect';
import { NextResponse } from 'next/server';

export async function GET(req: Request,context:any) {
  try {
    const {number} = await context.params;
    const connection: ConnectionObject = await dbConnect();  // Just need to ensure connection is established
    const db = connection.db!;
    const articlesCollection = db.collection("Articles_v2");
    const articlesData = (await articlesCollection.find({}).toArray()).slice(0,number);
    return NextResponse.json({
      success: true,
      data: articlesData
    });
  } catch (error) {
    console.error("Error fetching articles data:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch articles"
    }, { status: 500 });
  }
}
