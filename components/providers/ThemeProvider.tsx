"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [lang, setLang] = useState<string>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const storedDark = localStorage.getItem("dark_mode");
      const storedLang = localStorage.getItem("lang");

      setDarkMode(storedDark === "true");
      setLang(storedLang === "ar" ? "ar" : "en");
    }
  }, []);

  useEffect(() => {
    if (mounted && typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", darkMode);
    }
  }, [darkMode, mounted]);

  useEffect(() => {
    if (!pathname || !lang || !mounted) return;

    const segments = pathname.split("/");
    const currentLocale = segments[1];

    if (
      (currentLocale === "en" || currentLocale === "ar") &&
      currentLocale !== lang
    ) {
      const newPath = `/${lang}${pathname.substring(currentLocale.length + 1)}`;
      router.push(newPath);
    }
  }, [lang, pathname, router, mounted]);

  // Prevent hydration mismatch
  if (!mounted) {
    return <>{children}</>;
  }

  return <>{children}</>;
}
