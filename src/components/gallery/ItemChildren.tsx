import React from "react";
import GalleryItems from "./Items";
interface ItemChildrenGalleryProps {
  isLargeCard: boolean;
  item: any;
}
const ItemChildrenGallery = ({
  isLargeCard,
  item
}: ItemChildrenGalleryProps) => {
  return (
    <div className='grid h-[100%] grid-cols-1 gap-4 sm:grid-rows-2'>
      <GalleryItems item={item} isLargeCard={isLargeCard} />
      {item?.children?.length > 0 && (
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:grid-rows-1'>
          {item?.children?.map((t: any, idx: number) => (
            <GalleryItems key={idx} item={t} isLargeCard={isLargeCard} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemChildrenGallery;
