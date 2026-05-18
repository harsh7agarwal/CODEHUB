/**
 * Runs when no route matched the request URL.
 * Must be registered AFTER all routes.
 */
export const notFound = (req, res) => {
  res.status(404).json({
    success: false,
    error: "Route not found",
    path: req.originalUrl,
  });
};
