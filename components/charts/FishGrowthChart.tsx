"use client";

import dynamic from "next/dynamic";
import React from "react";

// const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });
import Plot from "react-plotly.js";

const FishGrowthChart = () => {
  const data = [
    {
      month: "Jan",
      weightGain: 80,
      feed: 90,
      totalWeight: 200,
      idealWeight: 190,
    },
    {
      month: "Feb",
      weightGain: 120,
      feed: 110,
      totalWeight: 220,
      idealWeight: 215,
    },
    {
      month: "Mar",
      weightGain: 140,
      feed: 130,
      totalWeight: 250,
      idealWeight: 245,
    },
    {
      month: "Apr",
      weightGain: 90,
      feed: 100,
      totalWeight: 280,
      idealWeight: 275,
    },
    {
      month: "May",
      weightGain: 110,
      feed: 120,
      totalWeight: 310,
      idealWeight: 305,
    },
    {
      month: "Jun",
      weightGain: 160,
      feed: 180,
      totalWeight: 340,
      idealWeight: 335,
    },
    {
      month: "Jul",
      weightGain: 140,
      feed: 150,
      totalWeight: 370,
      idealWeight: 365,
    },
    {
      month: "Aug",
      weightGain: 100,
      feed: 120,
      totalWeight: 395,
      idealWeight: 390,
    },
    {
      month: "Sep",
      weightGain: 130,
      feed: 140,
      totalWeight: 415,
      idealWeight: 410,
    },
    {
      month: "Oct",
      weightGain: 80,
      feed: 90,
      totalWeight: 430,
      idealWeight: 425,
    },
    {
      month: "Nov",
      weightGain: 120,
      feed: 130,
      totalWeight: 445,
      idealWeight: 440,
    },
    {
      month: "Dec",
      weightGain: 70,
      feed: 80,
      totalWeight: 460,
      idealWeight: 455,
    },
  ];

  return (
    <div className=" @container/card bg-sidebar rounded-2xl">
      <div className="  flex items-center justify-between mb-4">
        <div>
          <h3 className="text-white text-lg font-medium">
            Fish Growth & Feeding
          </h3>
          <p className="text-green-400 text-sm">(+5) more in 2021</p>
        </div>
        <div className="text-gray-400 text-sm">March 2020</div>
      </div>

      <div className="h-80">
        <Plot
          data={[
            {
              x: data.map((d) => d.month),
              y: data.map((d) => d.weightGain),
              type: "bar",
              name: "Weight Gain",
              marker: { color: "#ef4444" },
            },
            {
              x: data.map((d) => d.month),
              y: data.map((d) => d.feed),
              type: "bar",
              name: "Feed",
              marker: { color: "#f97316" },
            },
            {
              x: data.map((d) => d.month),
              y: data.map((d) => d.totalWeight),
              type: "scatter",
              mode: "lines+markers",
              name: "Cumulative Total Weight",
              line: { color: "#60A5FA", width: 2 },
              marker: { size: 6 },
            },
            {
              x: data.map((d) => d.month),
              y: data.map((d) => d.idealWeight),
              type: "scatter",
              mode: "lines",
              name: "Ideal Weight",
              line: { color: "#10B981", width: 2, dash: "dash" },
            },
          ]}
          layout={{
            barmode: "group",
            margin: { t: 20, r: 30, l: 40, b: 40 },
            plot_bgcolor: "transparent",
            paper_bgcolor: "transparent",
            font: { color: "#9CA3AF", size: 12 },
            xaxis: {
              showgrid: false,
              zeroline: false,
            },
            yaxis: {
              gridcolor: "rgba(55,65,81,0.3)",
              zeroline: false,
            },
            legend: {
              orientation: "h",
              y: -0.3,
              x: 0,
            },
          }}
          config={{ responsive: true, displayModeBar: false }}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default FishGrowthChart;
