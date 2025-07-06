import { getRequestConfig } from "next-intl/server";
import { locales } from "./next-intl.config";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` is among the supported ones
  if (!locales.includes(locale as any)) {
    // If not, default to 'ar' (Arabic) and load its messages
    return {
      locale: "ar", // Explicitly return 'ar' as the locale
      messages: (await import(`./messages/ar.json`)).default,
    };
  }

  // If the locale is supported, load its messages
  return {
    locale, // Explicitly return the provided locale
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
