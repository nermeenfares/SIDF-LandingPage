"use client";

import { strategicGoals } from "@/constants";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

function AboutSection() {
  const t = useTranslations("AboutSection");

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat clip-hexDiagonal-reversed"
      style={{
        backgroundImage: "url('/images/solar-system.jpg')",
      }}
      dir="rtl"
    >
      <div className="absolute inset-0 bg-[#417f57] bg-opacity-80"></div>

      <div className="relative z-10 px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              {t("strategic_goals_title")}
            </h1>
            <p className="text-white text-lg md:text-xl leading-relaxed max-w-5xl mx-auto">
              {t("strategic_goals_description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategicGoals.map((goal) => {
              return (
                <div
                  key={goal.id}
                  className="bg-[#396a4a] items-center clip-hexDiagonal bg-opacity-80 p-6 text-white transition-all duration-300 hover:bg-opacity-100 hover:scale-105"
                >
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="mb-4">
                      <Image
                        width="88"
                        height="88"
                        alt={goal.id.toString()}
                        src={goal.icon}
                      />
                    </div>
                    <h3 className="text-sm font-medium leading-relaxed">
                      {goal.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
