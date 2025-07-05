import AboutSection from "@/components/landingPageSections/AboutSection";
import BottomNavigationSection from "@/components/landingPageSections/BottomNavigationSection";
import HeroSection from "@/components/landingPageSections/hero";
import StatisticsComponent from "@/components/landingPageSections/StaticsComponent";
import AngledTabsSection from "@/components/landingPageSections/TabsSection";
import ValuesComponent from "@/components/landingPageSections/ValuesComponent";

export default function Home() {
  return (
    <main className="min-h-screen pt-32 bg-white flex gap-5 flex-col items-center justify-center text-center px-4">
      <HeroSection />
      <AngledTabsSection />
      <AboutSection />
      <ValuesComponent />
      <StatisticsComponent />
      <BottomNavigationSection />
    </main>
  );
}
