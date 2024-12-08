import dbConnect, { ConnectionObject } from '@/lib/dbConnect';
import axios from 'axios';
import { Collection } from 'mongodb';
import { NextResponse } from 'next/server';
export async function GET(req: Request) {
  try {
    const connection: ConnectionObject = await dbConnect();  // Just need to ensure connection is established
    const db = connection.db!;
    const articlesCollection = db.collection("Articles_v2");
    const articlesData = await articlesCollection.find({}).toArray();
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
interface Breadcrumb {
  level: string;
  text: string;
  link: string | null;
}
interface Article {
  Image_URL: string;
  URL: string;
  author_id: string;
  breadcrumbs: Breadcrumb[];
  content: string;
  created_at: Date;
  tags: string[];
  thumbnail: string;
  title: string;
  updated_at: Date;
  views: number;
}
export async function POST(req: Request) {
  try {
    const articleData = await req.json();
    const requiredFields = ['title', 'content', 'author_id', 'URL'];
    const missingFields = requiredFields.filter(field => !articleData[field]);
    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: `Missing required fields: ${missingFields.join(', ')}`
        },
        { status: 400 }
      );
    }
    // Establish database connection
    const connection: ConnectionObject = await dbConnect();
    if (!connection.db) {
      throw new Error('Database connection failed');
    }
    // Get the articles collection
    const articlesCollection = connection.db.collection('Articles_v2');
    // Check if article with same URL already exists
    const existingArticle = await articlesCollection.findOne({ URL: articleData.URL });
    if (existingArticle) {
      return NextResponse.json(
        {
          success: false,
          error: 'Article with this URL already exists'
        },
        { status: 409 }
      );
    }
    const now = new Date();
    const newArticle = {
      ...articleData,
      created_at: articleData.created_at || now,
      updated_at: articleData.updated_at || now,
      views: articleData.views || 0,
      breadcrumbs: articleData.breadcrumbs || [],
      tags: articleData.tags || [],
      Image_URL: articleData.Image_URL || articleData.thumbnail || null,
      thumbnail: articleData.thumbnail || articleData.Image_URL || null
    };
    // Insert the new article
    const result = await articlesCollection.insertOne(newArticle);
    if (!result.acknowledged) {
      throw new Error('Failed to insert article');
    }
    // Return success response with the created article
    return NextResponse.json({
      success: true,
      data: newArticle
    });
  } catch (error) {
    console.error('Error creating article:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'An unknown error occurred'
      },
      { status: 500 }
    );
  }
}
