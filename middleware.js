// middleware.js
import { NextResponse } from "next/server";
import Negotiator from "negotiator";
import { match as matchLocale } from "@formatjs/intl-localematcher";

const locales = ["en", "tr"];
const defaultLocale = "en";

function getLocale(request) {
  const negotiatorHeaders = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // Get languages from Accept-Language header
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  // Try to match with our supported locales
  try {
    return matchLocale(languages, locales, defaultLocale);
  } catch (error) {
    // Fallback to default locale if matching fails
    return defaultLocale;
  }
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Skip API routes entirely
  if (pathname.startsWith("/api")) return;

  // Check if the pathname already starts with a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Check if it's the root path
  if (pathname === "/") {
    const locale = getLocale(request);
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;
    return NextResponse.redirect(url, 308);
  }

  // For other paths without locale, redirect to default locale
  const locale = getLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: [
    "/((?!_next|favicon.ico|robots.txt|sitemap.xml|images|assets|api).*)",
  ],
};
