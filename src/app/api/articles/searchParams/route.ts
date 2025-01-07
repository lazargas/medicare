import dbConnect, { ConnectionObject } from '@/lib/dbConnect';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
 try {
   const url = new URL(req.url);
   
   const connection: ConnectionObject = await dbConnect();
   const db = connection.db!;
   const articlesCollection = db.collection("Articles_v2");

   // Base pipeline with match and projection
   const pipeline = [
     { $match: { Public: true } },
     { $sort: { created_at: -1 } },
     { $project: {
       _id: 1,
       title: 1,
     }}
   ];

   const [articlesData, totalCount] = await Promise.all([
     articlesCollection.aggregate(pipeline).toArray(),
     articlesCollection.countDocuments({ Public: true })
   ]);

   const headers = new Headers({
     'Cache-Control': 'public, max-age=60, stale-while-revalidate=30'
   });

   const response: any = {
     success: true,
     data: articlesData,
   };

   return NextResponse.json(response, { headers });

 } catch (error) {
   console.error("Error fetching articles data:", error);
   return NextResponse.json({
     success: false,
     error: "Failed to fetch articles"
   }, { status: 500 });
 }
}