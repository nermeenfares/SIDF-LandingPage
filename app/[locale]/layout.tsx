import type { Metadata } from "next";
import "@/app/globals.css";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: "My App",
  description: "Dashboard example with shadcn",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await Promise.resolve(params);
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className="m-0 p-0 min-h-screen bg-background ">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
