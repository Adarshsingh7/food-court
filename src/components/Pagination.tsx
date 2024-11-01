import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"; // Adjust import according to your setup
import { FC, ReactNode } from "react";

interface PagButtonProps {
  children?: ReactNode;
  ariaLabel: string;
  onClick: () => void;
  disabled?: boolean;
}

const Pagination: FC<{
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <nav className="flex items-center gap-x-1" aria-label="Pagination">
      <PagButton
        ariaLabel="Previous"
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        <ArrowLeftIcon className="shrink-0 sm:h-5 sm:w-5 h-4 w-4" />
      </PagButton>

      {Array.from({ length: totalPages }, (_, index) => (
        <PagButton
          key={index + 1}
          ariaLabel={`${index + 1}`}
          onClick={() => onPageChange(index + 1)}
          disabled={currentPage === index + 1}
        >
          {index + 1}
        </PagButton>
      ))}

      <PagButton
        ariaLabel="Next"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        <ArrowRightIcon className="shrink-0 sm:h-5 sm:w-5 h-4 w-4" />
      </PagButton>
    </nav>
  );
};

const PagButton: FC<PagButtonProps> = function ({
  children,
  ariaLabel,
  disabled,
  onClick,
}) {
  return (
    <button
      type="button"
      className="min-h-[20px] min-w-[20px] py-1.5 px-2 inline-flex justify-center items-center gap-x-1 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none
      sm:min-h-[38px] sm:min-w-[38px] sm:py-2 sm:px-2.5 sm:gap-x-1.5"
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
    >
      {/* <span>{ariaLabel}</span> */}
      {children}
    </button>
  );
};

export default Pagination;
