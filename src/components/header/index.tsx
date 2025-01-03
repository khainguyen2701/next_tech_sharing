import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/logo.jpg";

const HeaderMainLayout = () => {
  return (
    <header>
      <nav className='fixed start-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900'>
        <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
          <Image
            alt='Next Tech Sharing Logo'
            src={logo}
            width={70}
            height={70}
            className='brightness-80 contrast-125'
          />
          <div className='flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse'>
            <Link href='/login'>Login</Link>
          </div>
          <div
            className='hidden w-full items-center justify-between md:order-1 md:flex md:w-auto'
            id='navbar-sticky'
          >
            <ul className='mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900'>
              <li>
                <Link
                  href='/'
                  className='block rounded bg-blue-700 px-3 py-2 text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500'
                  aria-current='page'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/feature'
                  className='block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
                >
                  Feature
                </Link>
              </li>
              <li>
                <Link
                  href='/marketing'
                  className='block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
                >
                  Marketing
                </Link>
              </li>
              <li>
                <Link
                  href='/product'
                  className='block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
                >
                  Product
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderMainLayout;
