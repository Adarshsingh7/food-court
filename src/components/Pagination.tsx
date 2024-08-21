import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"; // Adjust import according to your setup
import { FC, ReactNode } from "react";

interface PagButtonProps {
  children?: ReactNode;
  ariaLabel: string;
}

const Pagination: FC = () => {
  return (
    <nav className="flex items-center gap-x-1" aria-label="Pagination">
      <PagButton ariaLabel="">
        <ArrowLeftIcon className="shrink-0 sm:h-5 sm:w-5 h-4 w-4" />
      </PagButton>

      <PagButton ariaLabel="1" />
      <PagButton ariaLabel="2" />
      <PagButton ariaLabel="3" />

      <PagButton ariaLabel="">
        <ArrowRightIcon className="shrink-0 sm:h-5 sm:w-5 h-4 w-4" />
      </PagButton>
    </nav>
  );
};

const PagButton: FC<PagButtonProps> = function ({ children, ariaLabel }) {
  return (
    <button
      type="button"
      className="min-h-[20px] min-w-[20px] py-1.5 px-2 inline-flex justify-center items-center gap-x-1 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none
      sm:min-h-[38px] sm:min-w-[38px] sm:py-2 sm:px-2.5 sm:gap-x-1.5"
      aria-label={ariaLabel}
    >
      <span>{ariaLabel}</span>
      {children}
    </button>
  );
};

export default Pagination;
