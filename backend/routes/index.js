import { Router } from "express";
import healthRoutes from "./health.routes.js";

const router = Router();

// Mount route modules under /api prefix (versioning-ready)
router.use("/health", healthRoutes);

export default router;
