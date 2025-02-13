import React from "react";
import HighLightTitle from "../highlight";
import MainCard from "../card/MainCard";
import { posts } from "@/app/until/mockData/posts";

const SponsoredNews = () => {
  return (
    <div className='flex flex-col gap-8'>
      <HighLightTitle title='Sponsored News' />
      <div className='sm:col-span-4 lg:col-span-4'>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-4'>
          {posts.map((card, idx) => (
            <MainCard key={idx} item={card} isDescription={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsoredNews;
