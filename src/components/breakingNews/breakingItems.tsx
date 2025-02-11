import Image from "next/image";
import Link from "next/link";
interface BreakingItemsProps {
  item: any;
}
const BreakingItems = ({ item }: BreakingItemsProps) => {
  return (
    <div className='flex flex-row items-center gap-4'>
      <div className='h-[100px] w-[40%] overflow-hidden rounded-md'>
        <Image
          src={item.image}
          alt={"gallery1.alt"}
          width={200}
          height={200}
          className='h-full w-full object-cover'
        />
      </div>
      <div className='flex w-[60%] flex-col gap-4'>
        <p className='font-inconsolata text-sm font-medium tracking-wide text-gray-500'>
          {item.date}
        </p>
        <Link
          href='/'
          className='line-clamp-2 cursor-pointer overflow-hidden text-ellipsis font-inconsolata text-lg font-semibold tracking-wide hover:text-[#0d6efd]'
        >
          {item.title}
        </Link>
      </div>
    </div>
  );
};

export default BreakingItems;
