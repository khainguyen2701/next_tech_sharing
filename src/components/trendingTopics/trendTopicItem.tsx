"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface TrendTopicItemProps {
  category: any;
}
const TrendTopicItem = ({ category }: TrendTopicItemProps) => {
  const router = useRouter();
  const handleRedirectToCategory = (slug: string) => {
    // Handle redirect to category page with useRouter of NextJS
    router.push(`/category/${slug}`);
  };
  return (
    <div
      className='group flex cursor-pointer items-center justify-between border-b-[1px] py-4'
      onClick={() => handleRedirectToCategory("123")}
    >
      <div className='line-clamp-2 overflow-hidden text-ellipsis font-inconsolata text-lg tracking-wider group-hover:cursor-pointer group-hover:text-neutral-400'>
        Lifestyle - Example
      </div>
      <div className='font-inconsolata text-lg tracking-wider group-hover:cursor-pointer group-hover:text-neutral-400'>
        (123)
      </div>
    </div>
  );
};

export default TrendTopicItem;
