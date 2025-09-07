import AnalyticsSection from "@/components/Hero/AnalyticsSection";
import HeroSection from "@/components/Hero/Hero";
import { AppSidebar } from "@/components/app-sidebar";
import FishGrowthChart from "@/components/charts/FishGrowthChart";
import { ChartAreaInteractive } from "@/components/charts/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import { ChartConfig } from "@/components/ui/chart";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import WaterQualityAlerts from "@/components/waterQuality/WaterQuality";
import { chartData } from "@/data";

import data from "@/data.json";

export default function Page() {
  const chartConfig = {
    visitors: { label: "Visitors" },
    // desktop: {
    //   label: "Desktop",
    //   color: "hsl(210, 40%, 70%)",
    // },
    mobile: {
      label: "Mobile",
      color: "hsl(210, 40%, 60%)",
    },
  } satisfies ChartConfig;

  return (
    <SidebarProvider className="p-0">
      <AppSidebar className="ltr:left-2 rtl:right-2" variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              {/* <SectionCards /> */}
              {/* <AnalyticsSection /> */}
              <HeroSection />
              <div className="flex flex-col md:flex-row gap-3 p-4">
                <div className=" flex-1 min-w-0 ">
                  {" "}
                  {/* flex-1 for chart to take remaining space */}
                  <ChartAreaInteractive
                    title="Website Traffic"
                    description="Analytics for Q2"
                    data={chartData}
                    config={chartConfig}
                  />
                </div>
                {/* <div className=" flex-1 min-w-0 "></div> */}
                <WaterQualityAlerts />
              </div>
              <div className="flex  flex-col md:flex-row gap-3 p-4">
                {/* Left Side - Current Fish Cycle */}

                {/* Right Side - Chart */}

                <FishGrowthChart />
              </div>
              <DataTable data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
