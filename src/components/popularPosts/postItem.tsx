import React from "react";
import Image from "next/image";
import image from "@/public/img-1.jpg";
import Link from "next/link";

interface PostItemProps {
  post: any;
}
const PostItem = ({ post }: PostItemProps) => {
  return (
    <div className='group flex cursor-pointer flex-row items-center gap-2 py-4'>
      <Image
        src={image.src}
        alt='image.src'
        width={80}
        height={60}
        className='rounded-xl'
      />
      <div className='flex flex-col'>
        <p className='font-inconsolata text-[#444444]'>19 Jun 2022</p>
        <Link
          href='/'
          className='line-clamp-2 overflow-hidden text-ellipsis font-inconsolata font-semibold tracking-wide hover:text-[#3756f7]'
        >
          Perfect Photo Clicking Idea You Must Know.
        </Link>
      </div>
    </div>
  );
};

export default PostItem;
