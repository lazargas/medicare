import dbConnect, { ConnectionObject } from '@/lib/dbConnect';
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb'; // Ensure you have mongodb installed and imported

export async function GET(req: Request, context: any) {
  try {
    const { id } = await context.params;
    console.log(id);

    const connection: ConnectionObject = await dbConnect();
    const db = connection.db!;
    const articlesCollection = db.collection("Articles");
    // Query the article by `_id`
    const articlesData = await articlesCollection.findOne({ _id:id });
    // Handle case where no article is found
    if (!articlesData) {
      return NextResponse.json({
        success: false,
        error: "Article not found"
      }, { status: 404 });
    }

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
