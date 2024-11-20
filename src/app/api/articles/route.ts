import dbConnect, { ConnectionObject } from '@/lib/dbConnect';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const connection:ConnectionObject = await dbConnect();  // Just need to ensure connection is established
    const db = connection.db!;
    // Use Mongoose model directly
    const articlesCollection = db.collection("Articles");
    const articlesData = await articlesCollection.find({}).toArray();
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