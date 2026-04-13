import mongoose, { Document, Schema } from "mongoose";

interface ITag {
  tag: string;
  count: number;
}

export interface ITagLibrary extends Document {
  keyword: string;
  tags: ITag[];
  usageCount: number;
}

const TagSchema = new Schema<ITag>({
  tag: { type: String, required: true },
  count: { type: Number, default: 1 },
});

const TagLibrarySchema = new Schema<ITagLibrary>(
  {
    keyword: { type: String, required: true, lowercase: true, index: true },
    tags: { type: [TagSchema], default: [] },
    usageCount: { type: Number, default: 1 },
  },
  { timestamps: true }
);

export const TagLibrary = mongoose.model<ITagLibrary>(
  "TagLibrary",
  TagLibrarySchema
);