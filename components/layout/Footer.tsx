"use client";
import React from "react";
import { Button } from "../ui/button";

function Footer() {
  return (
    <div className="fixed bottom-0 bg-light w-full p-3 flex justify-between items-center z-50">
      <p className="text-black font-light text-heading">
        METAR HECA 201115Z AUTO 04001KT NCD 27/8 Q1008
      </p>
      <div className=" flex gap-3">
        <Button className="py-3 px-5 bg-accent border-none rounded-none">
          SAVE METAR (10)
        </Button>
        <Button className="py-3 px-5 bg-accent border-none rounded-none">
          Save SPECI
        </Button>
      </div>
    </div>
  );
}

export default Footer;
