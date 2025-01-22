import gallery1 from "@/public/galerry1.webp";
import images1 from "@/public/images.jpeg";
import { useEffect, useState } from "react";
import { HiMiniArrowSmallLeft, HiMiniArrowSmallRight } from "react-icons/hi2";
import BreakingItems from "./breakingItems";

const breakingNews = [
  {
    id: "breakingNews-1",
    title: "Breaking News 1",
    date: "22 Sep 2015",
    image: gallery1.src
  },
  {
    id: "breakingNews-2",
    title: "Breaking News 2",
    date: "22 Sep 2015",
    image: images1.src
  },
  {
    id: "breakingNews-3",
    title: "Breaking News 3",
    date: "22 Sep 2015",
    image: gallery1.src
  },
  {
    id: "breakingNews-4",
    title: "Breaking News 4",
    date: "22 Sep 2015",
    image: images1.src
  },
  {
    id: "breakingNews-5",
    title: "Breaking News 5",
    date: "22 Sep 2015",
    image: gallery1.src
  },
  {
    id: "breakingNews-6",
    title: "Breaking News 6",
    date: "22 Sep 2015",
    image: images1.src
  },
  {
    id: "breakingNews-7",
    title: "Breaking News 7",
    date: "22 Sep 2015",
    image: gallery1.src
  },
  {
    id: "breakingNews-8",
    title: "Breaking News 8",
    date: "22 Sep 2015",
    image: images1.src
  },
  {
    id: "breakingNews-9",
    title: "Breaking News 9",
    date: "22 Sep 2015",
    image: gallery1.src
  }
];

const BreakingNews = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const [itemsPerSlide, setItemsPerSlide] = useState<number>(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerSlide(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = prev + 1;

        if (
          nextSlide >=
          breakingNews.length -
            (itemsPerSlide === 3 ? itemsPerSlide - 1 : itemsPerSlide)
        ) {
          return 0;
        }
        return nextSlide % breakingNews.length;
      });
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [itemsPerSlide]);

  const handlePrev = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + breakingNews.length) % breakingNews.length
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % breakingNews.length);
  };

  return (
    <div className='w-full overflow-hidden'>
      <div className='w-fit rounded-tl-lg rounded-tr-lg border border-b-0 border-[#3756f7] bg-[#3756f7] p-2 font-inter text-[15px] tracking-wide text-white'>
        Breaking News
      </div>
      <div className='relative flex w-full'>
        <div
          className='flex w-full transition-transform duration-500 ease-in-out'
          style={{
            transform: `translateX(-${currentSlide * (100 / itemsPerSlide)}%)`
          }}
        >
          {breakingNews.map((item, index) => (
            <div
              key={index}
              className={`flex-shrink-0 border border-[#e9edff] ${itemsPerSlide === 3 ? "w-1/3" : itemsPerSlide === 2 ? "sm:w-1/2" : "w-full"}`}
            >
              <div className='h-full w-full bg-[#f9faff] px-4 py-6'>
                <BreakingItems item={item} />
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handlePrev}
          disabled={currentSlide === 0}
          className={`${currentSlide === 0 ? "cursor-not-allowed" : "cursor-pointer"} absolute left-[-10px] top-1/2 h-[50px] -translate-y-1/2 transform rounded-xl bg-[#3756f7] p-2 text-white opacity-0 hover:opacity-50`}
        >
          <HiMiniArrowSmallLeft className='text-lg' />
        </button>
        <button
          onClick={handleNext}
          disabled={currentSlide === breakingNews.length - itemsPerSlide}
          className={`${currentSlide === breakingNews.length - itemsPerSlide ? "cursor-not-allowed" : "cursor-pointer"} absolute right-[-10px] top-1/2 h-[50px] -translate-y-1/2 transform rounded-xl bg-[#3756f7] p-2 text-white opacity-0 hover:opacity-50`}
        >
          <HiMiniArrowSmallRight className='text-lg' />
        </button>
      </div>
    </div>
  );
};

export default BreakingNews;
