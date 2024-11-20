import { Db, MongoClient } from 'mongodb';
// import mongoose from 'mongoose';

export type ConnectionObject = {
  isConnected?: number;
  db?:Db;
};

const connection: ConnectionObject = {
  
};

async function dbConnect(): Promise<ConnectionObject> {
  if (connection.db) {
    console.log('Already connected to the database');
    return connection;
  }

  try {
    const client = new MongoClient(process.env.MONGODB_URI || '');
    await client.connect();
    const db = client.db("medical_database");
    // const db = await mongoose.connect();
   // connection.isConnected = db.databaseName !== undefined;
    connection.db = db;  // Store mongoose instance instead of connection
    console.log('Database connected successfully');
    return connection;
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
}

export default dbConnect;