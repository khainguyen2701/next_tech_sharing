"use client";
import axiosInstance from "@/app/config/axios";
import React, { useEffect } from "react";

const PageCart = () => {
  useEffect(() => {
    const query = async () => {
      const response = await axiosInstance.get("/api/users");
      console.log("response", response.data);
      return response;
    };
    query();
  }, []);
  return <div>PageCart</div>;
};

export default PageCart;
