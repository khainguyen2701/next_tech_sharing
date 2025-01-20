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
          <span className='bg-light-green-200 mb-2 inline w-fit rounded-lg bg-opacity-25 px-3 py-1 font-inter text-lg font-semibold tracking-wide text-[#003aae]'>
            {item.category}
          </span>
          <Link
            href='/'
            className={`cursor-pointer font-inter font-bold tracking-wide hover:underline ${
              isLargeCard ? "text-2xl" : "text-lg"
            } leading-tight`}
          >
            {item.title}
          </Link>
          {item.description && isLargeCard && (
            <p className='mt-2 font-inter text-sm tracking-wide'>
              {item.description}
            </p>
          )}
          <div className='mt-2 flex items-center font-inter text-sm tracking-wide'>
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
