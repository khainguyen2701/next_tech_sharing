import React from "react";
import Breadcrumbs from "@/components/breadcrumbs";

const PostPageDetailLayout = ({
  children
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className='container mx-auto'>
      <Breadcrumbs />
      {children}
    </div>
  );
};

export default PostPageDetailLayout;
