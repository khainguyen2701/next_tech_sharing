"use client";
import { useState } from "react";

const MoreDropdown = ({ actions }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative'>
      {/* Nút 3 chấm */}
      <button
        onClick={toggleDropdown}
        className='flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-200 hover:bg-gray-200'
      >
        <svg
          className='h-5 w-5 text-gray-600'
          fill='currentColor'
          viewBox='0 0 20 20'
        >
          <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0z' />
        </svg>
      </button>

      {isOpen && (
        <div className='absolute right-0 z-10 mt-2 w-56 rounded-lg border border-gray-200 bg-white shadow-lg'>
          <ul className='py-1'>
            {actions?.map((actn: any, idx: number) => (
              <li key={idx}>
                <button className='flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                  {actn.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MoreDropdown;
