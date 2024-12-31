import React from "react";

interface LayoutMarketingProps {
  children: React.ReactNode;
}
const LayoutMarketing = ({ children }: LayoutMarketingProps) => {
  return <div>LayoutMarketing {children}</div>;
};

export default LayoutMarketing;
