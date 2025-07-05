import React from "react";
import Image from "next/image";

type ValueCardProps = {
  icon: string;
  header: string;
  description: string;
  color: string;
};

function ValueCard({ icon, header, description, color }: ValueCardProps) {
  return (
    <div className="bg-[#f2f2f2] w-fit p-6 shadow-[4px_4px_10px_rgba(0,0,0,0.05)] flex flex-col items-center text-center">
      <Image src={icon} alt={header} width={64} height={64} />
      <h3 className="mt-4 text-lg font-bold" style={{ color }}>
        {header}
      </h3>
      <p className="mt-2 text-sm leading-relaxed" style={{ color: "#63696d" }}>
        {description}
      </p>
    </div>
  );
}

export default ValueCard;
