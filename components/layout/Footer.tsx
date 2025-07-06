"use client";
import React from "react";
import Image from "next/image";
import { Globe, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="fixed bottom-0 h-20 w-full bg-background shadow-[0_-2px_6px_rgba(0,0,0,0.1)] px-10 py-2 flex justify-between items-center z-50">
      <div className="flex items-center gap-4">
        <Image src="/images/qrcode.png" alt="QR Code" width={50} height={50} />
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

      <div className="flex gap-2">
        <div className="p-3 border-l-2 clip-hexagon border-b-2 border-gray-400 hover:bg-[#1877F2] transition-all duration-300 hover:-mb-1">
          <FaFacebookF className="text-foreground hover:text-white text-lg" />
        </div>
        <div className="p-3 border-l-2 clip-hexagon border-b-2 border-gray-400 hover:bg-[#000000] transition-all duration-300 hover:-mb-1">
          <FaXTwitter className="text-foreground hover:text-white text-lg" />
        </div>
        <div className="p-3 border-l-2 clip-hexagon border-b-2 border-gray-400 hover:bg-[#0077B5] transition-all duration-300 hover:-mb-1">
          <FaLinkedinIn className="text-foreground hover:text-white text-lg" />
        </div>
        <div className="p-3 border-l-2 clip-hexagon border-b-2 border-gray-400 hover:bg-[#FF0000] transition-all duration-300 hover:-mb-1">
          <FaYoutube className="text-foreground hover:text-white text-lg" />
        </div>
        <div className="p-3 border-l-2 clip-hexagon border-b-2 border-gray-400 hover:bg-[#E1306C] transition-all duration-300 hover:-mb-1">
          <FaInstagram className="text-foreground hover:text-white text-lg" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
