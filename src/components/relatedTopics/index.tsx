import React from "react";
import HighLightTitle from "../highlight";
interface RelatedTopicsItp {
  tags: any;
}

const RelatedTopics = ({ tags }: RelatedTopicsItp) => {
  return (
    <div className='flex flex-col gap-8'>
      <HighLightTitle title='Các bài viết theo chủ đề liên quan' />
      <div className='flex flex-row flex-wrap gap-4'>
        {tags.map((item: any, idx: number) => (
          <span
            key={idx}
            className='cursor-pointer rounded-md bg-gray-100 px-2 py-1 font-inconsolata transition-shadow duration-200 hover:bg-green-200 hover:text-white'
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RelatedTopics;
