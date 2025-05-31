"use client";
import useSearchParamsCustoms from "@/app/_hooks/useSearchParamsCustoms";
import React, { useState } from "react";
import { GrSearchAdvanced } from "react-icons/gr";

const InputSearch = () => {
  const { pushQuery, currentQueries } = useSearchParamsCustoms();
  const [searchValue, setSearchValue] = useState<string>(() => {
    if (currentQueries?.query) {
      return currentQueries.query;
    }
    return "";
  });

  const handleSearch = () => {
    if (searchValue) {
      pushQuery({ query: searchValue });
    }
    return;
  };
  return (
    <div className='flex w-full items-center gap-2 rounded-full border border-gray-300 px-2 focus-within:border-blue-500'>
      <input
        maxLength={200}
        type='text'
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className='flex-1 bg-transparent px-2 py-2 font-inconsolata tracking-wider text-neutral-500 focus:outline-none'
        placeholder='Tìm kiếm bài viết...'
      />
      <button
        onClick={handleSearch}
        className='relative left-[-7px] flex items-center justify-center gap-2 rounded-full bg-green-400 px-4 py-1 font-inconsolata text-sm tracking-wider text-white transition duration-200 active:scale-95 active:bg-blue-600 sm:left-0 sm:text-base'
      >
        Tìm kiếm
        <GrSearchAdvanced />
      </button>
    </div>
  );
};

export default InputSearch;
