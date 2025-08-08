"use client";
import Image from "next/image";
import CallToAction from "../components/CallToAction";
import ClientLayout from "../components/ClientLayout";
import KeyFeaturesTimeline from "../components/KeyFeaturesTimeline";
import { useDictionary } from "../../../lib/DictionaryContext";

export default function FutureVerdePage() {
  const dictionary = useDictionary();
  const { hero, keyFeatures } = dictionary;

  return (
    <ClientLayout>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative w-full py-28 md:py-36 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center overflow-hidden">
          {/* Background Image - Smaller and right-aligned */}
          <div className="absolute top-0 right-[-15%] w-[100%] h-full z-0 animate-slide-in-right pointer-events-none">
            <Image
              src="/images/fv-banner.webp"
              alt="Hero background"
              layout="fill"
              objectFit="contain"
              objectPosition="right"
              priority
              className="bg-transparent"
            />
          </div>

          {/* Content - Slides from right */}
          <div className="w-full md:w-1/2 z-20 animate-slide-in-right-delayed">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a2e1a] mb-8 leading-tight">
              {hero.title}
            </h1>
            <p className="text-[#54655e] text-lg md:pr-12 mb-8">
              {hero.subtitle}
            </p>
            <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold py-4 px-8 rounded-full hover:from-blue-500 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2 group">
              <span>{hero.cta}</span>
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
          </div>

          {/* Right side spacer to maintain layout */}
          <div className="w-full md:w-1/2 relative mt-12 md:mt-0"></div>

          {/* Scroll down arrow - Slides from right */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-slide-in-right-delayed-2">
            <button
              onClick={() => {
                const nextSection = document.getElementById("welcome-section");
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="group animate-bounce-slow cursor-pointer hover:scale-110 transition-transform duration-300"
              aria-label="Scroll to next section"
            >
              <div className="w-12 h-12 bg-[#1a2e1a]/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#1a2e1a]/60 hover:bg-[#1a2e1a] transition-all duration-300 shadow-lg">
                <svg
                  className="w-6 h-6 text-white group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </button>
          </div>
        </section>

        {/* Welcome Section */}
        <section
          id="welcome-section"
          className="py-20 px-6 md:px-16 lg:px-24 bg-[#f0f5f0]"
        >
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <div className="relative rounded-xl overflow-hidden h-64 md:h-96">
                <Image
                  src="/images/factory.webp"
                  alt="Industrial facility with green chimney"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
                <div className="absolute bottom-0 left-0 bg-[#2d4d44] text-white p-6 md:p-8 rounded-tr-xl">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    GREEN
                    <br />
                    FINANCING &<br />
                    SUSTAINABILITY
                  </h3>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 md:pl-12">
              <div className="uppercase text-sm tracking-wider text-[#2d4d44] font-medium mb-4">
                FUTUREVERDE
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#18241c] mb-6">
                Welcome to
                <br />
                FutureVerde
              </h2>
              <p className="text-[#54655e] mb-6">
                FutureVerde is your forward-thinking technology partner on the
                path to sustainability.
              </p>
              <p className="text-[#54655e]  mb-6">
                Our intelligent, data-driven platform combines big data,
                advanced analytics, business intelligence, and AI to deliver a
                comprehensive suite for ESG Analysis, Reporting, and Green
                Financing.
              </p>
              <p className="text-[#54655e]  mb-6">
                Designed to help companies meet both national and international
                standards, FutureVerde enhances transparency, accuracy, and
                impact in sustainability reporting. With predictive
                technologies, our platform empowers businesses to anticipate
                risks, seize emerging opportunities, and make future-oriented,
                strategic decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features Timeline Section */}
        <KeyFeaturesTimeline data={keyFeatures.features} />

        {/* Sustainability Platform CTA */}
        <CallToAction />
      </main>
    </ClientLayout>
  );
}
