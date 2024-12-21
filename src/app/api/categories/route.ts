import dbConnect, { ConnectionObject } from '@/lib/dbConnect';
import { NextResponse } from 'next/server';

export async function GET(req: Request, context: any) {
  try {
    const url = new URL(req.url);
    const fields = url.searchParams.get('fields');
    const page = parseInt(url.searchParams.get('page') || '1');
    const limitParam = url.searchParams.get('limit');

    const connection: ConnectionObject = await dbConnect();
    const db = connection.db!;
    const articlesCollection = db.collection("Categories_v2");

    // Create projection for selected fields
    let projection: any = {};
    if (fields) {
      const fieldArray = fields.split(',');
      fieldArray.forEach(field => {
        projection[field.trim()] = 1;
      });
    }

    // Create compound index for better query performance
    await articlesCollection.createIndex({ created_at: -1 }, { background: true });

    // Base pipeline with sorting
    let pipeline: any[] = [
      { $sort: { created_at: -1 } }
    ];

    // Add projection if fields are specified
    if (Object.keys(projection).length > 0) {
      pipeline.push({ $project: projection });
    }

    // Add pagination only if limit is specified
    if (limitParam) {
      const limit = parseInt(limitParam);
      pipeline.push(
        { $skip: (page - 1) * limit },
        { $limit: limit }
      );
    }

    const headers = new Headers({
      'Cache-Control': 'public, max-age=60'
    });

    // Get data and total count in parallel
    const [articlesData, totalCount] = await Promise.all([
      articlesCollection.aggregate(pipeline).toArray(),
      articlesCollection.countDocuments({})
    ]);

    // Return response with pagination only if limit is specified
    return NextResponse.json({
      success: true,
      data: articlesData,
      pagination: limitParam ? {
        total: totalCount,
        page,
        limit: parseInt(limitParam),
        totalPages: Math.ceil(totalCount / parseInt(limitParam))
      } : null
    }, { headers });

  } catch (error) {
    console.error("Error fetching articles data:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch articles"
    }, { status: 500 });
  }
}