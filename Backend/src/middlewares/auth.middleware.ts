import { RequestHandler } from "express";
import mongoose from "mongoose";
import { AuthRequest } from "../types/express";

export const requireAuth: RequestHandler = (req: any, res, next) => {
  try {
    const sessionUser = (req.session as any)?.user;

    if (!sessionUser || !sessionUser.id) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // 🔥 Convert string → ObjectId ONCE
    req.user = {
      id: new mongoose.Types.ObjectId(sessionUser.id),
      email: sessionUser.email,
      plan: sessionUser.plan || "free",
      
    };

    next();
  } catch (err) {
    console.error("attachUser error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
