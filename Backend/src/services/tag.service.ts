import { TagLibrary } from "../models/tagLibrary.model";

export const getTagSuggestions = async (keyword: string) => {
  const doc = await TagLibrary.findOne({
    keyword: keyword.toLowerCase(),
  });

  if (!doc) return [];

  return doc.tags
    .sort((a, b) => b.count - a.count)
    .slice(0, 8) 
    .map((t) => t.tag);
};

export const updateTagLibrary = async (
  keyword: string,
  tags: string[]
) => {
  const normalizedKeyword = keyword.toLowerCase();

  let doc = await TagLibrary.findOne({ keyword: normalizedKeyword });

  if (!doc) {
    doc = await TagLibrary.create({
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