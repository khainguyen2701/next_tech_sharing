"use client";

import BreakingNews from "@/components/breakingNews";
import MasonryGridGallery from "@/components/gallery";
import TodayTopHighlight from "@/components/todayTop";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <div className='flex flex-col gap-16'>
      <Suspense fallback={<Loading />}>
        <MasonryGridGallery />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <BreakingNews />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <TodayTopHighlight />
      </Suspense>
    </div>
  );
}
