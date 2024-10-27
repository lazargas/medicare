import { MongoClient, ServerApiVersion } from "mongodb";


var uri = process.env.MONGODB_URI!;
export const client:MongoClient = new MongoClient(uri, {
  
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
