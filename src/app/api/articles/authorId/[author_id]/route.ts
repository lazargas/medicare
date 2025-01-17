import dbConnect, { ConnectionObject } from '@/lib/dbConnect';
import { NextResponse } from 'next/server';
export async function GET(req: Request, context: any) {
  try {
    const { author_id } = await context.params;
    const url = new URL(req.url);
    const fields = url.searchParams.get('fields');
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '10');
    
    // Validate input parameters
    if (!author_id) {
      return NextResponse.json({
        success: false,
        error: "Author ID is required"
      }, { status: 400 });
    }

    const connection: ConnectionObject = await dbConnect();
    const db = connection.db!;
    const articlesCollection = db.collection("Articles_v2");

    // Create projection and index
    let projection:any = {};
    if (fields) {
      const fieldArray = fields.split(',');
      fieldArray.forEach(field => {
        projection[field.trim()] = 1;
      });
    }

    // Create compound index for better query performance
    // Move this to a database setup script instead of creating on every request
    await articlesCollection.createIndex({ author_id: 1, created_at: -1 }, { background: true });

    const pipeline = [
      { $match: { author_id: author_id } },
      { $sort: { created_at: -1 } },
      { $skip: (page - 1) * limit },
      { $limit: limit }
    ];

    // Cache headers for performance
    const headers = new Headers({
      'Cache-Control': 'public, max-age=60'
    });

    const [articlesData, totalCount] = await Promise.all([
      articlesCollection.aggregate(pipeline).toArray(),
      articlesCollection.countDocuments({ author_id: author_id })
    ]);

    return NextResponse.json({
      success: true,
      data: articlesData,
      pagination: {
        total: totalCount,
        page,
        limit,
        totalPages: Math.ceil(totalCount / limit)
      }
    }, { headers });

  } catch (error) {
    console.error("Error fetching articles data:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch articles"
    }, { status: 500 });
  }
}