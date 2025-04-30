"use client";

import BreakingNews from "@/components/breakingNews";
import MasonryGridGallery from "@/components/gallery";
import TodayTopHighlight from "@/components/todayTop";
import { Suspense } from "react";
import Loading from "./loading";
import SponsoredNews from "@/components/sponsoredNews";
import dynamic from "next/dynamic";

const SubscribeNews = dynamic(() => import("@/components/subscribe"), {
  loading: () => <Loading />,
  ssr: false
});

const MyEditor = dynamic(() => import("@/components/editor"), {
  loading: () => <Loading />,
  ssr: false
});

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
      <Suspense fallback={<Loading />}>
        <SponsoredNews />
      </Suspense>
      <SubscribeNews />
      {/* <MyEditor /> */}
    </div>
  );
}
