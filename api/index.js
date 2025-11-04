import { app } from "../backend/app.js";
import { connectDB } from "../backend/db/index.js";

let cachedConnection = null;

async function connectToDatabase() {
  if (cachedConnection) {
    return cachedConnection;
  }

  try {
    await connectDB();
    cachedConnection = true;
    return cachedConnection;
  } catch (error) {
    console.error("Database connection error:", error);
    throw error;
  }
}

export default async function handler(req, res) {
  // Connect to database on first request
  try {
    await connectToDatabase();
  } catch (error) {
    console.error("Database connection failed:", error);
    return res.status(500).json({ 
      success: false, 
      message: "Database connection failed",
      error: error.message 
    });
  }
  
  // Vercel routes /api/* to this handler
  // The req.url will be the path after /api (e.g., /v1/product for /api/v1/product)
  // Express routes are already set up with /api/v1/* paths, so we need to reconstruct it
  const originalUrl = req.url || '';
  
  // If the path doesn't start with /api, add it
  // This ensures Express routes match correctly
  if (!originalUrl.startsWith('/api')) {
    req.url = `/api${originalUrl}`;
  }
  
  // Handle the request with Express app
  // Express will handle the request/response cycle
  return app(req, res);
}

