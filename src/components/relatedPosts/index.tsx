"use client";
import React from "react";
import HighLightTitle from "../highlight";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import RelatedCardItem from "./card";

interface RelatedPostsItp {
  posts: any;
}

const RelatedPosts = ({ posts }: RelatedPostsItp) => {
  return (
    <div className='flex flex-col gap-8'>
      <HighLightTitle title='Các bài viết liên quan' />

      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={20}
        grabCursor={true}
        loop={true}
        pagination={{
          clickable: true
        }}
        modules={[Pagination]}
        breakpoints={{
          0: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3
          }
        }}
        className='mySwiper'
      >
        {posts.map((item: any, idx: number) => (
          <SwiperSlide key={idx} className='mb-6'>
            <RelatedCardItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RelatedPosts;
