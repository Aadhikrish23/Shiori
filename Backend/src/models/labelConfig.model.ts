import mongoose from "mongoose";

export interface ILabelConfig extends mongoose.Document {
  name: string;
  description: string;
}

const labelConfigSchema = new mongoose.Schema<ILabelConfig>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export const LabelConfig = mongoose.model<ILabelConfig>(
  "LabelConfig",
  labelConfigSchema
);