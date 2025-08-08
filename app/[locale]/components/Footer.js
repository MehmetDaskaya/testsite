"use client";

// components/Footer.jsx
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDictionary } from "../../../lib/DictionaryContext";

export default function Footer() {
  const pathname = usePathname();
  const dictionary = useDictionary();
  const { nav } = dictionary;

  // Extract current locale from pathname
  const currentLocale = pathname.split("/")[1] || "en";
  return (
    <footer className="bg-[#0f1a0f] text-white py-12 px-6 md:px-16 lg:px-24">
      <div className="flex flex-col space-y-10">
        <div className="flex flex-wrap justify-between items-center">
          <nav className="flex flex-wrap gap-x-8 gap-y-4">
            <Link
              href={`/${currentLocale}`}
              className="text-white hover:text-gray-300 border-b border-white pb-1"
            >
              {nav.home}
            </Link>
            <Link
              href={`/${currentLocale}/about`}
              className="text-white hover:text-gray-300"
            >
              {nav.about}
            </Link>
            <Link
              href={`/${currentLocale}/solution`}
              className="text-white hover:text-gray-300"
            >
              {nav.solution}
            </Link>
            {/* Removed non-existent features page link to avoid 404 */}

            <Link
              href={`/${currentLocale}/partnerships`}
              className="text-white hover:text-gray-300"
            >
              {nav.partnerships}
            </Link>

            <Link
              href={`/${currentLocale}/contact`}
              className="text-white hover:text-gray-300"
            >
              {nav.contact}
            </Link>
          </nav>
        </div>

        <div className="h-px w-full bg-gray-800"></div>

        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-300">
              Maslak, Dereboyu 2 Cd,
              <br />
              34485 Sarıyer/İstanbul
            </p>
          </div>
          <div className="mb-6 md:mb-0">
            <p className="text-gray-300">(0212) 285 99 75</p>
            <p className="text-gray-300">info@futureverde.com</p>
          </div>
        </div>

        <div className="h-12"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-gray-400">
              FutureVerde © {new Date().getFullYear()}. All Rights Reserved.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <button
              className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-all"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
