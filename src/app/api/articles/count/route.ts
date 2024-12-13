import dbConnect, { ConnectionObject } from '@/lib/dbConnect';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const connection: ConnectionObject = await dbConnect();
    const db = connection.db!;
    const articlesCollection = db.collection("Articles_v2");
    // Query the article by `_id`
    const articlesData = await articlesCollection.find({}).toArray();
    // Handle case where no article is found
    if (!articlesData) {
      return NextResponse.json({
        success: false,
        error: "Article not found"
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: articlesData.length
    });
  } catch (error) {
    console.error("Error fetching articles data:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch articles"
    }, { status: 500 });
  }
}
