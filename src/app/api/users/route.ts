// pages/api/users/index.ts
import dbConnect, { ConnectionObject } from '@/lib/dbConnect';
import User from '@/lib/models/User';
import axios from 'axios';
import { Collection } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
export const config = {
  api: {
    bodyParser: true
  },
  maxDuration: 5,
}
type Data = {
  success: boolean;
  data?: any;
  error?: string;
};
export async function GET(req: Request) {
  try {
    const connection: ConnectionObject = await dbConnect();  // Just need to ensure connection is established
    const db = connection.db!;
    const usersCollection = db.collection("Users");
    const users = await usersCollection.find({}).toArray();
    return NextResponse.json({ success: true, data: users });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message });
  }
};
export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();
    const aws_base_url = process.env.AWS_BASE_URL;
    const response = await axios.post(
      `${aws_base_url}/add_user`,
      {
        full_name: name,
        email: email,
      },
      {
        timeout: 5000, // 5 second timeout
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return NextResponse.json({ success: true, data: response.data });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message });
  }
}
interface User {
  _id?: string;
  user_id: string;
  about: string;
  article_ids: string[];
  city: string;
  council_registration_name: string;
  council_registration_number: string;
  country: string;
  designation: string;
  dont_remember: boolean;
  email: string;
  full_name: string;
  license_pending_verification: boolean;
  organization: string;
  password: string;
  phone_number: string;
  privacy_policy_accepted: boolean;
  registration_date: Date;
  specialisation: string;
  state: string;
  terms_accepted: boolean;
  work_category: string;
}
export async function PUT(req: Request) {
  try {
    // Parse the request body
    const userData = await req.json();
    // Validate required fields
    if (!userData.email || !userData.full_name) {
      return NextResponse.json(
        {
          success: false,
          error: 'Email and full name are required'
        },
        { status: 400 }
      );
    }
    // Establish database connection
    const connection: ConnectionObject = await dbConnect();
    if (!connection.db) {
      throw new Error('Database connection failed');
    }
    // Get the users collection
    const usersCollection: Collection<User> = connection.db.collection('Users');
    // Prepare update data with defaults
    const updateData = {
      ...userData,
      article_ids: userData.article_ids || [],
      about: userData.about || 'To do',
      council_registration_name: userData.council_registration_name || 'N/A',
      council_registration_number: userData.council_registration_number || 'N/A',
      dont_remember: userData.dont_remember || false,
      license_pending_verification: userData.license_pending_verification || false,
      privacy_policy_accepted: userData.privacy_policy_accepted || false,
      terms_accepted: userData.terms_accepted || false
    };
    // If registration_date is not set, set it now
    if (!updateData.registration_date) {
      updateData.registration_date = new Date();
    }
    // Generate user_id if not exists
    if (!updateData.user_id) {
      updateData.user_id = crypto
        .createHash('sha256')
        .update(updateData.email + Date.now().toString())
        .digest('hex');
    }
    // Perform upsert operation
    const result = await usersCollection.findOneAndUpdate(
      { email: userData.email },
      {
        $set: updateData,
      },
      {
        upsert: true,
        returnDocument: 'after'
      }
    );
    if (!result) {
      throw new Error('Failed to update/create user');
    }
    // Return success response
    return NextResponse.json({
      success: true,
      data: result
    });
  } catch (error) {
    console.error('Error updating/creating user:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'An unknown error occurred'
      },
      { status: 500 }
    );
  }
}
export async function DELETE(req: Request) {
  try {
    await dbConnect();
    const user = await User.deleteMany({});
    return NextResponse.json({ success: true, data: user });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message });
  }
};
