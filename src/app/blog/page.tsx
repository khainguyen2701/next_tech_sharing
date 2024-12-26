import React, { Suspense } from "react";
import Loading from "./loading";

const Blog = () => {
  return (
    <section>
      <Suspense fallback={<Loading />}>
        <h2>Hello world - this is page blog</h2>
      </Suspense>
    </section>
  );
};

export default Blog;
