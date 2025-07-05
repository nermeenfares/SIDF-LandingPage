import { iconsData } from "@/constants";
import Image from "next/image";
import React from "react";

function TopSection() {
  return (
    <div className="rounded-br-2xl  font-medium text-heading  flex flex-row gap-1 mx-auto items-center justify-center w-fit rounded-bl-2xl bg-white py-3 px-8 ">
      <p>2025/6/18</p>
      <p>15:20:10</p>
      {iconsData.map((path, index) => {
        return (
          <Image
            key={path}
            width="24"
            height="20"
            src={path}
            alt={index.toString()}
          />
        );
      })}
    </div>
  );
}

export default TopSection;
