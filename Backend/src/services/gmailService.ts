import { google } from "googleapis";
import { config } from "../config";

import { User } from "../models/user.model";
import { decrypt } from "../utils/crypto";
import mongoose from "mongoose";

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
}

// ==============================
// 📥 ARCHIVE EMAIL
// ==============================
export async function archiveEmail(
  userId: mongoose.Schema.Types.ObjectId,
  messageId: string,
) {
  const gmail = await getGmailClient(userId);

  await gmail.users.messages.modify({
    userId: "me",
    id: messageId,
    requestBody: {
      removeLabelIds: ["INBOX"],
    },
  });
}

export async function getEmailsByTimeRange(
  userId: mongoose.Schema.Types.ObjectId,
  start: Date,
  end: Date,
) {
  const gmail = await getGmailClient(userId);

  const after = Math.floor(start.getTime() / 1000);
  const before = Math.floor(end.getTime() / 1000);

  const res = await gmail.users.messages.list({
    userId: "me",
    q: `after:${after} before:${before}`,
    maxResults: 100, // still safe
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

    emails.push({
      id: msg.id!,
      subject,
      sender: from,
      snippet: full.data.snippet || "",
    });
  }

  return emails;
}
