import dbConnect, { ConnectionObject } from '@/lib/dbConnect';
import { NextResponse } from 'next/server';

export async function GET(req: Request, context: any) {
  try {
    const { category } =  await context.params;
    if (!category) {
      return NextResponse.json({
        success: false,
        error: "Category is required"
      }, { status: 400 });
    }

    

    // Get pagination params if any
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    const limitParam = url.searchParams.get('limit');
    console.log(category);
    // First, get the category ID
    const connection: ConnectionObject = await dbConnect();
      const db = connection.db!;
      const categoriesCollection = db.collection("Categories_v2");
    const categoryDoc = await categoriesCollection.find(
      { secondary_category: category }
       // Only get _id field for efficiency
    ).toArray();
    
    
    if (!categoryDoc) {
      return NextResponse.json({
        success: false,
        error: "Category not found"
      }, { status: 404 });
    }
    // Prepare base pipeline for articles
   
    
    // Set cache headers
    const headers = new Headers({
      'Cache-Control': 'public, max-age=60'
    });

    return NextResponse.json({
      success: true,
      data: categoryDoc,
    }, { headers });

  } catch (error) {
    console.error("Error fetching articles by category:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch Categories"
    }, { status: 500 });
  }
}