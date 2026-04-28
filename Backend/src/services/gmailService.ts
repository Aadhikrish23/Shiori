import { google } from "googleapis";
import { config } from "../config";
import { gmail_v1 } from "googleapis";

import { User } from "../models/user.model";
import { decrypt } from "../utils/crypto";
import mongoose from "mongoose";
import { createReportFile, appendToReport } from "../utils/reportLogger";
import { Email } from "../types/email";
import { ProcessedEmail } from "../models/processedEmail.model";

export async function getGmailClient(userId: mongoose.Schema.Types.ObjectId) {
  const user = await User.findById(userId);

  if (!user) {
    throw new Error("User not found");
  }

  const oAuth2Client = new google.auth.OAuth2(
    config.gmailClientId,
    config.gmailClientSecret,
    config.gmailRedirectUri,
  );

  oAuth2Client.setCredentials({
    access_token: decrypt(user.accessToken),
    refresh_token: decrypt(user.refreshToken),
  });

  return google.gmail({ version: "v1", auth: oAuth2Client });
}

// ==============================
// 📥 FETCH EMAILS
// ==============================
export async function getEmails(userId: mongoose.Schema.Types.ObjectId) {
  const gmail = await getGmailClient(userId);

  const res = await gmail.users.messages.list({
    userId: "me",
    maxResults: 24,
  });

  const messages = res.data.messages || [];
  const emails = [];

  for (const msg of messages) {
    const full = await gmail.users.messages.get({
      userId: "me",
      id: msg.id!,
    });

    const headers = full.data.payload?.headers;

    const subject =
      headers?.find((h: any) => h.name === "Subject")?.value || "";

    const from = headers?.find((h: any) => h.name === "From")?.value || "";

    // ⚠️ body parsing can be improved later
    emails.push({
      id: msg.id!,
      subject,
      sender: from,
      snippet: full.data.snippet || "",
    });
  }

  return emails;
}

// ==============================
// 🏷️ GET OR CREATE LABEL
// ==============================
export const getOrCreateLabel = async (
  userId: any,
  labelName: string,
): Promise<string | null> => {
  const gmail = await getGmailClient(userId);

  // 🔹 Step 1: Get all labels
  const res = await gmail.users.labels.list({
    userId: "me",
  });

  const existingLabels = res.data.labels || [];

  // 🔹 Step 2: Check if label exists
  const found = existingLabels.find(
    (l) => l.name?.toLowerCase() === labelName.toLowerCase(),
  );

  if (found) {
    return found.id!;
  }

  // 🔹 Step 3: Create if not exists
  try {
    const created = await gmail.users.labels.create({
      userId: "me",
      requestBody: {
        name: labelName,
        labelListVisibility: "labelShow",
        messageListVisibility: "show",
      },
    });

    return created.data.id!;
  } catch (err: any) {
    // 🔥 Fallback (race condition protection)
    if (err.code === 409) {
      const retry = await gmail.users.labels.list({
        userId: "me",
      });

      const retryFound = retry.data.labels?.find(
        (l) => l.name?.toLowerCase() === labelName.toLowerCase(),
      );

      return retryFound?.id || null;
    }

    throw err;
  }
};

// ==============================
// 🏷️ APPLY LABEL
// ==============================
export async function applyLabel(
  userId: mongoose.Schema.Types.ObjectId,
  messageId: string,
  labelId: string,
) {
  const gmail = await getGmailClient(userId);

  await gmail.users.messages.modify({
    userId: "me",
    id: messageId,
    requestBody: {
      addLabelIds: [labelId],
    },
  });
}

// ==============================
// ⭐ STAR EMAIL
// ==============================
export async function starEmail(
  userId: mongoose.Schema.Types.ObjectId,
  messageId: string,
) {
  const gmail = await getGmailClient(userId);

  await gmail.users.messages.modify({
    userId: "me",
    id: messageId,
    requestBody: {
      addLabelIds: ["STARRED"],
    },
  });
  await ProcessedEmail.updateOne(
    { userId, messageId },
    { $set: { isImportant: true } },
  );
}

// ==============================
// 📥 ARCHIVE EMAIL
// ==============================
export async function archiveEmail(
  userId: mongoose.Schema.Types.ObjectId,
  messageId: string,
) {
  const gmail = await getGmailClient(userId);
  const message = await gmail.users.messages.get({
    userId: "me",
    id: messageId,
  });

  const currentLabels = message.data.labelIds || [];

  await ProcessedEmail.updateOne(
    { userId, messageId },
    { $set: { isArchived: true, originalLabels: currentLabels } },
    { upsert: true },
  );

  await gmail.users.messages.modify({
    userId: "me",
    id: messageId,
    requestBody: {
      removeLabelIds: ["INBOX", "CATEGORY_PERSONAL", "CATEGORY_UPDATES"],
    },
  });
  await unStarEmail(userId,messageId)
}

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export async function getEmailsByTimeRange(
  userId: mongoose.Schema.Types.ObjectId,
  start: Date,
  end: Date,
  traceId: string,
) {
  const gmail = await getGmailClient(userId);

  const after = Math.floor(start.getTime() / 1000);
  const before = Math.floor(end.getTime() / 1000);

  let allMessages: gmail_v1.Schema$Message[] = [];
  let nextPageToken: string | undefined = undefined;
  let apiCalls = 0;

  let response: gmail_v1.Schema$ListMessagesResponse;
  console.log("📡 GMAIL QUERY", {
    traceId,
    after,
    before,
  });
  // ==============================
  // 📥 FETCH MESSAGE IDS
  // ==============================
  do {
    const res = await gmail.users.messages.list({
      userId: "me",
      q: `after:${after} before:${before}`,
      maxResults: 100,
      pageToken: nextPageToken,
    });

    apiCalls++;

    response = res.data;
    const messages = response.messages || [];
    console.log("📄 PAGE FETCHED", {
      traceId,
      count: messages.length,
      nextPageToken,
    });

    allMessages.push(...messages);
    nextPageToken = response.nextPageToken || undefined;
  } while (nextPageToken);
  console.log("📬 TOTAL IDS", {
    traceId,
    totalMessages: allMessages.length,
  });

  // ==============================
  // ⚡ FETCH FULL EMAILS (BATCHED)
  // ==============================
  const emails = [];
  let processed = 0;

  const BATCH_SIZE = 20;

  for (let i = 0; i < allMessages.length; i += BATCH_SIZE) {
    const batch = allMessages.slice(i, i + BATCH_SIZE);

    const results = await Promise.all(
      batch.map(async (msg) => {
        try {
          const full = await gmail.users.messages.get({
            userId: "me",
            id: msg.id!,
          });

          const headers = full.data.payload?.headers;

          return {
            id: msg.id!,
            subject:
              headers?.find((h: any) => h.name === "Subject")?.value || "",
            sender: headers?.find((h: any) => h.name === "From")?.value || "",
            snippet: full.data.snippet || "",
          };
        } catch (err) {
          console.error("❌ Failed to fetch message:", msg.id);
          return null; // prevent batch crash
        }
      }),
    );

    // ✅ filter failed ones
    const validEmails: Email[] = results.filter(
      (email): email is Email => email !== null,
    );
    emails.push(...validEmails);

    processed += validEmails.length;

    // 🔥 LIVE PROGRESS
    console.log(`⚡ Processed ${processed}/${allMessages.length}`);

    // 🔥 RATE LIMIT SAFETY
    await delay(100);
  }

  return emails;
}

export async function getTotalEmailCount(
  userId: mongoose.Schema.Types.ObjectId,
) {
  const gmail = await getGmailClient(userId);

  const res = await gmail.users.messages.list({
    userId: "me",
    // minimal fetch
  });
  console.log("RESULT:", res.data);

  return res.data.resultSizeEstimate || 0;
}

export async function getFullEmail(
  userId: mongoose.Schema.Types.ObjectId,
  messageId: string,
) {
  const gmail = await getGmailClient(userId);

  const res = await gmail.users.messages.get({
    userId: "me",
    id: messageId,
  });

  const payload = res.data.payload;
  const headers = payload?.headers || [];

  const subject = headers.find((h: any) => h.name === "Subject")?.value || "";

  const from = headers.find((h: any) => h.name === "From")?.value || "";

  // 🔥 extract body
  const body = extractBody(payload);

  return {
    messageId,
    subject,
    from,
    body,
    snippet: res.data.snippet || "",
  };
}
function extractBody(payload: any): string {
  if (!payload) return "";

  const getBody = (part: any): string | null => {
    if (part.body?.data) {
      return Buffer.from(part.body.data, "base64").toString("utf-8");
    }

    if (part.parts) {
      for (const p of part.parts) {
        const result = getBody(p);
        if (result) return result;
      }
    }

    return null;
  };

  return getBody(payload) || "";
}

export async function unArchiveEmail(
  userId: mongoose.Schema.Types.ObjectId,
  messageId: string,
) {
  const gmail = await getGmailClient(userId);

  const email = await ProcessedEmail.findOne({ userId, messageId });
  if (!email) {
    throw new Error("No archived record found for this message");
  }

  const labelsToRestore = [...new Set(email.originalLabels || ["INBOX"])];

  await gmail.users.messages.modify({
    userId: "me",
    id: messageId,
    requestBody: { addLabelIds: labelsToRestore },
  });

  await ProcessedEmail.updateOne(
    { userId, messageId },
    { $set: { isArchived: false } },
  );
}

export async function unStarEmail(
  userId: mongoose.Schema.Types.ObjectId,
  messageId: string,
) {
  const gmail = await getGmailClient(userId);

  await gmail.users.messages.modify({
    userId: "me",
    id: messageId,
    requestBody: {
      removeLabelIds: ["STARRED"],
    },
  });
    await ProcessedEmail.updateOne(
    { userId, messageId },
    { $set: { isImportant: false } },
  );
}
