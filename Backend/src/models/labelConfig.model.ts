import mongoose, { Document, Schema } from "mongoose";

export interface ILabelConfig extends Document {
  userId: mongoose.Types.ObjectId;
  name: string;
  tags: string[];
  description: string;
}

const labelConfigSchema = new Schema<ILabelConfig>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    index: true,
  },
  name: { type: String, required: true, lowercase: true },
  tags: { type: [String], default: [] },
  description: { type: String, default: "" },
});

// 🔥 THIS IS THE IMPORTANT LINE
labelConfigSchema.index({ userId: 1, name: 1 }, { unique: true });

export const LabelConfig = mongoose.model<ILabelConfig>(
  "LabelConfig",
  labelConfigSchema,
);
