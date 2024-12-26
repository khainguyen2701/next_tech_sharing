import React from "react";
interface BlogLayoutProps {
  children: React.ReactNode;
}
const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <section>
      <h2>Hello</h2>
      {children}
    </section>
  );
};

export default BlogLayout;
