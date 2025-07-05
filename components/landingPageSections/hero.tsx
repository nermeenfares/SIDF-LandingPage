import React from "react";
export default function HeroSection() {
  return (
    <div className="relative pt-40 w-full h-screen overflow-hidden">
      <video
        src="/videos/video.mp4"
        autoPlay
        muted
        loop
        playsInline
        controls={true}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    </div>
  );
}
