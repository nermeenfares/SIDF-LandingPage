"use client";

import React, { useEffect, useRef, useState } from "react";

const data = [
  { year: 1974, value: 0.5 },
  { year: 1975, value: 3 },
  { year: 1992, value: 7 },
  { year: 2005, value: 20 },
  { year: 2012, value: 40 },
  { year: 2017, value: 65 },
  { year: 2019, value: 105 },
];

const MAX = Math.max(...data.map((d) => d.value));

const firstColumnData = data.slice(0, 4);
const secondColumnData = data.slice(4);

export default function StatisticsComponent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const renderStatisticRow = (item: any, index: number) => {
    const percent = (item.value / MAX) * 100;

    return (
      <div
        key={`${item.year}-${item.value}`}
        className="flex items-center gap-8"
      >
        <div className="w-16 text-left flex-shrink-0">
          <span className="text-xl font-medium text-gray-600">{item.year}</span>
        </div>

        <div className="flex-1 relative">
          <div
            className="h-12 bg-gray-200 relative overflow-hidden shadow-sm"
            style={{
              clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 100%, 0 100%)",
            }}
          >
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-primary transition-all duration-2000 ease-out shadow-md"
              style={{
                width: inView ? `${percent}%` : "0%",
                clipPath:
                  "polygon(0 0, calc(100% - 20px) 0, 100% 100%, 0 100%)",
                transitionDelay: `${index * 150}ms`,
              }}
            />
          </div>

          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <span className="text-white font-bold text-base">{item.value}</span>
            <span className="text-white text-sm mr-2 opacity-90">
              مليار دولار
            </span>
          </div>
        </div>

        <div className="w-32 text-right flex-shrink-0">
          <div className="text-4xl font-bold text-primary leading-none">
            {item.value}
          </div>
          <div className="text-sm text-gray-600 mt-1">مليار دولار</div>
        </div>
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className="w-full max-w-7xl mx-auto p-8 bg-background"
      dir="rtl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="space-y-6">
          {firstColumnData.map((item, index) =>
            renderStatisticRow(item, index)
          )}
        </div>

        <div className="space-y-6">
          {secondColumnData.map((item, index) =>
            renderStatisticRow(item, index + 4)
          )}
        </div>
      </div>
    </div>
  );
}
