import mongoose from "mongoose";

interface labelConfig extends mongoose.Document{
    name:string;
    description:string
}

const labelConfigSchema = new mongoose.Schema<labelConfig>({
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

export const LabelConfig = mongoose.model(
  "LabelConfig",
  labelConfigSchema
);