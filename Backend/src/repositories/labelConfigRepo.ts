import { LabelConfig, ILabelConfig } from "../models/labelConfig.model";
import { TagLibrary } from "../models/tagLibrary.model";

// 🔹 Get all labels (USER SCOPED)
export const getAllLabels = async (
  userId: string
): Promise<ILabelConfig[]> => {
  return await LabelConfig.find({ userId });
};

// 🔹 Create label
export const createLabel = async (
  userId: string,
  name: string,
  tags: string[],
  description: string
): Promise<ILabelConfig> => {
  const label = await LabelConfig.create({
    userId,
    name: name.toLowerCase(),
    tags: tags.map((t) => t.toLowerCase()),
    description
  });

  await updateTagLibrary(name, tags);

  return label;
};

// 🔹 Update label
export const updateLabel = async (
  userId: string,
  id: string,
  name: string,
  tags: string[],
   description: string
): Promise<ILabelConfig | null> => {
  const label = await LabelConfig.findOneAndUpdate(
    { _id: id, userId },
    {
      name: name.toLowerCase(),
      tags: tags.map((t) => t.toLowerCase()),
       description
    },
    { new: true }
  );

  if (label) {
    await updateTagLibrary(name, tags);
  }

  return label;
};

// 🔹 Delete label
export const deleteLabel = async (userId: string, id: string) => {
  return await LabelConfig.findOneAndDelete({ _id: id, userId });
};

// 🔥 Tag Library Updater (NO CHANGE)
const updateTagLibrary = async (keyword: string, tags: string[]) => {
  const normalizedKeyword = keyword.toLowerCase();

  let doc = await TagLibrary.findOne({ keyword: normalizedKeyword });

  if (!doc) {
    await TagLibrary.create({
      keyword: normalizedKeyword,
      tags: tags.map((t) => ({ tag: t.toLowerCase(), count: 1 })),
      usageCount: 1,
    });
    return;
  }

  const tagMap = new Map(doc.tags.map((t) => [t.tag, t]));

  tags.forEach((tag) => {
    const normalizedTag = tag.toLowerCase();

    if (tagMap.has(normalizedTag)) {
      tagMap.get(normalizedTag)!.count += 1;
    } else {
      doc.tags.push({ tag: normalizedTag, count: 1 });
    }
  });

  doc.usageCount += 1;

  await doc.save();
};