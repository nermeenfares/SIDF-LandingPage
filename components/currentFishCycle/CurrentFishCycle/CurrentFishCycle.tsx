import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Droplets, Thermometer, TestTube, Activity, Zap } from "lucide-react";

const CurrentFishCycle = () => {
  const alerts = [
    {
      id: "do",
      title: "DO",
      description: "DO sensor catch 5 alerts Check the water",
      icon: <Activity className="h-4 w-4" />,
    },
    {
      id: "tds",
      title: "TDS",
      description: "TDS sensor catch 5 alerts Check the water",
      icon: <TestTube className="h-4 w-4" />,
    },
    {
      id: "salinity",
      title: "Salinity",
      description: "Salinity sensor catch 5 alerts Check the water",
      icon: <Droplets className="h-4 w-4" />,
    },
    {
      id: "temperature",
      title: "Temperature",
      description: "Temperature sensor catch 5 alerts Check the water",
      icon: <Thermometer className="h-4 w-4" />,
    },
    {
      id: "ph",
      title: "PH",
      description: "ph sensor catch 5 alerts Check the water",
      icon: <Zap className="h-4 w-4" />,
    },
  ];

  return (
    <Card className="  bg-sidebar space-y-6 w-[500px] rounded-2xl shrink-0 h-fit border-card-custom-border">
      <div>
        <h2 className="text-white text-lg font-medium mb-6">
          Current Fish Cycle
        </h2>

        {/* Circular Progress */}
        <div className="flex items-center justify-center mb-8">
          <div className="relative">
            <svg
              className="w-32 h-32 transform -rotate-90"
              viewBox="0 0 100 100"
            >
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="rgb(51, 65, 85)"
                strokeWidth="8"
              />
              {/* Progress circle */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="url(#gradient)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray="251.2"
                strokeDashoffset="125.6"
                className="transition-all duration-500"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-white text-2xl font-bold">45/90</div>
                <div className="text-gray-400 text-sm">Day</div>
              </div>
            </div>
          </div>
        </div>

        {/* Fish Info */}
        <div className="text-center mb-8">
          <h3 className="text-white text-xl font-medium">Tilapia</h3>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="text-gray-400 text-sm mb-1">Total Biomass</div>
            <div className="text-white text-xl font-bold">
              1,250
              <span className="text-sm font-normal text-gray-400 ml-1">kg</span>
            </div>
          </div>
          <div>
            <div className="text-gray-400 text-sm mb-1">
              Feed Conversion Ratio
            </div>
            <div className="text-white text-xl font-bold">1.2</div>
          </div>
        </div>
      </div>

      {/* Update Stock Button */}
      <div className="flex justify-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors">
          Update Stock
        </button>
      </div>
    </Card>
  );
};

export default CurrentFishCycle;
