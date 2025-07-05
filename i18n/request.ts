import { getRequestConfig } from "next-intl/server";
import { locales } from "./navigation"; // Assuming locales are exported from navigation
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = requestLocale;
  const locale = locales.includes(requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
