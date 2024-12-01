// pages/api/tags/index.ts
import dbConnect, { ConnectionObject } from '@/lib/dbConnect';
import Tag from '@/lib/models/Tag';
import { Collection } from 'mongodb';
import { NextResponse } from 'next/server';
export async function GET(req: Request) {
  try {
    const connection: ConnectionObject = await dbConnect();  // Just need to ensure connection is established
    const db = connection.db!;
    const tagsCollection = db.collection("Tags");
    const tagsData = await tagsCollection.find().toArray();
    return NextResponse.json({
      success: true,
      data: tagsData
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
  }
}
interface Tag {
  _id: string;
  name: string;
  category: string;
}
export async function POST(req: Request) {
  try {
    // Parse the request body
    const tagData = await req.json();
    // Validate the request body
    if (!tagData.name) {
      return NextResponse.json(
        {
          success: false,
          error: 'Tag name is required'
        },
        {
          status: 400
        }
      );
    }
    // Establish database connection
    const connection: ConnectionObject = await dbConnect();
    if (!connection.db) {
      throw new Error('Database connection failed');
    }
    // Get the tags collection
    const tagsCollection: Collection<Tag> = connection.db.collection('Tags');
    // Check if tag already exists
    const existingTag = await tagsCollection.findOne({
      name: tagData.name
    });
    if (existingTag) {
      return NextResponse.json(
        {
          success: false,
          error: 'Tag already exists'
        },
        {
          status: 409 // Conflict status code
        }
      );
    }
    // Insert the new tag
    const result = await tagsCollection.insertOne(tagData);
    // Return success response with the created tag
    return NextResponse.json({
      success: true,
      data: {
        _id: result.insertedId,
        ...tagData
      }
    });
  } catch (error) {
    console.error('Error creating tag:', error);
    // Return error response
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'An unknown error occurred'
      },
      {
        status: 500
      }
    );
  }
}
export async function DELETE(req: Request) {
  try {
    await dbConnect();
    const tag = await Tag.deleteMany({});
    return NextResponse.json({ success: true, data: tag });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message });
  }
};
