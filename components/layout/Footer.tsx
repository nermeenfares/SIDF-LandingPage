"use client";
import React from "react";
import Image from "next/image";
import { Globe, Phone } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <footer className="fixed bottom-0 h-20  w-full bg-white shadow-[0_-2px_6px_rgba(0,0,0,0.1)] px-10 py-2 flex justify-between items-center z-50">
      <div className="flex items-center gap-4">
        <Image src="/svg/qrCode.svg" alt="QR Code" width={50} height={50} />
        <div className="flex flex-col text-sm gap-1">
          <div className="flex items-center gap-2 text-gray-600">
            <Globe size={16} />
            <span>sidf.gov.sa</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Phone size={16} />
            <span>0118251555</span>
          </div>
        </div>
      </div>

      <div
        className="p-3 border-l-2 border-b-2 border-gray-400 hover:bg-pink-200 transition-all duration-300 rounded-none hover:-mb-1"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      >
        <FaFacebookF className="text-gray-700 text-lg" />
      </div>
    </footer>
  );
}

export default Footer;
