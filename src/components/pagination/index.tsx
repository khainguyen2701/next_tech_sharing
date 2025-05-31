"use client";

import useSearchParamsCustoms from "@/app/_hooks/useSearchParamsCustoms";

interface PaginationProps {
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const { pushQuery, currentQueries } = useSearchParamsCustoms();

  const page = Number(currentQueries.page ?? 1);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      pushQuery({ page: page.toString() });
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    const halfVisible = Math.floor(maxVisiblePages / 2);
    let startPage = Math.max(1, page - halfVisible);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`rounded-md px-3 py-1 ${
            i === page
              ? "bg-green-300 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          } transition-colors duration-200`}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className='flex items-center justify-center gap-2 py-4'>
      <button
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
        className={`rounded-md px-3 py-1 ${
          page === 1
            ? "cursor-not-allowed bg-gray-100 text-gray-400"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        } transition-colors duration-200`}
      >
        Về trước
      </button>

      <div className='scrollbar-none flex gap-2 overflow-x-auto rounded-md'>
        {renderPageNumbers()}
      </div>

      <button
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
        className={`rounded-md px-3 py-1 ${
          page === totalPages
            ? "cursor-not-allowed bg-gray-100 text-gray-400"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        } transition-colors duration-200`}
      >
        Kế tiếp
      </button>
    </div>
  );
};

export default Pagination;
