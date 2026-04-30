import { useState } from "react";
import { useTagSuggestions } from "../hooks/useTagSuggestions";

interface Props {
  keyword: string;
  tags: string[];
  setTags: (tags: string[]) => void;
}

const TagInput = ({ keyword, tags, setTags }: Props) => {
  const [input, setInput] = useState("");
  const suggestions = useTagSuggestions(keyword);

  const isDisabled = !keyword.trim();

  const addTag = (tag: string) => {
    if (isDisabled) return;
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const addCustomTag = () => {
    if (isDisabled) return;

    const tag = input.trim().toLowerCase();
    if (!tag || tags.includes(tag)) return;

    setTags([...tags, tag]);
    setInput("");
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <div className="space-y-3">
      {/* SELECTED TAGS */}
      {tags.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <div
              key={tag}
              className="
                bg-blue-500/10 text-blue-400
                px-2 py-1 rounded-full flex items-center gap-2 text-xs
              "
            >
              {tag}
              <button
                onClick={() => removeTag(tag)}
                className="hover:text-red-400"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {/* EMPTY STATE MESSAGE */}
      {isDisabled && (
        <p className="text-xs text-[var(--muted)]">
          Enter label name to enable tags
        </p>
      )}

      {/* SUGGESTIONS (ONLY WHEN ENABLED) */}
      {!isDisabled && suggestions.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {suggestions
            .filter((tag) => !tags.includes(tag))
            .map((tag) => (
              <button
                key={tag}
                onClick={() => addTag(tag)}
                className="
                  bg-white/5 px-2 py-1 rounded-full text-xs
                  hover:bg-white/10 transition
                "
              >
                {tag}
              </button>
            ))}
        </div>
      )}

      {/* CUSTOM INPUT */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Add custom tag..."
          value={input}
          disabled={isDisabled}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addCustomTag()}
          className={`
            flex-1 px-3 py-2 rounded-lg
            bg-transparent border border-[var(--border)]
            text-[var(--text)]
            ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}
          `}
        />

        <button
          onClick={addCustomTag}
          disabled={isDisabled}
          className={`
            px-3 rounded-lg text-sm
            ${
              isDisabled
                ? "bg-gray-700 opacity-50 cursor-not-allowed"
                : "bg-gray-700 hover:bg-gray-600"
            }
            text-white
          `}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TagInput;