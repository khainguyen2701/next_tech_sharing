"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "./loading";
import MasonryGridGallery from "@/components/gallery";
const CarouselComponent = dynamic(() => import("@/components/carousel"), {
  ssr: false
});

export default function Home() {
  return (
    <div>
      {/* <Suspense fallback={<Loading />}>
        <CarouselComponent />
      </Suspense> */}
      <Suspense fallback={<Loading />}>
        <MasonryGridGallery />
      </Suspense>
    </div>
  );
}
