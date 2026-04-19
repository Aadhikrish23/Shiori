interface Props {
  pagination: any;
  onPageChange: (page: number) => void;
}

const Pagination = ({ pagination, onPageChange }: Props) => {
  if (!pagination) return null;

  return (
    <div className="flex justify-between items-center mt-4">
      <p className="text-sm text-gray-500">
        Page {pagination.page} of {pagination.totalPages}
      </p>

      <div className="flex gap-2">
        <button
          disabled={pagination.page === 1}
          onClick={() => onPageChange(pagination.page - 1)}
          className="px-3 py-1 border rounded"
        >
          Prev
        </button>

        <button
          disabled={pagination.page === pagination.totalPages}
          onClick={() => onPageChange(pagination.page + 1)}
          className="px-3 py-1 border rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;