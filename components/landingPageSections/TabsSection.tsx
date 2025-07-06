"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";

const tabs = [1, 2, 3, 4, 5]; // just ids

function AngledTabsSection() {
  const [activeTab, setActiveTab] = useState(5);
  const t = useTranslations("TabsSection");

  const handleTabClick = (tabId: number): void => {
    setActiveTab(tabId);
  };

  const renderTimeline = (tabId: number) => {
    const timelineKeys = [
      "tab" + tabId + "_timeline_item1_label",
      "tab" + tabId + "_timeline_item2_label",
      "tab" + tabId + "_timeline_item3_label",
    ];

    const values = [
      t(`tab${tabId}_timeline_item1_label_value`),
      t(`tab${tabId}_timeline_item2_label_value`),
      t(`tab${tabId}_timeline_item3_label_value`),
    ];

    const units = [
      t(`tab${tabId}_timeline_item1_label_unit`),
      t(`tab${tabId}_timeline_item2_label_unit`),
      t(`tab${tabId}_timeline_item3_label_unit`),
    ];

    const years = [
      t(`tab${tabId}_timeline_item1_label_year`),
      t(`tab${tabId}_timeline_item2_label_year`),
      t(`tab${tabId}_timeline_item3_label_year`),
    ];

    return timelineKeys.map((key, index) => (
      <div key={index} className="flex items-center gap-4">
        <div className="text-right text-gray-600 text-sm min-w-[120px]">
          {years[index]}
        </div>
        <div
          className="bg-green-600 text-white px-4 py-2 text-center min-w-[100px] font-bold"
          style={{
            clipPath: "polygon(0 0, calc(100% - 15px) 0, 100% 100%, 0 100%)",
          }}
        >
          <div className="text-lg">{values[index]}</div>
          <div className="text-xs opacity-90">{units[index]}</div>
        </div>
      </div>
    ));
  };

  return (
    <div className="w-full" dir="rtl">
      {/* Tabs Navigation */}
      <div className="flex gap-1 mb-8">
        {tabs.map((tabId, index) => {
          const isActive = activeTab === tabId;
          const isLast = index === tabs.length - 1;

          return (
            <div
              key={tabId}
              className="flex-1 cursor-pointer"
              onClick={() => handleTabClick(tabId)}
            >
              <div
                className={`
                  h-12 flex items-center justify-center text-center px-4 transition-all duration-300 group
                  ${
                    isActive
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-green-600 hover:text-white"
                  }
                  ${isLast ? "" : "border-r border-gray-200"}
                `}
                style={{
                  clipPath: isLast
                    ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                    : "polygon(0 0, calc(100% - 15px) 0, 100% 100%, 0 100%)",
                }}
              >
                <span className="text-sm font-medium whitespace-nowrap">
                  {t(`tab${tabId}_title`)}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="bg-background p-8 rounded-lg shadow-sm">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Timeline */}
          <div className="lg:w-1/3 space-y-4">{renderTimeline(activeTab)}</div>

          {/* Right Side - Content */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-green-600 mb-6">
              {t(`tab${activeTab}_content_title`)}
            </h2>
            <p className="text-foreground leading-relaxed text-lg">
              {t(`tab${activeTab}_content_description`)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AngledTabsSection;
