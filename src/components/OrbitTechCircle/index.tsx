"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

import nestjs from "@/public/logo/nestjs.png";
import nextjs from "@/public/logo/nextjs.png";
import postgres from "@/public/logo/postgres.png";
import prisma from "@/public/logo/prisma.png";
import reactjs from "@/public/logo/reactjs.png";
import taiwindcss from "@/public/logo/taiwindcss.png";
import ts from "@/public/logo/ts.png";
import vite from "@/public/logo/vite.png";
import docker from "@/public/logo/docker.png";
import golang from "@/public/logo/golang.png";
import html from "@/public/logo/html.png";
import js from "@/public/logo/js.png";
import mysql from "@/public/logo/mysql.png";
import reactQuey from "@/public/logo/reactQuey.png";

const techIcons = [
  [ts, html, js, ts, html, js],
  [prisma, reactQuey, mysql, taiwindcss, prisma, reactQuey, mysql, taiwindcss],
  [
    docker,
    golang,
    vite,
    reactjs,
    postgres,
    nextjs,
    nestjs,
    docker,
    golang,
    vite,
    reactjs,
    postgres,
    nextjs,
    nestjs
  ]
];

const OrbitTechCircle = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  if (!containerWidth) {
    return (
      <div ref={containerRef} className='relative mx-auto h-[800px] w-full' />
    );
  }

  const ratios = [0.5, 0.7, 0.9];
  const radii = ratios.map((r) => (containerWidth * r) / 2);

  return (
    <div
      ref={containerRef}
      className='relative mx-auto h-[500px] w-full overflow-hidden'
    >
      {techIcons.map((layer, layerIndex) => {
        const radius = radii[layerIndex];

        return (
          <div
            key={layerIndex}
            className='absolute inset-0 top-[600px] flex items-center justify-center'
          >
            <div
              className='animate-spin-slow relative'
              style={{
                width: `${radius * 2}px`,
                height: `${radius * 2}px`
              }}
            >
              <div className='absolute inset-0 border-separate rounded-full border-2 border-blue-200' />

              {layer.map((icon, index) => {
                const angle = (index / layer.length) * 2 * Math.PI;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);

                return (
                  <div
                    key={index}
                    className='absolute'
                    style={{
                      top: `calc(50% + ${y}px - 38px)`,
                      left: `calc(50% + ${x}px - 38px)`
                    }}
                  >
                    <div className='flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 hover:scale-110'>
                      <div className='relative aspect-square w-12'>
                        <Image
                          src={icon}
                          alt={`tech-${index}`}
                          fill
                          className='object-contain'
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrbitTechCircle;
