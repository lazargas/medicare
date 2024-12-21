import dbConnect, { ConnectionObject } from '@/lib/dbConnect';
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

export async function GET(req: Request, context: any) {
  try {
    const { category } =  await context.params;
    if (!category) {
      return NextResponse.json({
        success: false,
        error: "Category is required"
      }, { status: 400 });
    }

    const connection: ConnectionObject = await dbConnect();
    const db = connection.db!;

    // Get pagination params if any
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    const limitParam = url.searchParams.get('limit');

    // First, get the category ID
    const categoriesCollection = db.collection("Categories_v2");
    const categoryDoc = await categoriesCollection.findOne(
      { secondary_category: category },
      { projection: { _id: 1 } }  // Only get _id field for efficiency
    );
    
    if (!categoryDoc) {
      return NextResponse.json({
        success: false,
        error: "Category not found"
      }, { status: 404 });
    }
    // Prepare base pipeline for articles
    const pipeline = [
      { 
        $match: { 
           categories: { $elemMatch: { $eq: categoryDoc._id } } // Match string ID in array
        } 
      },
      { $sort: { created_at: -1 } },
    ];

    const articlesCollection = db.collection("Articles_v2");
    
    // Create index for better performance
    await articlesCollection.createIndex({ categories: 1, created_at: -1 });

    // Get data and count in parallel
    let [articles, totalCount] = await Promise.all([
      articlesCollection.aggregate(pipeline).toArray(),
      articlesCollection.countDocuments({ categories: categoryDoc._id })
    ]);
    
    // Set cache headers
    const headers = new Headers({
      'Cache-Control': 'public, max-age=60'
    });

    return NextResponse.json({
      success: true,
      data: articles,
      pagination: limitParam ? {
        total: totalCount,
        page,
        limit: parseInt(limitParam),
        totalPages: Math.ceil(totalCount / parseInt(limitParam))
      } : null
    }, { headers });

  } catch (error) {
    console.error("Error fetching articles by category:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch articles"
    }, { status: 500 });
  }
}