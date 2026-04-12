import dotenv from "dotenv";
dotenv.config();

// export const config = {
//   gmailClientId: process.env.GMAIL_CLIENT_ID!,
//   gmailClientSecret: process.env.GMAIL_CLIENT_SECRET!,
//   gmailRedirectUri: process.env.GMAIL_REDIRECT_URI!,
// };

export const config = {
  gmailClientId: process.env.GOOGLE_CLIENT_ID!,
  gmailClientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  gmailRedirectUri: process.env.GOOGLE_REDIRECT_URI!,
};