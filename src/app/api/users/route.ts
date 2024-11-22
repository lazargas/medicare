// pages/api/users/index.ts
import dbConnect, { ConnectionObject } from '@/lib/dbConnect';
import User from '@/lib/models/User';
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

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
    const { name, email} = await req.json();
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

// export async function POST(req: Request) {
//   try {
//     const connection:ConnectionObject = await dbConnect();  // Just need to ensure connection is established
//     const db = connection.db!;
//     const usersCollection = db.collection("Users");
//     const { name, email, blogs } = await req.json();
//     if (!name || !email) {
//       return NextResponse.json({ success: false, error: 'Please provide all fields' });
//     }
//     const user = await  usersCollection.insertOne({ name, email, blogs });
//     // const newUser = new User({
//     //   name: name as string,
//     //   email : email as string,
//     //   image : image ? image as string: "",
//     //   blogs : blogs ? blogs as string: ""
//     // });
//     // const user = await User.create(newUser);
//     return NextResponse.json({ success: true, data: user });
//   } catch (error) {
//     return NextResponse.json({ success: false, error: (error as Error).message });
//   }
// };


export async function DELETE(req: Request) {
  try {
    await dbConnect();
    const user = await User.deleteMany({});
    return NextResponse.json({ success: true, data: user });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message });
  }
};


