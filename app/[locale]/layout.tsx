import { Roboto } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { locales } from "@/next-intl.config";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const roboto = Roboto({ subsets: ["latin"] });

export const metadata = {
  title: "SIDF",
  description: "SIDF Landing Page",
};
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  // Get messages for the locale
  const messages = await getMessages();
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={roboto.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
          >
            <main>
              <Navbar />
              {children}
              <Footer />
            </main>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// import Footer from "@/components/layout/Footer";
// import Navbar from "@/components/layout/Navbar";
// import React from "react";

// export const metadata = {
//   title: "Metrological",
//   description: "Metrologocal Dashboard",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (

//   );
// }
