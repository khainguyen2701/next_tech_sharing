"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Breadcrumbs = () => {
  const pathName = usePathname();
  const data = pathName.split("/").filter((segment) => segment !== "");
  return (
    <div className='breadcrumbs overflow-hidden font-inconsolata text-sm font-semibold'>
      <ul className='flex items-center space-x-4 overflow-x-hidden text-ellipsis whitespace-nowrap'>
        <li>
          <Link href='/' className='inline-flex items-center gap-1 text-lg'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='h-6 w-6 stroke-current'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
              ></path>
            </svg>
            Trang chủ
          </Link>
        </li>
        {data?.map((item, idx) => {
          const last = idx + 1 === data.length;
          return (
            <li key={idx}>
              {!last ? (
                <Link href={`/${item}`} className='block truncate text-lg'>
                  {item}
                </Link>
              ) : (
                <span className='inline-flex items-center gap-2 truncate text-ellipsis text-lg text-green-300'>
                  {item}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
