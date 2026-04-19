interface Props {
  email: any;
}

const EmailRow = ({ email }: Props) => {
  return (
    <div className="grid grid-cols-12 gap-4 p-4 border-b hover:bg-gray-50 transition">
      
      {/* SUBJECT */}
      <div className="col-span-5">
        <p className="font-medium text-gray-900 truncate">
          {email.subject || "(No Subject)"}
        </p>
        <p className="text-xs text-gray-500 truncate">
          {email.from}
        </p>
      </div>

      {/* LABEL */}
      <div className="col-span-2">
        <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-700">
          {email.category}
        </span>
      </div>

      {/* ACTION */}
      <div className="col-span-2">
        <span className="text-xs text-gray-600 capitalize">
          {email.action}
        </span>
      </div>

      {/* CONFIDENCE */}
      <div className="col-span-2">
        <span className="text-sm font-medium">
          {(email.confidence * 100).toFixed(0)}%
        </span>
      </div>

      {/* TIME */}
      <div className="col-span-1 text-xs text-gray-400">
        {new Date(email.processedAt).toLocaleDateString()}
      </div>
    </div>
  );
};

export default EmailRow;