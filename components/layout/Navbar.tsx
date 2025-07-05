"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { LanguageDropdown } from "../dropdowns/LanguageDropdown";
import Image from "next/image";
import { Menu, Layers } from "lucide-react";

function Navbar() {
  const t = useTranslations("navbar");

  return (
    <div className="fixed top-0 left-0 right-0 bg-white px-6 py-3 flex items-center justify-between w-full shadow-md z-50">
      <div className="flex items-center gap-4">
        <span className="text-lg font-medium text-gray-700">EN</span>
        <div className="w-px h-6 bg-gray-300"></div>
        <div className="text-green-600">
          <Image
            width={47}
            height={26}
            alt="logo"
            src="/svg/download-shape.svg"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex flex-col items-end">
          <div className="text-2xl font-bold text-gray-700 tracking-wide">
            <Image
              width={120}
              height={36}
              alt="logo"
              src="/svg/sidf-group.svg"
            />
          </div>
          <div className="text-xs text-gray-600 text-right" dir="rtl">
            صندوق التنمية الصناعية السعودي
          </div>
        </div>

        <div className="w-px h-8 bg-gray-300"></div>

        <button className="text-gray-700 hover:text-green-600 transition-colors">
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
