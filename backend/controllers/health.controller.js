/**
 * Health controller — handles HTTP for the /health endpoint.
 * Controllers: read req, call logic, send res. No business rules here yet.
 */
export const getHealth = (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "API is running",
    environment: process.env.NODE_ENV || "development",
    timestamp: new Date().toISOString(),
  });
};
