"use client";
import { useDictionary } from "../../../lib/DictionaryContext";
import { useRouter, usePathname } from "next/navigation";

export default function InsightDots() {
  const dictionary = useDictionary();
  const { insightDots } = dictionary;
  const router = useRouter();
  const pathname = usePathname();

  const handleInsightsClick = () => {
    // Extract locale from current pathname
    const locale = pathname.split("/")[1];
    router.push(`/${locale}/insights`);
  };

  return (
    <section className="py-20 px-6 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2e1a] mb-6">
            {insightDots.title}
          </h2>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {insightDots.insights.map((insight, index) => (
            <div key={index} className="text-center">
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <svg
                  className="w-16 h-16 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Quote Text */}
              <p className="text-lg md:text-xl text-[#1a2e1a] leading-relaxed mb-4">
                "{insight.quote}"
              </p>

              {/* Source */}
              <p className="text-sm font-bold text-[#54655e]">
                — {insight.source}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={handleInsightsClick}
            className="bg-[#2d4d44] text-white font-medium py-3 px-8 rounded-full hover:bg-[#1a2e1a] transition-all hover:scale-105 transform duration-200"
          >
            {insightDots.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
