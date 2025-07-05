import { getRequestConfig } from "next-intl/server";
import { locales } from "./next-intl.config";

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) {
    return {
      locale: "en",
      messages: (await import(`./messages/en.json`)).default,
    };
  }

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
