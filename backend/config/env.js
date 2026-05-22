/**
 * Validates required environment variables at startup.
 * Fails fast — better than crashing on first DB request.
 */
const required = ["MONGODB_URI"];

export const validateEnv = () => {
  const missing = required.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(", ")}\n` +
        `Copy backend/.env.example to backend/.env and fill in values.`
    );
  }
};
