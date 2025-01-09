import axiosInstance from "@/app/config/axios";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const response = await axiosInstance.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return Response.json(response.data);
}
