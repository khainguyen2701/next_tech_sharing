import Link from "next/link";
import React from "react";

interface GalleryItemsProps {
  isLargeCard: boolean;
  item: any;
}
const GalleryItems = ({ isLargeCard, item }: GalleryItemsProps) => {
  return (
    <div className={"relative h-[100%]"}>
      <div
        className='h-[100%] transform rounded-lg bg-cover bg-center object-cover transition duration-300 hover:scale-105'
        style={{ backgroundImage: `url(${item.image})` }}
      >
        {/* Overlay */}
        <div className='absolute inset-0 rounded-lg bg-black bg-opacity-20'></div>
        {/* Content */}
        <div className='absolute inset-0 flex flex-col justify-end p-4 text-white'>
          <span className='mb-2 inline w-fit rounded-lg bg-light-green-200 bg-opacity-25 px-3 py-1 font-inconsolata text-lg font-semibold tracking-wide text-[#003aae]'>
            {item.category}
          </span>
          <Link
            href='/'
            className={`cursor-pointer font-inconsolata font-bold tracking-wide hover:underline ${
              isLargeCard ? "text-2xl" : "text-lg"
            } leading-tight`}
          >
            {item.title}
          </Link>
          {item.description && isLargeCard && (
            <p className='mt-2 line-clamp-2 overflow-hidden text-ellipsis font-inconsolata text-base tracking-wide'>
              {item.description}
            </p>
          )}
          <div className='mt-2 flex items-center font-inconsolata text-sm tracking-wide'>
            <span>
              By {item.author} • {item.date}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryItems;
