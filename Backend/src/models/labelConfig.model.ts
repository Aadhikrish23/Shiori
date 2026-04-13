import mongoose, { Document, Schema } from "mongoose";

export interface ILabelConfig extends Document {
  name: string;
  tags: string[];
}

const labelConfigSchema = new Schema<ILabelConfig>({
  name: { type: String, required: true, lowercase: true },
  tags: { type: [String], default: [] },
});

export const LabelConfig = mongoose.model<ILabelConfig>(
  "LabelConfig",
  labelConfigSchema
);