import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import app from "./app.js";
import { validateEnv } from "./config/env.js";
import { connectDB } from "./config/db.js";

// Always load backend/.env (even if you run npm from project root)
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, ".env"), override: true });

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    validateEnv();
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
      console.log(`Health check: http://localhost:${PORT}/health`);
      console.log(`API health:   http://localhost:${PORT}/api/health`);
      console.log(`DB status:    http://localhost:${PORT}/api/db-status`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
