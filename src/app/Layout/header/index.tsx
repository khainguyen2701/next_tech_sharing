"use client";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineLogin } from "react-icons/ai";
import avatar from "@/public/avatar.jpg";
import { useEffect, useState } from "react";
import logo from "@/public/logo.jpeg";

const headerLink = [
  {
    id: "header-1",
    title: "Home",
    url: "/"
  },
  { id: "header-2", title: "Feature", url: "/feature" },
  { id: "header-3", title: "Marketing", url: "/marketing" }
];

const dropdownLink = [
  {
    id: "profile",
    title: "Profile",
    url: "/profile",
    type: "link"
  },
  { id: "logout", title: "Logout", url: "/logout", type: "function" }
];

const HeaderMainLayout = () => {
  const isAuthor = true;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className='mx-auto border-b border-gray-200 bg-white p-4 text-center font-inconsolata tracking-wide shadow-sm dark:border-gray-600 dark:bg-gray-800'>
        Its not just about sharing knowledge, it's about self-learning,
        connecting and leaving your mark in the tech world.
      </div>
      <header
        className={`sticky start-0 top-0 z-50 w-full bg-white dark:bg-gray-900 ${
          isScrolled
            ? "border-b border-gray-200 shadow-lg dark:border-gray-600"
            : ""
        }`}
      >
        <nav className='container mx-auto'>
          <div className='flex max-w-screen-xl flex-wrap items-center justify-between py-4'>
            <div className='flex items-center gap-4'>
              <Image
                src={logo.src}
                alt='logo'
                width={70}
                height={70}
                className='rounded mix-blend-multiply'
              />
              <Link
                href='/'
                className='hidden items-center font-montserrat text-3xl font-semibold tracking-wide text-cyan-700 sm:flex'
              >
                Technical Sharing
              </Link>
            </div>
            <div className='flex gap-4 space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse'>
              {isAuthor ? (
                <div className='group flex items-center justify-center gap-2 text-xl font-medium text-cyan-700'>
                  <AiOutlineLogin className='transition duration-300 group-hover:text-cyan-500' />
                  <Link
                    href='/login'
                    className='relative font-inter tracking-wide text-cyan-700 transition duration-300 group-hover:text-cyan-500'
                  >
                    Login
                    <span className='absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-500 transition-all duration-300 ease-in-out group-hover:w-full'></span>
                  </Link>
                </div>
              ) : (
                <details className='dropdown'>
                  <summary className='btn m-1 border-none bg-transparent text-base-content shadow-none hover:bg-transparent hover:text-base-content'>
                    <div className='avatar transition-transform duration-300 hover:scale-110'>
                      <div className='w-12 rounded-full ring-2 ring-transparent'>
                        <Image
                          width='50'
                          alt='Avatar'
                          height='50'
                          src={avatar}
                        />
                      </div>
                    </div>
                  </summary>
                  <ul className='menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow'>
                    {dropdownLink.map((item) => {
                      return item.type === "link" ? (
                        <li key={item.id}>
                          <Link href={item.url}>{item.title}</Link>
                        </li>
                      ) : (
                        <li key={item.id}>
                          <Link href={item.url}>{item.title}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </details>
              )}
            </div>
            <div
              className='hidden w-full items-center justify-between md:order-1 md:flex md:w-auto'
              id='navbar-sticky'
            >
              <div className='flex flex-col gap-10 font-inter text-base font-medium md:flex-row md:gap-8 md:text-lg'>
                {headerLink.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className='group flex items-center justify-center gap-2 text-xl font-medium text-cyan-700'
                    >
                      <Link
                        href={item.url}
                        className='relative font-inter text-cyan-700 transition duration-300 group-hover:text-cyan-500'
                      >
                        {item.title}
                        <span className='absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-500 transition-all duration-300 ease-in-out group-hover:w-full'></span>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderMainLayout;
