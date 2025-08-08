"use client";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import CallToAction from "./components/CallToAction";
import ClientLayout from "./components/ClientLayout";
import KeyFeaturesTimeline from "./components/KeyFeaturesTimeline";
import InsightDots from "./components/InsightDots";
import { useDictionary } from "../../lib/DictionaryContext";

// Note: Home is a client component; we expose a server-side metadata via a route-level file would be ideal.
// As a pragmatic improvement, add a server export below in a separate file if needed. For now, we leave as-is to avoid drastic refactor.

export default function FutureVerdePage() {
  const dictionary = useDictionary();
  const { hero, keyFeatures, welcome, insightDots } = dictionary;
  const router = useRouter();
  const pathname = usePathname();

  const handleGetStartedClick = () => {
    const locale = pathname.split("/")[1];
    router.push(`/${locale}/solution`);
  };

  return (
    <ClientLayout>
      <main className="min-h-screen bg-[#f0f5f0]">
        {/* Hero Section */}
        <section className="relative w-full py-28 md:py-36 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center overflow-hidden">
          {/* Background Image - Slides from right */}
          <div className="absolute inset-0 z-0 animate-slide-in-right">
            <Image
              src="https://future.codobilisim.com/wp-content/uploads/2025/04/Artboard-1-1.png"
              alt="Hero background"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          {/* Content - Slides from right */}
          <div className="w-full md:w-1/2 z-20 animate-slide-in-right-delayed">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2e1a] mb-8 leading-tight">
              {hero.title}
            </h1>
            <p className="text-[#54655e] text-lg md:pr-12 mb-8">
              {hero.subtitle}
            </p>
            <button
              onClick={handleGetStartedClick}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 px-8 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center space-x-2 group hover:scale-105 transform"
            >
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
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <div className="relative rounded-xl overflow-hidden h-64 md:h-96">
                <Image
                  src="https://future.codobilisim.com/wp-content/uploads/elementor/thumbs/Resim2-r4k5g82mckgdgmc6csnnp5q3k6333pc25j0w0ekvmc.jpg"
                  alt={welcome.imageAlt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
                <div className="absolute bottom-0 left-0 bg-[#2d4d44] text-white p-6 md:p-8 rounded-tr-xl">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {welcome.overlayTitle.split(" ").map((word, index) => (
                      <span key={index}>
                        {word}
                        {index < welcome.overlayTitle.split(" ").length - 1 && (
                          <br />
                        )}
                      </span>
                    ))}
                  </h3>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 md:pl-12">
              <div className="uppercase text-sm tracking-wider text-[#2d4d44] font-medium mb-4">
                {welcome.subtitle}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#18241c] mb-6">
                {welcome.title.split(" ").map((word, index) => (
                  <span key={index}>
                    {word}
                    {index < welcome.title.split(" ").length - 1 && <br />}
                  </span>
                ))}
              </h2>
              <p className="text-[#54655e] mb-6">{welcome.description1}</p>
              <p className="text-[#54655e] mb-6">{welcome.description2}</p>
              <p className="text-[#54655e] mb-6">{welcome.description3}</p>
            </div>
          </div>
        </section>

        {/* Key Features Timeline Section */}
        <KeyFeaturesTimeline data={keyFeatures.features} />

        {/* InsightDots Section */}
        <InsightDots />

        {/* Sustainability Platform CTA */}
        <CallToAction />
      </main>
    </ClientLayout>
  );
}
