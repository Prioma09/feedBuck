import mongoose from "mongoose";

type ConnnectionObject = {
  isConnected?: number;
};

const connection: ConnnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connect to database");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});
    connection.isConnected = db.connections[0].readyState;
    console.log(db.connections);
    console.log("DB CONNECTED SUCCESSFULLLY");
  } catch (error) {
    console.log("DATABASE CONNECTION FALIED", error);
    process.exit(1);
  }
}

export default dbConnect;
