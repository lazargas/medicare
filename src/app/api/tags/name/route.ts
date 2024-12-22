import dbConnect, { ConnectionObject } from '@/lib/dbConnect';
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
export async function POST(req: Request) {
    try {
        const { tagIds } = await req.json();
        const tagIdObjects = tagIds.map((id:string) => new ObjectId(id));
        if (!tagIds || !Array.isArray(tagIds)) {
            return NextResponse.json({
                success: false,
                error: "Tag IDs array is required"
            }, { status: 400 });
        }
        const connection: ConnectionObject = await dbConnect();
        const db = connection.db!;
        const tagsCollection = db.collection("Tags_v2");
        await tagsCollection.createIndex({ "_id": 1 });
        const tags = await tagsCollection
            .find({
                _id: { $in: tagIdObjects }
            })
            .project({ _id: 1, name: 1 })
            .toArray();
        const tagMap = tags.reduce((acc, tag) => {
            acc[tag._id] = tag.name;
            return acc;
        }, {});
        const orderedTags = tagIds.map(id => ({
            _id: id,
            name: tagMap[id] || 'Unknown Tag'
        }));
        return NextResponse.json({
            success: true,
            data: orderedTags
        });
    } catch (error) {
        console.error("Error fetching tags:", error);
        return NextResponse.json({
            success: false,
            error: "Failed to fetch tags"
        }, { status: 500 });
    }
}