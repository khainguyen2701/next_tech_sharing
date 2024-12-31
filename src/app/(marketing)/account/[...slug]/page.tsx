import React from "react";

interface AccountDetailProps {
  params: Promise<{ slug: string[] }>;
}
const AccountDetail = async ({ params }: AccountDetailProps) => {
  const slug = await params;
  console.log({ params: slug });
  return <div>AccountDetail</div>;
};

export default AccountDetail;
