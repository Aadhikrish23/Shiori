interface Props {
  id: string;
  name: string;
  tags: string[];
  onDelete: () => void;
   onEdit: () => void;
}

const LabelCard = ({ name, tags, onDelete ,onEdit}: Props) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-bold">{name.charAt(0).toUpperCase()+name.slice(1)}</h3>

      <div className="flex gap-2 mt-2 flex-wrap">
        {tags.map((tag) => (
          <span key={tag} className="bg-gray-200 px-2 py-1 rounded text-sm">
            {tag}
          </span>
        ))}
      </div>

      <button onClick={onDelete} className="text-red-500 mt-3">
        Delete
      </button>
      <button onClick={onEdit} className="text-blue-600 mr-4">
        Edit
      </button>
    </div>
  );
};

export default LabelCard;
