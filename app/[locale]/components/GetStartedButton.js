"use client";

import { useRouter } from "next/navigation";

export default function GetStartedButton({ locale, text }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${locale}/solution`);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 px-8 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center space-x-2 group hover:scale-105 transform"
    >
      <span>{text}</span>
      <svg
        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        />
      </svg>
    </button>
  );
}
