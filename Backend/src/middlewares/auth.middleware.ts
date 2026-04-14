import { Request, Response, NextFunction } from "express";

export const requireAuth = (req: any, res: Response, next: NextFunction) => {
  if (!req.session || !req.session.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // attach user to req
  req.user = req.session.user;

  next();
};