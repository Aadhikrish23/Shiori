import { Request, Response } from "express";
import { getTagSuggestions } from "../services/tag.service";

export const getSuggestions = async (req: Request, res: Response) => {
  try {
    const { keyword } = req.query;

    if (!keyword) {
      return res.status(400).json({ message: "Keyword required" });
    }

    const tags = await getTagSuggestions(keyword as string);

    res.json({ tags });
  } catch (err) {
    res.status(500).json({ message: "Error fetching suggestions" });
  }
};