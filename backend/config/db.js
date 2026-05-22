import mongoose from "mongoose";

/**
 * Hide password in URI when logging (security).
 */
const maskUri = (uri) => {
  return uri.replace(/:([^@]+)@/, ":****@");
};

/**
 * Connects to MongoDB using Mongoose.
 */
export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  console.log(`Connecting to: ${maskUri(uri)}`);

  const conn = await mongoose.connect(uri);

  console.log(`MongoDB connected: ${conn.connection.host}`);
  console.log(`Database name: ${conn.connection.name}`);
};
