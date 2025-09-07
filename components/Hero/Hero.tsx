import React from "react";
import AnalyticsItem from "./AnalyticsItem";
import FishComponent from "./FishComponent";

const HeroSection: React.FC = () => {
  return (
    <section className=" bg-sidebar rounded-2xl relative ">
      {/* Background decorative elements */}
      {/* <div className="absolute inset-0 bg-[url('/path-to-pattern.png')] opacity-10"></div> */}
      <div className="container mx-auto px-6 pb-2">
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-8 items-center">
          {/* Left Analytics */}
          <div className="space-y-6">
            <AnalyticsItem
              title="Water Quality"
              items={[
                { label: "Dissolved Oxygen", value: "6.2", unit: "mg/L" },
                { label: "Temperature", value: "15", unit: "°C" },
                { label: "TDS", value: "6.2", unit: "ppm" },
                { label: "Salinity", value: "6.2", unit: "ppt" },
              ]}
            />

            <AnalyticsItem
              title="Growth Status"
              items={[
                { label: "Avg Weight", value: "6.2", unit: "g" },
                { label: "Growth Rate", value: "15", unit: "g/day" },
                { label: "Length", value: "12.5", unit: "cm" },
                { label: "Age", value: "45", unit: "days" },
              ]}
            />
          </div>

          {/* Center - Main Content */}
          <div className="text-center">
            {/* Your fish image and main content here */}
            <div className="-mt-20">
              {/* <img
                src="/tilapia-fish.png"
                alt="Tilapia Fish"
                className="w-64 h-auto mx-auto"
              /> */}
              <FishComponent FillColor="red" />
            </div>
            <h1 className="text-white text-4xl font-bold mb-4">Tilapia</h1>
            <p className="text-white/80 text-lg">Day 45/90</p>
          </div>

          {/* Right Analytics */}
          <div className="space-y-6">
            <AnalyticsItem
              title="Device Health"
              items={[
                { label: "Status", value: "Connected" },
                { label: "Uptime", value: "6.2", unit: "hrs" },
                { label: "Battery", value: "85", unit: "%" },
                { label: "Signal", value: "-42", unit: "dBm" },
              ]}
            />

            <AnalyticsItem
              title="Maintenance"
              items={[
                { label: "Filter Status", value: "Good" },
                { label: "Next Service", value: "3", unit: "days" },
                { label: "Sensor Check", value: "7", unit: "days" },
                { label: "Last Clean", value: "2", unit: "days ago" },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
