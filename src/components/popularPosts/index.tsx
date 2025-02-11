import React from "react";
import HighLightTitle from "../highlight";
import PostItem from "./postItem";

interface PopularPostsProps {
  posts: any[];
}

const PopularPosts = ({ posts }: PopularPostsProps) => {
  return (
    <div className='border p-[30px]'>
      <HighLightTitle
        title='Popular Posts'
        fontSize={"text-xl"}
        cssStyle={"tracking-wider font-semibold"}
      />
      <div className='mt-4 flex max-h-[650px] min-h-[420px] flex-col gap-2 overflow-auto'>
        {posts.map((post, index) => (
          <div key={index}>
            <PostItem post={{}} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPosts;
