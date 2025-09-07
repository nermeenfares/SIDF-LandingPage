"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before accessing localStorage
  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const storedDark = localStorage.getItem("dark_mode");
      setDarkMode(storedDark === "true");
    }
  }, []);

  useEffect(() => {
    if (mounted && typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", darkMode);
      localStorage.setItem("dark_mode", darkMode.toString());
    }
  }, [darkMode, mounted]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <Button variant="outline" size="icon" disabled>
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleDarkMode}
      className="relative transition-colors   border-accent rounded-xl text-accent-foreground "
      title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
