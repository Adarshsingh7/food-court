import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"; // Adjust import according to your setup
import { FC } from "react";

const Pagination: FC = () => {
  return (
    <nav className="flex items-center gap-x-1" aria-label="Pagination">
      <button
        type="button"
        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
        aria-label="Previous"
      >
        <ArrowLeftIcon className="shrink-0 h-5 w-5" />
        <span>Previous</span>
      </button>
      <div className="flex items-center gap-x-1">
        <button
          type="button"
          className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
          aria-current="page"
        >
          1
        </button>
        <button
          type="button"
          className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
        >
          2
        </button>
        <button
          type="button"
          className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
        >
          3
        </button>
      </div>
      <button
        type="button"
        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
        aria-label="Next"
      >
        <span>Next</span>
        <ArrowRightIcon className="shrink-0 h-5 w-5" />
      </button>
    </nav>
  );
};

export default Pagination;
