import { Roboto } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
// import { locales } from "@/next-intl.config";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { locales } from "@/next-intl.config";

const roboto = Roboto({ subsets: ["latin"] });

export const metadata = {
  title: "SIDF",
  description: "SIDF Landing Page",
};

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  if (!locale || !(locale === "ar" || locale === "en")) {
    return <p>Invalid locale</p>;
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={roboto.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
          >
            <main className="bg-background text-foreground transition-colors duration-300">
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
