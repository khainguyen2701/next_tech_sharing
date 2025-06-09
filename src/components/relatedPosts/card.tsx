import toSlug from "@/app/until/slug";
import Image from "next/image";
import Link from "next/link";

interface RelatedCardItemItp {
  item: any;
}
const RelatedCardItem = ({ item }: RelatedCardItemItp) => {
  const slug = toSlug(item.title);
  return (
    <div className='flex flex-col gap-6 rounded-lg p-4 transition-all duration-500 hover:bg-[position:100%_0%]'>
      <div className='group relative h-[200px] w-full overflow-hidden rounded-lg'>
        <Image
          src={item?.image}
          alt='images2.alt'
          width={100}
          height={100}
          className='w-full object-cover transition duration-300 ease-in-out group-hover:scale-105 group-hover:grayscale'
        />
      </div>
      <Link
        href={`/posts/${slug}`}
        className='line-clamp-2 cursor-pointer overflow-hidden text-ellipsis text-left text-base font-bold tracking-widest text-gray-700 hover:text-green-300'
      >
        {item?.title}
      </Link>
      <div className='flex flex-row flex-wrap gap-4'>
        {item.tags.map((item: any, idx: number) => (
          <span
            key={idx}
            className='cursor-pointer rounded-full bg-gray-100 px-2 py-1 text-base transition-shadow duration-200 hover:bg-green-200 hover:text-white'
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RelatedCardItem;
