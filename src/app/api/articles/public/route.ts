import dbConnect, { ConnectionObject } from '@/lib/dbConnect';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    try {
      const url = new URL(req.url);
      const page = parseInt(url.searchParams.get('page') || '1');
      const limit = parseInt(url.searchParams.get('limit') || '10');
      const fields = url.searchParams.get('fields');
  
      const connection: ConnectionObject = await dbConnect();
      const db = connection.db!;
      const articlesCollection = db.collection("Articles_v2");
  
      // Create index for Public field if not exists
      await articlesCollection.createIndex({ Public: 1, created_at: -1 }, { background: true });
  
      // Create projection for selected fields
      let projection:any = {};
      if (fields) {
        fields.split(',').forEach(field => {
          projection[field.trim()] = 1;
        });
      }
  
      // Use aggregation pipeline for better performance
      const pipeline = [
        { $match: { Public: true } },
        { $sort: { created_at: -1 } }, // Sort by newest first
        { $skip: (page - 1) * limit },
        { $limit: limit }
      ];
  
    //   if (Object.keys(projection).length > 0) {
    //     pipeline.push({ $project: projection });
    //   }
  
      // Parallel execution of count and data fetch
      const [articlesData, totalCount] = await Promise.all([
        articlesCollection.aggregate(pipeline).toArray(),
        articlesCollection.countDocuments({ Public: true })
      ]);
  
      // Set cache headers
      const headers = new Headers({
        'Cache-Control': 'public, max-age=60, stale-while-revalidate=30'
      });
  
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