"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter, usePathname } from "next/navigation";
import { RootState } from "@/redux/store";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const darkMode = useSelector((state: RootState) => state.auth.dark_mode);
  const lang = useSelector((state: RootState) => state.auth.lang);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    // Handle language change by redirecting to correct locale
    if (lang && pathname) {
      const currentLocale = pathname.split("/")[1];
      if (
        currentLocale !== lang &&
        (currentLocale === "en" || currentLocale === "ar")
      ) {
        const newPath = pathname.replace(`/${currentLocale}`, `/${lang}`);
        router.push(newPath);
      }
    }
  }, [lang, pathname, router]);

  return <>{children}</>;
}
