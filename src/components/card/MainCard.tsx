import { NewsDetail } from "@/app/_lib/type/posts.type";
import { ll } from "@/app/until/mockData/date";
import images1 from "@/public/img-1.jpg";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { BsDiamondFill } from "react-icons/bs";
interface MainCardProps {
  item: NewsDetail;
  isDescription?: boolean;
}
const MainCard = ({ item, isDescription = false }: MainCardProps) => {
  return (
    <div className='flex flex-col gap-4 border-b-[1px] border-gray-300 pb-4'>
      <div className='height-[200px] group relative w-full overflow-hidden rounded-lg'>
        <Image
          src={item?.image ?? images1.src}
          alt='images2.alt'
          width={200}
          height={200}
          className='w-full object-cover transition duration-300 ease-in-out group-hover:scale-105 group-hover:grayscale'
        />
        <div className='absolute left-4 top-4 cursor-pointer rounded-lg bg-blue-600 px-3 py-1 font-inconsolata text-sm font-semibold tracking-wide text-white'>
          Travel
        </div>
      </div>
      <Link
        href='/'
        className='line-clamp-2 cursor-pointer overflow-hidden text-ellipsis font-inconsolata text-lg font-bold tracking-widest hover:text-[#3756f7]'
      >
        {item?.title}
      </Link>
      <div
        className={`flex flex-row items-center ${isDescription ? "gap-2" : "gap-4"}`}
      >
        <Image
          src={item?.author?.avatar ?? images1.src}
          alt='avatar.alt'
          width={40}
          height={40}
          className='h-12 w-12 rounded-full object-cover'
        />
        <p className='font-inconsolata text-sm font-semibold tracking-widest text-[#3756f7]'>
          {item?.author?.name}
        </p>
        <BsDiamondFill className='text-sm font-semibold tracking-widest text-[#3756f7]' />
        <p className='font-inconsolata text-sm font-semibold tracking-widest text-[#3756f7]'>
          {dayjs(item?.published_at).format(ll)}
        </p>
      </div>
      {!isDescription && (
        <p className='line-clamp-3 overflow-hidden text-ellipsis font-inconsolata tracking-wider text-[#444444]'>
          {item.short_description}
        </p>
      )}
    </div>
  );
};

export default MainCard;
