import React from "react";
import HighLightTitle from "../highlight";
import TrendTopicItem from "./trendTopicItem";

interface TrendingTopicsCategoriesProps {
  categories: any[];
}
const TrendingTopicsCategories = ({
  categories = []
}: TrendingTopicsCategoriesProps) => {
  return (
    <div className='border p-[30px]'>
      <HighLightTitle
        title='Trending Topics'
        fontSize={"text-xl"}
        cssStyle={"tracking-wider font-semibold"}
      />
      <div className='custom-scrollbar mt-4 flex max-h-[650px] min-h-[420px] flex-col gap-2 overflow-auto'>
        {categories.map((category, index) => (
          <div key={index}>
            <TrendTopicItem category={{}} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTopicsCategories;
