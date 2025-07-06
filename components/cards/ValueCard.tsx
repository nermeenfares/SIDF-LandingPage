"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

type ValueCardProps = {
  icon: string;
  valueKey: string;
  color: string;
};

function ValueCard({ icon, valueKey, color }: ValueCardProps) {
  const t = useTranslations("ValueCard");

  return (
    <div className="bg-[#f2f2f2] w-fit p-6 shadow-[4px_4px_10px_rgba(0,0,0,0.05)] flex flex-col items-center text-center">
      <Image src={icon} alt={t(`${valueKey}_header`)} width={64} height={64} />
      <h3 className="mt-4 text-lg font-bold" style={{ color }}>
        {t(`${valueKey}_header`)}
      </h3>
      <p className="mt-2 text-sm leading-relaxed" style={{ color: "#63696d" }}>
        {t(`${valueKey}_description`)}
      </p>
    </div>
  );
}

export default ValueCard;
