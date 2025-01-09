import axiosInstance from "@/app/config/axios";
import React from "react";
export interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export async function generateStaticParams() {
  const users = await axiosInstance.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return users?.data.map((user: Users) => ({
    id: user.id.toString()
  }));
}

const FeaturePageDetail = async ({
  params
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;
  const post = await axiosInstance.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const { data }: { data: Users } = post;

  return (
    <main>
      <h1>{data.name}</h1>
      <p>{data.email}</p>
    </main>
  );
};

export default FeaturePageDetail;
