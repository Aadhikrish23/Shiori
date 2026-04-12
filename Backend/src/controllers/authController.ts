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

    res.send(`✅ Logged in as ${user.email}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("OAuth failed");
  }
};