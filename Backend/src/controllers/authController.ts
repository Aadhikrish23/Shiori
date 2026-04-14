import { Request, Response } from "express";
import {
  getGoogleAuthUrl,
  handleGoogleCallback,
} from "../services/authService";

export const googleLogin = (req: Request, res: Response) => {
  const url = getGoogleAuthUrl();
  res.redirect(url);
};

export const googleCallback = async (req: Request, res: Response) => {
  try {
    const code = req.query.code as string;

    if (!code) {
      return res.status(400).send("No code provided");
    }

    const user = await handleGoogleCallback(code);

    (req as any).session.user = {
      id: user._id,
      email: user.email,
    };
    console.log("USER:",user);

    res.redirect("http://localhost:5173/dashboard");
  } catch (err) {
    console.error(err);
    res.status(500).send("OAuth failed");
  }
};
export const getMe = (req: any, res: Response) => {
  if (!req.session || !req.session.user) {
    return res.status(401).json({ user: null });
  }

  res.json({ user: req.session.user });
};