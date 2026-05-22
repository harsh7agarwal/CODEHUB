import express from "express";
import cors from "cors";
import morgan from "morgan";
import apiRoutes from "./routes/index.js";
import { getHealth } from "./controllers/health.controller.js";
import { notFound } from "./middleware/notFound.middleware.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// All /api/* routes
app.use("/api", apiRoutes);

// Simple URLs (no /api prefix) — same controller
app.get("/health", getHealth);
app.get("/api/health", getHealth);

app.use(notFound);
app.use(errorHandler);

export default app;
