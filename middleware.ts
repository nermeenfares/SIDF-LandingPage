// middleware.ts
import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./next-intl.config";

export default createMiddleware({
  // List all locales you support
  locales,
  defaultLocale,
});

export const config = {
  // Enable this middleware for all relevant routes
  matcher: ["/", "/(en|ar)/:path*"],
};
