"use client";

import Image from "next/image";
import MoreDropdown from "./MoreDropdown";
import toSlug from "@/app/until/slug";
import { useRouter } from "next/navigation";

interface PostCardProps {
  author: string;
  title: string;
  date: string;
  readTime: string;
  readCount: string;
  thumbnail: string;
  tag: string[];
  short_describe: string;
}

const PostCard: React.FC<PostCardProps> = ({
  author,
  title,
  date,
  readTime,
  readCount,
  thumbnail,
  tag,
  short_describe
}) => {
  const actions = [
    { label: "📘  Chia sẻ lên Facebook", link: "#" },
    { label: "📧  Chia sẻ tới Email", link: "#" },
    { label: "🔗  Sap chép liên kết", link: "#" }
  ];

  const router = useRouter();
  const handleClickTitle = (value: string) => {
    const slug = toSlug(value);
    router.push(`/posts/${slug}`);
  };
  return (
    <div className='flex flex-col gap-6 rounded-lg border border-gray-200 p-4 shadow-sm'>
      <div className='flex flex-col-reverse justify-between lg:flex-row'>
        <div className='flex flex-col items-start gap-2 text-sm text-gray-500 lg:flex-row lg:items-center'>
          <div className='flex flex-wrap items-center gap-2 text-sm text-gray-500'>
            {tag.map((item, idx) => (
              <span
                key={idx}
                className='cursor-pointer rounded-md bg-gray-100 px-2 py-1 transition-shadow duration-200 hover:bg-green-200 hover:text-white'
              >
                {item}
              </span>
            ))}
          </div>
          <div className='flex items-center gap-2 text-sm text-gray-500'>
            <span>{date} ngày trước</span>
            <span>•</span>
            <span>{readTime} phút đọc</span>
          </div>
        </div>
        <div className='self-end lg:ml-auto lg:self-auto'>
          <MoreDropdown actions={actions} />
        </div>
      </div>
      <div className='flex items-start gap-4 rounded-lg'>
        <div className='flex-1 gap-4'>
          <h2
            className='mb-2 cursor-pointer text-lg font-bold text-gray-800 hover:text-green-300'
            onClick={() => handleClickTitle(title)}
          >
            {title}
          </h2>
          <p className='text-gray-700'>{short_describe}</p>
        </div>

        {/* Hình ảnh thumbnail */}
        <div className='w-46 hidden h-24 cursor-pointer lg:block'>
          <Image
            src={thumbnail}
            alt='Thumbnail'
            width={100}
            height={100}
            className='h-full w-full rounded-md object-cover'
          />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
