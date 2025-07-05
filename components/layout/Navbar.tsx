"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { LanguageDropdown } from "../dropdowns/LanguageDropdown";
import { ThemeDropdown } from "../dropdowns/ThemeDropdown";
import Image from "next/image";
import { MenuOutlined } from "@ant-design/icons"; // or your own icon

function Navbar() {
  const t = useTranslations("navbar");

  return (
    <div className="fixed top-0 left-0 right-0 bg-light p-4 flex items-center justify-between w-full shadow-md z-50">
      {/* Left Side: Language Selector */}
      <div className="flex items-center gap-2">
        <LanguageDropdown />
      </div>

      {/* Center: Logo */}
      <div className="flex justify-center flex-1 absolute left-0 right-0 pointer-events-none">
        <div className="flex justify-center pointer-events-auto">
          <Image width={120} height={36} alt="logo" src="/svg/sidf-group.svg" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <ThemeDropdown />
        <button className="text-xl">
          <MenuOutlined className="text-primary" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
