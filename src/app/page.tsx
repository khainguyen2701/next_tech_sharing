"use client";

import BreakingNews from "@/components/breakingNews";
import MasonryGridGallery from "@/components/gallery";
import TodayTopHighlight from "@/components/todayTop";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "./loading";
const CarouselComponent = dynamic(() => import("@/components/carousel"), {
  ssr: false
});

export default function Home() {
  return (
    <div className='flex flex-col gap-16'>
      {/* <Suspense fallback={<Loading />}>
        <CarouselComponent />
      </Suspense> */}
      <Suspense fallback={<Loading />}>
        <MasonryGridGallery />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <BreakingNews />
      </Suspense>
      <TodayTopHighlight />
    </div>
  );
}
