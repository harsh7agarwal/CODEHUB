import { Router } from "express";
import { getHealth } from "../controllers/health.controller.js";
import { getDbStatus } from "../controllers/db.controller.js";

const router = Router();

router.get("/health", getHealth);
router.get("/db-status", getDbStatus);

export default router;
