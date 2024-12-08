import dbConnect, { ConnectionObject } from '@/lib/dbConnect';
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb'; // Ensure you have mongodb installed and imported

export async function GET(req: Request, context: any) {
  try {
    const { id } = await context.params;
    const connection: ConnectionObject = await dbConnect();
    const db = connection.db!;
    const articlesCollection = db.collection("Articles_v2");
    const objectId = new ObjectId(id);
    let articlesData = await articlesCollection.findOne({_id:objectId});
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
export async function PUT(req: Request,context:any) {
  try {
    const { id } = await context.params;
    const Article = await req.json();
    const connection: ConnectionObject = await dbConnect();  // Just need to ensure connection is established
    const db = connection.db!;
    const articlesCollection = db.collection("Articles_v2");
    Article.Public = true;
    const objectId = new ObjectId(id);
    const articlesData = await articlesCollection.findOneAndUpdate( 
      { _id: objectId },
      {
        $set: Article,
      },
      {
        returnDocument: 'after'
      });
    return NextResponse.json(
      {
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