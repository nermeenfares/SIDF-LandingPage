import React from "react";

interface AnalyticsItemProps {
  title: string;
  items: Array<{
    label: string;
    value: string;
    unit?: string;
  }>;
}

const AnalyticsItem: React.FC<AnalyticsItemProps> = ({ title, items }) => {
  return (
    <div className="">
      {/* Header */}
      <h3 className="text-white/70 text-lg font-medium  text-center">
        {title}
      </h3>
      <div className="h-[2px] w-full max-w-md my-2 mx-auto bg-gradient-to-r from-transparent via-white to-transparent" />

      {/* Analytics Items in 2x2 Grid */}
      <div className="grid grid-cols-2 gap-2">
        {items.map((item, index) => (
          <div key={index} className="text-center">
            <div className="text-white/70 text-sm mb-1">{item.label}</div>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-white text-lg font-bold">{item.value}</span>
              {item.unit && (
                <span className="text-white/60 text-sm">{item.unit}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsItem;
