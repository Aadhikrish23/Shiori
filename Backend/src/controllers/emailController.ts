import { Request, Response, NextFunction } from "express";
import { classifyEmailsBatch } from "../services/aiService";
import {
  applyLabel,
  archiveEmail,
  getEmails,
  getOrCreateLabel,
  starEmail,
} from "../services/gmailService";
import { getAllLabels } from "../repositories/labelConfigRepo";
import {
  isProcessed,
  markAsProcessed,
} from "../repositories/processedEmailRepo";

function normalizeLabel(label: string) {
  return label.trim().toLowerCase();
}

function chunkArray<T>(arr: T[], size: number): T[][] {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

export async function processEmails(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    console.log("🚀 Processing emails...");

    const emails = await getEmails();
    const labels = await getAllLabels();

    if (!labels.length) {
      return res.status(400).json({
        message: "No labels configured",
      });
    }

    // ==============================
    // 🔥 PRELOAD GMAIL LABELS (FIXED)
    // ==============================
    const gmailLabelMap = new Map<string, string>();

    for (const label of labels) {
      const labelName = `AI/${label.name}`;

      const labelId = await getOrCreateLabel(labelName);

      if (labelId) {
        gmailLabelMap.set(labelName, labelId);
      } else {
        console.error("❌ Failed to preload label:", labelName);
      }
    }

    // ==============================
    // 🔥 BUILD LABEL MAP (FAST LOOKUP)
    // ==============================
    const labelMap = new Map(
      labels.map((l) => [l.name.trim().toLowerCase(), l])
    );

    // ==============================
    // 🔥 FILTER UNPROCESSED EMAILS (PARALLEL)
    // ==============================
    const processedChecks = await Promise.all(
      emails.map((email) => isProcessed(email.id))
    );

    const unprocessedEmails = emails.filter((_, i) => !processedChecks[i]);

    if (unprocessedEmails.length === 0) {
      return res.json({
        message: "No new emails to process",
      });
    }

    const results: any[] = [];
    const batches = chunkArray(unprocessedEmails, 12);

    for (const batch of batches) {
      console.log("📦 Processing batch:", batch.length);

      const aiResults = await classifyEmailsBatch({
        emails: batch.map((email) => ({
          id: email.id,
          subject: email.subject,
          sender: email.sender,
          body: email.snippet,
        })),
        labels: labels.map((l) => ({
          name: l.name,
          description: l.description,
        })),
      });

      for (const aiResult of aiResults) {
        const email = batch.find((e) => e.id === aiResult.id);
        if (!email) continue;

        const cleanLabel = normalizeLabel(aiResult.label);
        let matchedLabel = labelMap.get(cleanLabel);

        // 🔥 FALLBACK
        if (!matchedLabel) {
          console.log("❌ Unknown label:", aiResult.label);
          matchedLabel = labelMap.get("promotions");
          if (!matchedLabel) continue;
        }

        const labelName = `AI/${matchedLabel.name}`;
        const labelId = gmailLabelMap.get(labelName);

        if (!labelId) {
          console.error("❌ labelId not found for:", labelName);
          continue;
        }

        await applyLabel(email.id as string, labelId);

        // ⭐ AUTO ACTIONS
        if (aiResult.important === true) {
          await starEmail(email.id as string);
        } else {
          const safeToArchive = ["Promotions", "Spam", "Updates"];

          if (safeToArchive.includes(matchedLabel.name)) {
            await archiveEmail(email.id as string);
            console.log("📥 Archived email");
          }
        }

        await markAsProcessed(email.id, matchedLabel.name);

        console.log("✅ Done:", labelName);

        results.push({
          ...email,
          ai: {
            ...aiResult,
            label: matchedLabel.name,
          },
        });
      }
    }

    res.json({
      processed: results.length,
      total: emails.length,
      skipped: emails.length - unprocessedEmails.length,
      results,
    });
  } catch (err) {
    next(err);
  }
}