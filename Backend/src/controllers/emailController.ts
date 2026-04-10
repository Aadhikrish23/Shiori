import { Request, Response, NextFunction } from "express";
import { classifyEmail } from "../services/aiService";
import { applyLabel, getEmails, getOrCreateLabel } from "../services/gmailService";

export async function classify(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const result = await classifyEmail(req.body);
    res.json(result);
  } catch (err) {
    next(err);
  }
}



export async function fetchEmails(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const emails = await getEmails();
    res.json(emails);
  } catch (err) {
    next(err);
  }
}



function normalizeCategory(category: string) {
  const map: any = {
    Jobs: "Work",
    Job: "Work",
  };

  return map[category] || category;
}

export async function processEmails(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const emails = await getEmails();
    const results = [];

    for (const email of emails) {
      const aiResult = await classifyEmail({
        subject: email.subject,
        sender: email.sender,
        body: email.snippet,
      });

      const category = normalizeCategory(aiResult.category);
      const labelName = `AI/${category}`;

      // 🔥 Create/Get label
      const labelId = await getOrCreateLabel(labelName);

      // 🔥 Apply label to email
      await applyLabel(email.id as string, labelId);

      results.push({
        ...email,
        ai: {
          ...aiResult,
          category,
        },
      });
    }

    res.json(results);
  } catch (err) {
    next(err);
  }
}
