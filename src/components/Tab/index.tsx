"use client";
import useSearchParamsCustoms from "@/app/_hooks/useSearchParamsCustoms";
import { useCallback, useState } from "react";

const mockTabs = [
  { label: "All", value: "all" },
  { label: "Javascript", value: "javascript" },
  { label: "Typescript", value: "typescript" },
  { label: "HTML", value: "html" },
  { label: "CSS", value: "css" },
  { label: "Docker", value: "docker" },
  { label: "ReactJS", value: "react-js" },
  { label: "NextJS", value: "next-js" },
  { label: "NestJS", value: "nest-js" },
  { label: "Prisma", value: "prisma" },
  { label: "Postgres", value: "postgres-sql" },
  { label: "ExpressJS", value: "express-js" },
  { label: "Redis", value: "redis" },
  { label: "Axios", value: "axios" },
  { label: "Security API", value: "security-api" }
] as const;

type TabValue = (typeof mockTabs)[number]["value"];

const Tabs = () => {
  const { pushQuery, currentQueries } = useSearchParamsCustoms();
  const [tab, setTab] = useState<TabValue>(() => {
    if (currentQueries?.tab) {
      return currentQueries.tab as TabValue;
    }
    return "all";
  });

  const changeTabs = (value: TabValue) => {
    if (value) {
      setTab(value);
      pushQuery({
        tab: value
      });
      return;
    }
    return;
  };

  return (
    <div className='scrollbar-none flex gap-2 overflow-x-auto rounded-md'>
      {mockTabs.map((item) => (
        <button
          key={item.value}
          onClick={() => changeTabs(item.value)}
          className={`whitespace-nowrap rounded-md border px-3 py-1 text-lg font-medium transition-all duration-150 ${
            tab === item.value && "border-green-500 bg-green-500 text-white"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
