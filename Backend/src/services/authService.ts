import { google } from "googleapis";
import { config } from "../config";
import { User } from "../models/user.model";
import { encrypt } from "../utils/crypto";

const oAuth2Client = new google.auth.OAuth2(
  config.gmailClientId,
  config.gmailClientSecret,
  config.gmailRedirectUri,
);

export const getGoogleAuthUrl = () => {
  return oAuth2Client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    include_granted_scopes: false,
    scope: [
      "https://www.googleapis.com/auth/gmail.modify",
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ],
  });
};

export const handleGoogleCallback = async (code: string) => {
  const { tokens } = await oAuth2Client.getToken(code);
  oAuth2Client.setCredentials(tokens);
  const tokenInfo = await oAuth2Client.getTokenInfo(tokens.access_token!);
console.log("SCOPES:", tokenInfo.scopes);

  // 🔥 get user email
  const oauth2 = google.oauth2({
    auth: oAuth2Client,
    version: "v2",
  });

  const userInfo = await oauth2.userinfo.get();
  const email = userInfo.data.email!;

  let user = await User.findOne({ email });

  if (!user) {
    user = await User.create({
      email,
      accessToken: encrypt(tokens.access_token!),
      refreshToken: encrypt(tokens.refresh_token!),
    });
  } else {
    user.accessToken = encrypt(tokens.access_token!);

    if (tokens.refresh_token) {
      user.refreshToken = encrypt(tokens.refresh_token);
    }
    await user.save();
  }

  return user;
};
