"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

const useSearchParamsCustoms = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const pushQuery = (query: Record<string, string | undefined | null>) => {
    const current = new URLSearchParams(searchParams.toString());

    Object.entries(query).forEach(([key, value]) => {
      if (value === undefined || value === null) {
        current.delete(key);
      } else {
        current.set(key, value);
      }
    });

    const queryString = current.toString();
    router.push(queryString ? `?${queryString}` : "");
  };

  const currentQueries = useMemo(() => {
    return Object.fromEntries(searchParams.entries());
  }, [searchParams]);

  return { pushQuery, currentQueries };
};

export default useSearchParamsCustoms;
