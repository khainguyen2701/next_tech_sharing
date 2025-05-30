import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import HighLightTitle from "../highlight";

const Categories = () => {
  return (
    <div className='flex flex-col gap-8'>
      <div>
        <HighLightTitle
          title={"Danh sách những ngôn ngữ, kỹ thuật, framework..."}
        />
      </div>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-4'>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className='group flex cursor-pointer items-center justify-between rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-green-50 p-4 transition-colors duration-300 hover:border-blue-200'
          >
            <div className='flex items-center gap-2'>
              <span className='text-2xl'>☕</span>
              <span className='text-lg font-semibold text-gray-800'>Java</span>
            </div>
            <HiArrowUpRight className='p-1 text-2xl text-light-green-400 transition-all duration-200 group-hover:rounded-sm group-hover:bg-blue-300 group-hover:text-white' />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
