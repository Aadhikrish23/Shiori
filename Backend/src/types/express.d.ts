import { Request } from "express";
import mongoose from "mongoose";

export interface AuthRequest extends Request {
  user?: {
    id: mongoose.Types.ObjectId;
    email?: string;
    plan?: "free" | "premium";
    
  };
}