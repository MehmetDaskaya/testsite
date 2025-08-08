"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  // Extract current locale from pathname
  const currentLocale = pathname.split("/")[1] || "en";

  const languages = [
    {
      code: "en",
      name: "English",
      flag: (
        <svg
          className="w-5 h-5"
          viewBox="0 0 60 30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="60" height="30" fill="#012169" />
          <path d="M0 0L60 30M60 0L0 30" stroke="#fff" strokeWidth="3" />
          <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="5" />
          <path d="M0 0L60 30M60 0L0 30" stroke="#C8102E" strokeWidth="2" />
          <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="3" />
        </svg>
      ),
    },
    {
      code: "tr",
      name: "Türkçe",
      flag: (
        <svg
          className="w-5 h-5"
          viewBox="0 0 1200 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="1200" height="800" fill="#E30A17" />
          <circle cx="425" cy="400" r="200" fill="#ffffff" />
          <circle cx="475" cy="400" r="160" fill="#E30A17" />
          <polygon
            points="583.334,400 764.235,458.779 652.431,304.894 652.431,495.106 764.235,341.221"
            fill="#ffffff"
          />
        </svg>
      ),
    },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === currentLocale) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchLanguage = (localeCode) => {
    setIsOpen(false);

    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "") || "/";

    // Navigate to new locale
    router.push(`/${localeCode}${pathWithoutLocale}`);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#2d4d44] focus:ring-opacity-50"
        aria-label="Language switcher"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <div className="flex items-center space-x-2">
          {currentLanguage.flag}
          <span className="text-sm font-medium text-[#1a2e1a] hidden sm:block">
            {currentLanguage.code.toUpperCase()}
          </span>
        </div>
        <svg
          className={`w-4 h-4 text-[#54655e] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => switchLanguage(language.code)}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 ${
                currentLocale === language.code
                  ? "bg-[#e7f0ea] text-[#1a2e1a]"
                  : "text-[#54655e]"
              }`}
            >
              {language.flag}
              <span className="text-sm font-medium">{language.name}</span>
              {currentLocale === language.code && (
                <svg
                  className="w-4 h-4 ml-auto text-[#2d4d44]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
