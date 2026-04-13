import { LabelConfig, ILabelConfig } from "../models/labelConfig.model";
import { TagLibrary } from "../models/tagLibrary.model";

// 🔹 Get all labels
export const getAllLabels = async (): Promise<ILabelConfig[]> => {
  return await LabelConfig.find();
};

// 🔹 Create label
export const createLabel = async (
  name: string,
  tags: string[]
): Promise<ILabelConfig> => {
  const label = await LabelConfig.create({
    name: name.toLowerCase(),
    tags: tags.map((t) => t.toLowerCase()),
  });

  await updateTagLibrary(name, tags);

  return label;
};

// 🔹 Update label
export const updateLabel = async (
  id: string,
  name: string,
  tags: string[]
): Promise<ILabelConfig | null> => {
  const label = await LabelConfig.findByIdAndUpdate(
    id,
    {
      name: name.toLowerCase(),
      tags: tags.map((t) => t.toLowerCase()),
    },
    { new: true }
  );

  if (label) {
    await updateTagLibrary(name, tags);
  }

  return label;
};

// 🔹 Delete label
export const deleteLabel = async (id: string) => {
  return await LabelConfig.findByIdAndDelete(id);
};


// 🔥 CORE: Tag Library Updater
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