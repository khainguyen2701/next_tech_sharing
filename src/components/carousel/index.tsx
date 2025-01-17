import banner1 from "@/public/banner1.jpg";
import banner2 from "@/public/banner2.jpg";
import banner3 from "@/public/banner-8134869_1280.webp";
import banner4 from "@/public/images.jpeg";
import Image from "next/image";
import { useState } from "react";

const slides = [
  { id: "slide1", src: banner1, alt: "First Image" },
  { id: "slide2", src: banner2, alt: "Second Image" },
  { id: "slide3", src: banner3, alt: "Third Image" },
  { id: "slide4", src: banner4, alt: "Fourth Image" }
];

const CarouselComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className='carousel relative h-[450px] w-full overflow-hidden'>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`carousel-item absolute h-full w-full transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            className='h-[450px] w-full cursor-pointer object-cover'
            width={1920}
            height={450}
            loading='lazy'
          />
        </div>
      ))}

      <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
        <button onClick={prevSlide} className='btn btn-circle'>
          ❮
        </button>
        <button onClick={nextSlide} className='btn btn-circle'>
          ❯
        </button>
      </div>
    </div>
  );
};

export default CarouselComponent;
