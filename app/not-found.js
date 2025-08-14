"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./globals.css";

export default function NotFound() {
  const pathname = usePathname();
  const [locale, setLocale] = useState("en");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Extract locale from the current path
    const localeMatch = pathname.match(/^\/([a-z]{2})/);
    const currentLocale = localeMatch ? localeMatch[1] : "en";

    // Check if the detected locale is valid
    const isValidLocale = ["en", "tr"].includes(currentLocale);
    const detectedLocale = isValidLocale ? currentLocale : "en";

    setLocale(detectedLocale);
    setIsLoaded(true);
  }, [pathname]);

  // Don't render until we've detected the locale
  if (!isLoaded) {
    return <div className="min-h-screen bg-[#f0f5f0]"></div>;
  }

  // Content based on detected locale
  const content = {
    en: {
      title: "Page Not Found",
      description:
        "The page you're looking for doesn't exist or has been moved. Let's get you back on track to building a sustainable future.",
      goHome: "Go Home",
      contactSupport: "Contact Support",
      aboutUs: "About Us",
      aboutUsDesc: "Learn about our mission and team",
      ourSolution: "Our Solution",
      ourSolutionDesc: "Discover our sustainability platform",
      insights: "Insights",
      insightsDesc: "Read our latest sustainability insights",
      footerNote: "If you believe this is an error, please contact us at",
    },
    tr: {
      title: "Sayfa Bulunamadı",
      description:
        "Aradığınız sayfa mevcut değil veya taşınmış. Sürdürülebilir bir gelecek inşa etme yolculuğunuza devam etmenize yardımcı olalım.",
      goHome: "Ana Sayfaya Git",
      contactSupport: "Destek Al",
      aboutUs: "Hakkımızda",
      aboutUsDesc: "Misyonumuzu ve ekibimizi öğrenin",
      ourSolution: "Çözümümüz",
      ourSolutionDesc: "Sürdürülebilirlik platformumuzu keşfedin",
      insights: "Görüşler",
      insightsDesc: "En son sürdürülebilirlik görüşlerimizi okuyun",
      footerNote:
        "Bunun bir hata olduğunu düşünüyorsanız, lütfen bizimle iletişime geçin:",
    },
  };

  const t = content[locale];

  return (
    <div className="min-h-screen bg-[#f0f5f0] flex items-center justify-center px-6">
      <div className="max-w-4xl my-10 mx-auto text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-[#1a2e1a] leading-none">
            4<span className="text-[#4ade80]">0</span>4
          </h1>
        </div>

        {/* Main Message */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d4d44] mb-6">
            {t.title}
          </h2>
          <p className="text-xl md:text-2xl text-[#54655e] max-w-2xl mx-auto leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="relative mb-12">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-[#4ade80]/20 rounded-full blur-3xl animate-pulse"></div>
          </div>
          <div className="relative z-10">
            <div className="w-24 h-24 bg-gradient-to-br from-[#4ade80] to-[#22c55e] rounded-full mx-auto flex items-center justify-center shadow-2xl">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href={`/${locale}`}
            className="bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold py-4 px-8 rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {t.goHome}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="bg-white text-[#2d4d44] font-semibold py-4 px-8 rounded-full border-2 border-[#2d4d44] hover:bg-[#2d4d44] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {t.contactSupport}
          </Link>
        </div>

        {/* Additional Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <Link
            href={`/${locale}/about`}
            className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
          >
            <div className="text-[#4ade80] mb-3">
              <svg
                className="w-8 h-8 mx-auto group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-[#1a2e1a] mb-2">{t.aboutUs}</h3>
            <p className="text-sm text-[#54655e]">{t.aboutUsDesc}</p>
          </Link>

          <Link
            href={`/${locale}/solution`}
            className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
          >
            <div className="text-[#4ade80] mb-3">
              <svg
                className="w-8 h-8 mx-auto group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-[#1a2e1a] mb-2">
              {t.ourSolution}
            </h3>
            <p className="text-sm text-[#54655e]">{t.ourSolutionDesc}</p>
          </Link>

          <Link
            href={`/${locale}/insights`}
            className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
          >
            <div className="text-[#4ade80] mb-3">
              <svg
                className="w-8 h-8 mx-auto group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-[#1a2e1a] mb-2">{t.insights}</h3>
            <p className="text-sm text-[#54655e]">{t.insightsDesc}</p>
          </Link>
        </div>

        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-[#54655e] text-sm">
            {t.footerNote}{" "}
            <a
              href="mailto:info@futureverde.com"
              className="text-[#4ade80] hover:text-[#22c55e] transition-colors duration-200"
            >
              info@futureverde.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
