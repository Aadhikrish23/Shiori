import { classifyEmailsBatch } from "../services/aiService";
import { Email } from "../types/email";
import { ILabelConfig } from "../models/labelConfig.model";
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

interface JobParams {
  userId: string;
}

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

export const processEmailsJob = async ({ userId }: JobParams) => {
  console.log(`🚀 Processing emails for user: ${userId}`);

  try {
    const emails: Email[] = await getEmails(userId);
    const labels: ILabelConfig[] = await getAllLabels();

    console.log("📨 Total emails:", emails.length);

    if (!labels.length) {
      console.log("⚠️ No labels configured");
      return;
    }

    const gmailLabelMap = new Map<string, string>();

    for (const label of labels) {
      const labelName = `AI/${label.name}`;
      const labelId = await getOrCreateLabel(userId, labelName);

      if (labelId) {
        gmailLabelMap.set(labelName, labelId);
      }
    }

    const labelMap = new Map(
      labels.map((l) => [l.name.trim().toLowerCase(), l])
    );

    const processedChecks = await Promise.all(
      emails.map((email) => isProcessed(userId, email.id))
    );

    const unprocessedEmails = emails.filter((_, i) => !processedChecks[i]);

    console.log("🧹 Unprocessed emails:", unprocessedEmails.length);

    if (!unprocessedEmails.length) {
      console.log("📭 No new emails");
      return;
    }

    const batches = chunkArray(unprocessedEmails, 12);

    for (const batch of batches) {
      console.log(`📦 Batch size: ${batch.length}`);
      console.log("🤖 Calling AI service...");

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

      console.log("🤖 AI response received");

      for (const aiResult of aiResults) {
        const email = batch.find((e) => e.id === aiResult.id);
        if (!email) continue;

        const cleanLabel = normalizeLabel(aiResult.label);
        let matchedLabel = labelMap.get(cleanLabel);

        if (!matchedLabel) {
          console.log("⚠️ Unknown label from AI:", aiResult.label);
          matchedLabel = labelMap.get("promotions");
          if (!matchedLabel) continue;
        }

        const labelName = `AI/${matchedLabel.name}`;
        const labelId = gmailLabelMap.get(labelName);

        if (!labelId) {
          console.log("❌ Label ID missing:", labelName);
          continue;
        }

        await applyLabel(userId, email.id, labelId);

        if (aiResult.important) {
          await starEmail(userId, email.id);
        } else {
          if (["Promotions", "Spam", "Updates"].includes(matchedLabel.name)) {
            await archiveEmail(userId, email.id);
          }
        }

        await markAsProcessed(userId, email.id, matchedLabel.name);

        console.log(`✅ Done: ${labelName}`);
      }
    }
  } catch (err: any) {
    console.error("❌ JOB ERROR:", err.message);
    throw err; // 🔥 VERY IMPORTANT (enables retry)
  }
};