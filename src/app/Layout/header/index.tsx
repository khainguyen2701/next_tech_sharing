"use client";
import logo from "@/public/logo.jpeg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
      <div className='mx-auto border-b border-gray-200 bg-gradient-to-r from-blue-50 to-green-50 p-4 text-center font-inconsolata tracking-wide text-gray-600 shadow-sm'>
        Không chỉ là chia sẻ kiến ​​thức, mà còn là tự học, kết nối và để lại
        dấu ấn của bạn trong thế giới công nghệ.
      </div>

      <header
        className={`sticky start-0 top-0 z-50 w-full bg-gradient-to-r from-blue-50 to-green-50 ${
          isScrolled ? "border-b border-gray-200 shadow-lg" : ""
        }`}
      >
        <nav className='container mx-auto'>
          <div className='flex max-w-screen-xl flex-wrap items-center justify-between py-4'>
            <div className='flex items-center gap-4'>
              <Image
                src={logo.src}
                alt='logo'
                width={50}
                height={50}
                className='rounded mix-blend-multiply'
              />
              <Link
                href='/'
                className='hidden items-center font-inconsolata text-2xl font-semibold text-gray-800 sm:flex'
              >
                Technical Sharing
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderMainLayout;
