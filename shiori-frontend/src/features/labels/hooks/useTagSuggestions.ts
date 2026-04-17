import { useEffect, useState } from "react";
import { getTagSuggestions } from "../../../services/tagService";

export const useTagSuggestions = (keyword: string) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    if (!keyword) return;

    const fetch = async () => {
      const data = await getTagSuggestions(keyword);
      setSuggestions(data);
    };

    fetch();
  }, [keyword]);

  return suggestions;
};