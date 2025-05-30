"use client";

import TodayTopHighlight from "@/components/todayTop";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "./loading";

const SubscribeNews = dynamic(() => import("@/components/subscribe"), {
  loading: () => <Loading />,
  ssr: false
});

const TechPromo = dynamic(() => import("@/components/TechnicalPromo"), {
  ssr: false
});

import Categories from "@/components/cayegories";

// Mock data
const topicCategories = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Home() {
  return (
    <div className='flex flex-col gap-16'>
      <Suspense fallback={<Loading />}>
        <TechPromo />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <TodayTopHighlight />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <div className='container mx-auto flex flex-col gap-6 sm:col-span-2 lg:col-span-2'>
          <Categories />
        </div>
      </Suspense>

      <SubscribeNews />
    </div>
  );
}
