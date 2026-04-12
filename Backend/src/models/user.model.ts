import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  email: string;
  accessToken: string;
  refreshToken: string;
}

const userSchema = new mongoose.Schema<IUser>({
  email: { type: String, required: true, unique: true },
  accessToken: { type: String, required: true },
  refreshToken: { type: String, required: true },
  
});

export const User = mongoose.model<IUser>("User", userSchema);