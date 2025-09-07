import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Droplets, Thermometer, TestTube, Activity, Zap } from "lucide-react";
import CustomCard from "../cards/CustomCard";

const WaterQualityAlerts = () => {
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
  const content = (
    <div className="space-y-2">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className="flex items-center justify-between p-3  h-14"
        >
          <div className="flex items-center space-x-3">
            <div className="bg-[#3182ce] p-2 rounded-lg text-white shrink-0">
              {alert.icon}
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-medium text-card-custom-text text-sm mb-0.5 truncate">
                {alert.title}
              </h3>
              <p className="text-muted-foreground text-xs truncate">
                {alert.description}
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-button-custom-secondary-text hover:text-button-custom-primary-text hover:bg-sidebar-custom-hover shrink-0 ml-2"
          >
            Reset
          </Button>
        </div>
      ))}
    </div>
  );
  return <CustomCard title="Water Quality Alerts" content={content} />;
};

export default WaterQualityAlerts;
