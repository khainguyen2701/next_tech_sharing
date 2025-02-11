import React from "react";
import HighLightTitle from "../highlight";
import MainCard from "../card/MainCard";
import TrendingTopicsCategories from "../trendingTopics";
import PopularPosts from "../popularPosts";

const cardHighLights = [1, 2, 3, 4, 5, 6, 7, 8];

// Mock data
const topicCategories = [1, 2, 3, 4, 5, 6, 7, 8];

// mock data
const posts = [1, 2, 3, 4, 5, 6, 7, 8];

const TodayTopHighlight = () => {
  return (
    <div className='flex flex-col gap-8'>
      <HighLightTitle title="Today's Top Highlights" />
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6'>
        <div className='border sm:col-span-2 lg:col-span-4'>
          <div className='grid grid-cols-1 gap-6 p-6 sm:grid-cols-2'>
            {cardHighLights.map((card, idx) => (
              <MainCard key={idx} item={{}} />
            ))}
          </div>
        </div>

        <div className='flex flex-col gap-6 sm:col-span-2 lg:col-span-2'>
          <TrendingTopicsCategories categories={topicCategories} />
          <PopularPosts posts={posts} />
        </div>
      </div>
    </div>
  );
};

export default TodayTopHighlight;
