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

  const addTag = (tag: string) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const addCustomTag = () => {
    const tag = input.trim();

    if (!tag) return;
    if (tags.includes(tag)) return;

    setTags([...tags, tag]);
    setInput("");
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addCustomTag();
    }
  };
  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <div>
      {/* Selected tags */}
      <div className="flex gap-2 mb-3 flex-wrap">
        {tags.map((tag) => (
          <div key={tag} className="bg-blue-100 px-2 py-1 rounded flex gap-2">
            {tag}
            <button onClick={() => removeTag(tag)}>x</button>
          </div>
        ))}
      </div>

      {/* Suggestions */}
      <div className="flex gap-2 flex-wrap">
        {suggestions
          .filter((tag) => !tags.includes(tag))
          .map((tag) => (
            <button
              key={tag}
              onClick={() => addTag(tag)}
              className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
            >
              {tag}
            </button>
          ))}
      </div>
      <div className="mt-3 flex gap-2">
        <input
          type="text"
          placeholder="Add custom tag..."
          className="border p-2 flex-1 rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button
          onClick={addCustomTag}
          className="bg-gray-800 text-white px-3 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TagInput;
