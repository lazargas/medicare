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
      error: "Failed to fetch Categories"
    }, { status: 500 });
  }
}

interface Category {
  category_combination: string;
  main_category: string;
  secondary_category: string;
}

export async function POST(req: Request) {
  try {
    // Parse the request body
    const categoryData = await req.json();

    // Validate the request body
    if (!categoryData.main_category || !categoryData.secondary_category) {
      return NextResponse.json(
        {
          success: false,
          error: 'Both main category and secondary category are required'
        },
        {
          status: 400
        }
      );
    }

    // Create category_combination
    const category_combination = `${categoryData.main_category}::${categoryData.secondary_category}`;
    categoryData.category_combination = category_combination;

    // Establish database connection
    const connection: ConnectionObject = await dbConnect();
    if (!connection.db) {
      throw new Error('Database connection failed');
    }

    // Get the categories collection
    const categoriesCollection = connection.db.collection('Categories_v2');

    // Check if category combination already exists
    const existingCategory = await categoriesCollection.findOne({
      category_combination: category_combination
    });

    if (existingCategory) {
      return NextResponse.json(
        {
          success: false,
          error: 'Category combination already exists'
        },
        {
          status: 409 // Conflict status code
        }
      );
    }

    // Insert the new category
    const result = await categoriesCollection.insertOne(categoryData);

    // Return success response with the created category
    return NextResponse.json({
      success: true,
      data: {
        _id: result.insertedId,
        ...categoryData
      }
    });

  } catch (error) {
    console.error('Error creating category:', error);
    
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