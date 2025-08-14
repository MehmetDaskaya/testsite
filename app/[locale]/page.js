import Image from "next/image";
import CallToAction from "./components/CallToAction";
import ClientLayout from "./components/ClientLayout";
import KeyFeaturesTimeline from "./components/KeyFeaturesTimeline";
import InsightDots from "./components/InsightDots";
import { getDictionary } from "../../lib/getDictionary";
import heroImg from "../assets/futureverde-hero.webp";
import sustainabilityImg from "../assets/futureverde-sustainability.webp";
import GetStartedButton from "./components/GetStartedButton";
import ScrollDownButton from "./components/ScrollDownButton";

// SEO metadata for homepage
export async function generateMetadata(props) {
  const { params } = await props;
  const locale = (await params)?.locale ?? "en";
  const dictionary = await getDictionary(locale);
  const baseUrl = "https://futureverde.com";

  return {
    title: dictionary.title,
    description: dictionary.description,
    keywords:
      "FutureVerde, ESG reporting, sustainability, green finance, AI-powered reporting, environmental technology, sustainable development, ESG analysis, green financing solutions, sustainability platform",
    openGraph: {
      title: dictionary.title,
      description: dictionary.description,
      type: "website",
      locale: locale,
      url: `${baseUrl}/${locale}`,
      siteName: "FutureVerde",
      images: [
        {
          url: `${baseUrl}/images/fv-banner.webp`,
          width: 1200,
          height: 630,
          alt: dictionary.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.title,
      description: dictionary.description,
      images: [`${baseUrl}/images/fv-banner.webp`],
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        tr: `${baseUrl}/tr`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function FutureVerdePage(props) {
  const { params } = await props;
  const locale = (await params)?.locale ?? "en";
  const dictionary = await getDictionary(locale);
  const { hero, keyFeatures, welcome, insightDots } = dictionary;

  return (
    <ClientLayout>
      <main className="min-h-screen bg-[#f0f5f0]">
        {/* Hero Section */}
        <section className="relative w-full py-28 md:py-36 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center overflow-hidden">
          {/* Background Image - Slides from right */}
          <div className="absolute inset-0 z-0 animate-slide-in-right">
            <Image
              src={heroImg}
              alt="FutureVerde sustainability platform hero image"
              fill
              className="object-cover"
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
            <GetStartedButton locale={locale} text={hero.cta} />
          </div>

          {/* Right side spacer to maintain layout */}
          <div className="w-full md:w-1/2 relative mt-12 md:mt-0"></div>

          {/* Scroll down arrow - Slides from right */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-slide-in-right-delayed-2">
            <ScrollDownButton />
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
                  src={sustainabilityImg}
                  alt={welcome.imageAlt}
                  fill
                  className="object-cover rounded-xl"
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
