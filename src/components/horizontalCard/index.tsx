import React from "react";
import PostCard from "./PostCard";

type HorizontalCardType = {
  data: any;
};
const HorizontalCard = ({ data }: HorizontalCardType) => {
  return (
    <div className='flex flex-col gap-4'>
      {data.map((item: any) => (
        <React.Fragment key={item.id}>
          <PostCard {...item} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default HorizontalCard;
