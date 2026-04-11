import fs from "fs";
import path from "path";
import readline from "readline";
import { google } from "googleapis";
import { config } from "../config";

const SCOPES = ["https://www.googleapis.com/auth/gmail.modify"];
const TOKEN_PATH = path.join(__dirname, "../storage/token.json");

let gmailClient: any = null;
const labelCache: Record<string, string> = {};

// ==============================
// 🔐 AUTHORIZATION
// ==============================
async function authorize() {
  const oAuth2Client = new google.auth.OAuth2(
    config.gmailClientId,
    config.gmailClientSecret,
    config.gmailRedirectUri
  );

  // ✅ Load existing token
  if (fs.existsSync(TOKEN_PATH)) {
    const token = JSON.parse(fs.readFileSync(TOKEN_PATH, "utf-8"));
    oAuth2Client.setCredentials(token);

    // 🔄 Auto-save refreshed tokens
    oAuth2Client.on("tokens", (tokens) => {
      const updated = {
        ...oAuth2Client.credentials,
        ...tokens,
      };
      fs.writeFileSync(TOKEN_PATH, JSON.stringify(updated, null, 2));
    });

    return oAuth2Client;
  }

  // 🆕 First-time authentication
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });

  console.log("🔐 Authorize this app:", authUrl);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const code: string = await new Promise((resolve) => {
    rl.question("Enter code: ", (code) => {
      rl.close();
      resolve(code);
    });
  });

  const { tokens } = await oAuth2Client.getToken(code);
  oAuth2Client.setCredentials(tokens);

  fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens, null, 2));

  return oAuth2Client;
}

// ==============================
// 📬 GET GMAIL CLIENT
// ==============================
export async function getGmailClient() {
  if (gmailClient) return gmailClient;

  const auth = await authorize();
  gmailClient = google.gmail({ version: "v1", auth });

  return gmailClient;
}

// ==============================
// 📥 FETCH EMAILS
// ==============================
export async function getEmails() {
  const gmail = await getGmailClient();

  const res = await gmail.users.messages.list({
    userId: "me",
    maxResults: 10,
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
      headers?.find((h:any) => h.name === "Subject")?.value || "";

    const from =
      headers?.find((h:any) => h.name === "From")?.value || "";

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
export async function getOrCreateLabel(labelName: string) {
  if (labelCache[labelName]) {
    return labelCache[labelName];
  }

  const gmail = await getGmailClient();

  const res = await gmail.users.labels.list({
    userId: "me",
  });

  let label = res.data.labels?.find((l: any) => l.name === labelName);

  if (!label) {
    const newLabel = await gmail.users.labels.create({
      userId: "me",
      requestBody: {
        name: labelName,
        labelListVisibility: "labelShow",
        messageListVisibility: "show",
      },
    });

    label = newLabel.data;
  }

  labelCache[labelName] = label.id!;
  return label.id!;
}

// ==============================
// 🏷️ APPLY LABEL
// ==============================
export async function applyLabel(messageId: string, labelId: string) {
  const gmail = await getGmailClient();

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
export async function starEmail(messageId: string) {
  const gmail = await getGmailClient();

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
export async function archiveEmail(messageId: string) {
  const gmail = await getGmailClient();

  await gmail.users.messages.modify({
    userId: "me",
    id: messageId,
    requestBody: {
      removeLabelIds: ["INBOX"],
    },
  });
}