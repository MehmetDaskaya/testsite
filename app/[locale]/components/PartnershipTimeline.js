"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useDictionary } from "../../../lib/DictionaryContext";

export default function PartnershipTimeline({ data }) {
  const dictionary = useDictionary();
  const { timeline } = dictionary.partnerships;
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const iconClass = "w-7 h-7 text-white block";
  const svgProps = {
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
  };

  // Pick an icon based on title/description keywords; fallback by index for variety
  const getIconForStep = (item, index) => {
    const text = `${item?.title ?? ""} ${
      item?.description ?? ""
    }`.toLowerCase();

    if (
      /discover|analysis|analyse|assessment|assess|araştır|analiz/.test(text)
    ) {
      // Magnifying glass (discovery/analysis)
      return (
        <svg className={iconClass} {...svgProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M21 21l-4.35-4.35"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
          />
        </svg>
      );
    }
    if (/strategy|strategi|plan|planning|roadmap|strateji/.test(text)) {
      // Target (strategy/planning)
      return (
        <svg className={iconClass} {...svgProps}>
          <circle cx="12" cy="12" r="8" strokeWidth={1.75} />
          <circle cx="12" cy="12" r="3" strokeWidth={1.75} />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M12 8v4l2 2"
          />
        </svg>
      );
    }
    if (
      /proposal|offer|scope|agreement|contract|sozlesme|sözleşme|mutabakat/.test(
        text
      )
    ) {
      // Document with check (proposal/agreement)
      return (
        <svg className={iconClass} {...svgProps}>
          <path
            strokeWidth={1.75}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6M9 16h6M9 8h6M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"
          />
          <path
            strokeWidth={1.75}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9 12 2 2 4-4"
          />
        </svg>
      );
    }
    if (
      /integrat|implementation|implement|onboard|entegre|kurulum|deploy/.test(
        text
      )
    ) {
      // Cog (integration/implementation)
      return (
        <svg className={iconClass} {...svgProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.89 3.31.877 2.42 2.42-.47.816-.121 1.86.747 2.317 1.642.888 1.117 3.292-.747 3.292a1.724 1.724 0 0 0-1.066 2.573c.89 1.543-.877 3.31-2.42 2.42a1.724 1.724 0 0 0-2.317.747c-.888 1.642-3.292 1.117-3.292-.747a1.724 1.724 0 0 0-2.573-1.066c-1.543.89-3.31-.877-2.42-2.42.47-.816.121-1.86-.747-2.317-1.642-.888-1.117-3.292.747-3.292.829 0 1.5-.672 1.5-1.5 0-.829.672-1.5 1.5-1.5.926 0 1.69-.635 1.9-1.508z"
          />
          <circle cx="12" cy="12" r="3" strokeWidth={1.75} />
        </svg>
      );
    }
    if (/pilot|poc|test|trial|deneme/.test(text)) {
      // Rocket (pilot/test)
      return (
        <svg className={iconClass} {...svgProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M5 13l4 4M5 13l3-8 8-3-3 8-8 3zm0 0v6l3-3"
          />
        </svg>
      );
    }
    if (/measure|report|metric|kpi|ölç|rapor|analytics/.test(text)) {
      // Bar chart (measurement/reporting)
      return (
        <svg className={iconClass} {...svgProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M3 3v18h18"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M7 13v5"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M11 9v9"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M15 5v13"
          />
        </svg>
      );
    }
    if (/support|train|training|destek|eğitim|education/.test(text)) {
      // Lifebuoy (support/training)
      return (
        <svg className={iconClass} {...svgProps}>
          <circle cx="12" cy="12" r="9" strokeWidth={1.75} />
          <circle cx="12" cy="12" r="3" strokeWidth={1.75} />
          <path
            strokeWidth={1.75}
            d="M4.5 7.5l3 3M16.5 19.5l-3-3M19.5 7.5l-3 3M7.5 19.5l3-3"
          />
        </svg>
      );
    }

    // Fallback variety by index (all normalized sizing)
    const fallbackSvgs = [
      // Handshake
      <svg key="a" className={iconClass} {...svgProps}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M8 11l4 4 8-8M4 7l4 4m0 0l2-2m-2 2L6 9"
        />
      </svg>,
      // Clipboard
      <svg key="b" className={iconClass} {...svgProps}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M9 5h6M9 3h6a2 2 0 012 2v1h1a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h1V5a2 2 0 012-2z"
        />
      </svg>,
      // Flow arrows
      <svg key="c" className={iconClass} {...svgProps}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M7 7h7a3 3 0 010 6H7m10 0h-3a3 3 0 000 6h3"
        />
      </svg>,
      // Shield check
      <svg key="d" className={iconClass} {...svgProps}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M12 3l8 4v5a9 9 0 11-18 0V7l10-4z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M9 12l2 2 4-4"
        />
      </svg>,
    ];
    return fallbackSvgs[index % fallbackSvgs.length];
  };

  return (
    <div ref={containerRef} className="relative w-full bg-[#f8faf8] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div style={{ y, opacity }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e1a] mb-4">
            {timeline.title}
          </h2>
          <p className="text-[#54655e] text-lg max-w-2xl mx-auto">
            {timeline.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2d4d44] via-[#54655e] to-transparent transform -translate-x-1/2 hidden md:block" />

          {/* Mobile timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2d4d44] via-[#54655e] to-transparent md:hidden" />

          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-start mb-12 md:mb-20 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-white border-4 border-[#2d4d44] rounded-full transform -translate-x-1/2 z-10 flex items-center justify-center">
                <div className="w-3 h-3 bg-[#2d4d44] rounded-full" />
              </div>

              {/* Content card */}
              <div
                className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#2d4d44] to-[#54655e] rounded-xl flex items-center justify-center mr-4">
                      {getIconForStep(item, index)}
                    </div>
                    <h3 className="text-2xl font-bold text-[#1a2e1a]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-[#54655e] mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Achievement badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.achievements?.map((achievement, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#e7f0ea] text-[#2d4d44] text-sm rounded-full font-medium"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>

                  {/* Stats grid */}
                  {item.stats && (
                    <div className="grid grid-cols-2 gap-4">
                      {item.stats.map((stat, idx) => (
                        <div
                          key={idx}
                          className="text-center p-4 bg-[#f0f5f0] rounded-xl"
                        >
                          <div className="text-2xl font-bold text-[#1a2e1a]">
                            {stat.value}
                          </div>
                          <div className="text-sm text-[#54655e]">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
