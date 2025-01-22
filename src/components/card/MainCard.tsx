import images1 from "@/public/img-1.jpg";
import Image from "next/image";
import Link from "next/link";
interface MainCardProps {
  item: any;
}
const MainCard = ({ item }: MainCardProps) => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='height-[200px] group relative w-full overflow-hidden rounded-lg'>
        <Image
          src={images1.src}
          alt='images2.alt'
          width={200}
          height={200}
          className='w-full object-cover transition duration-300 ease-in-out group-hover:scale-105 group-hover:grayscale'
        />
        <div className='absolute left-4 top-4 rounded-lg bg-blue-600 px-3 py-1 font-inter text-sm font-semibold tracking-wide text-white'>
          Travel
        </div>
      </div>
      <Link
        href='/'
        className='cursor-pointer font-inter text-lg font-bold hover:text-[#3756f7]'
      >
        Traveling Makes You More Inteligent and More Energetic
      </Link>
      <div className='flex flex-row items-center gap-4'></div>
    </div>
  );
};

export default MainCard;
