"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "./loading";
const CarouselComponent = dynamic(() => import("@/components/carousel"), {
  ssr: false
});

export default function Home() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <CarouselComponent />
      </Suspense>
    </div>
  );
}
