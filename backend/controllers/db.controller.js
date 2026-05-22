import mongoose from "mongoose";

/**
 * Reports MongoDB connection state (for learning / debugging).
 */
export const getDbStatus = async (req, res) => {
  const state = mongoose.connection.readyState;

  const states = {
    0: "disconnected",
    1: "connected",
    2: "connecting",
    3: "disconnecting",
  };

  const collections = await mongoose.connection.db.listCollections().toArray();

  res.status(200).json({
    database: mongoose.connection.name || null,
    host: mongoose.connection.host || null,
    status: states[state] || "unknown",
    readyState: state,
    collections: collections,
  });
};