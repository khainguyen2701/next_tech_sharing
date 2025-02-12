"use client";
import Image from "next/image";
import React, { useState } from "react";
import image from "@/public/newslatter-bg.png";
import { BsSendFill } from "react-icons/bs";
const SubscribeNews = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = () => {
    console.log(email);
  };

  return (
    <div>
      <div className='relative h-[450px]'>
        <Image
          src={image.src}
          alt='image.alt'
          fill
          sizes='100vw'
          className='h-full w-full rounded-xl bg-cover bg-center bg-no-repeat'
        />
        <div className='absolute left-1 top-1 z-10 flex h-full w-full flex-col items-center justify-center p-4 sm:p-0'>
          <div className='flex flex-col items-center justify-center gap-4'>
            <p className='text-center font-inconsolata text-3xl font-semibold text-red-50 sm:text-5xl'>
              Never miss any Update!
            </p>
            <p className='text-center font-inconsolata text-xl font-semibold text-red-50 sm:text-2xl'>
              Get the freshest headlines and updates sent uninterrupted to your
              inbox.
            </p>
          </div>
          <div className='mt-10 flex w-full max-w-[500px] items-center gap-2 rounded-full border border-gray-300 px-2 focus-within:border-blue-500'>
            <input
              maxLength={200}
              type='text'
              className='flex-1 bg-transparent px-4 py-4 font-inconsolata tracking-wider text-white focus:outline-none'
              placeholder='Type your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              className='relative left-[-17px] flex items-center justify-center gap-2 rounded-full bg-blue-500 px-4 py-2 font-inconsolata text-sm tracking-wider text-white transition duration-200 active:scale-95 active:bg-blue-600 sm:left-0 sm:text-base'
            >
              Subscribe
              <BsSendFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeNews;
