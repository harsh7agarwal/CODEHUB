import dotenv from "dotenv";
import app from "./app.js";

// Load variables from backend/.env into process.env
dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
  console.log(`API health:   http://localhost:${PORT}/api/health`);
});
