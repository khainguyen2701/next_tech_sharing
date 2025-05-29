"use client";

import SponsoredNews from "@/components/sponsoredNews";
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
        <SponsoredNews />
      </Suspense>
      <SubscribeNews />
      {/* <MyEditor /> */}
    </div>
  );
}
