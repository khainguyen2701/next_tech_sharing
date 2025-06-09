import { posts } from "@/app/until/mockData/posts";
import MainCard from "../card/MainCard";
import HighLightTitle from "../highlight";
import Link from "next/link";

const TodayTopHighlight = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8'>
      <HighLightTitle title='Những bài viết mới nhất...' />
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
        <div className='max-h-fit min-h-fit sm:col-span-2 lg:col-span-4'>
          <div className='flex justify-end'>
            <Link
              href={"posts"}
              className='font-xl mb-6 cursor-pointer font-bold text-neutral-400 hover:text-light-blue-400'
            >
              Xem tất cả...
            </Link>
          </div>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-3'>
            {posts.map((card, idx) => (
              <MainCard key={idx} item={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayTopHighlight;
