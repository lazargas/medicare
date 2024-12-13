import dbConnect, { ConnectionObject } from '@/lib/dbConnect';
import { NextResponse } from 'next/server';

export async function GET(req: Request, context: any) {
  try {
    const { title } = await context.params;
    const connection: ConnectionObject = await dbConnect();
    const db = connection.db!;
    const articlesCollection = db.collection("Articles_v2");
    let articlesData = await articlesCollection.find({title:title}).toArray();
    const articles  = await articlesCollection.find({}).toArray();
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

