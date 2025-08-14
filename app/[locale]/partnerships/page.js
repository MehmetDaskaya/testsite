import ClientLayout from "../components/ClientLayout";
import PartnershipTimeline from "../components/PartnershipTimeline";
import { getDictionary } from "../../../lib/getDictionary";
import CallToAction from "../components/CallToAction";
import Image from "next/image";

export async function generateMetadata(props) {
  const { params } = await props;
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return {
    title: dict.partnerships.title,
    description: dict.partnerships.description,
    keywords:
      "FutureVerde, partnerships, collaboration, ESG, sustainability, green finance, technology partners, consulting partners, academic partnerships",
    openGraph: {
      title: dict.partnerships.title,
      description: dict.partnerships.description,
      type: "website",
      locale: locale,
      alternateLocale: locale === "en" ? "tr" : "en",
      url: `https://futureverde.com/${locale}/partnerships`,
      images: [
        {
          url: `https://futureverde.com/images/collaboration-futureverde.jpg`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.partnerships.title,
      description: dict.partnerships.description,
      images: ["https://futureverde.com/images/collaboration-futureverde.jpg"],
    },
    alternates: {
      canonical: `https://futureverde.com/${locale}/partnerships`,
      languages: {
        en: "https://futureverde.com/en/partnerships",
        tr: "https://futureverde.com/tr/partnerships",
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function PartnershipsPage(props) {
  const { params } = await props;
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const { partnerships } = dict;

  return (
    <ClientLayout>
      <main className="min-h-screen pt-10">
        {/* Hero Section with Parallax */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden mt-20">
          {/* Parallax Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#54655e]  via-[#2d4d44] to-[#1a2e1a]">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-20 left-20 w-32 h-32 bg-[#4ade80] rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#22c55e] rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#16a34a] rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center text-white">
            <div className="uppercase text-sm tracking-wider text-[#4ade80] font-medium mb-4">
              {partnerships.hero.subtitle}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {partnerships.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12">
              {partnerships.hero.description}
            </p>

            {/* Partnership Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-[#4ade80] mb-2">
                  50+
                </div>
                <div className="text-gray-200 text-sm md:text-base">
                  Strategic Partners
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-[#4ade80] mb-2">
                  100%
                </div>
                <div className="text-gray-200 text-sm md:text-base">
                  Success Rate
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-[#4ade80] mb-2">
                  24/7
                </div>
                <div className="text-gray-200 text-sm md:text-base">
                  Support Available
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="uppercase text-sm tracking-wider text-[#2d4d44] font-medium">
                  FUTUREVERDE
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2e1a] leading-tight">
                  {partnerships.intro.title}
                </h2>
                <p className="text-[#54655e] text-lg md:text-xl leading-relaxed">
                  {partnerships.intro.description}
                </p>

                {/* Partnership Benefits */}
                <div className="grid grid-cols-1 gap-4 mt-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#4ade80] rounded-full"></div>
                    <span className="text-[#54655e] font-medium">
                      Accelerated Innovation
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#4ade80] rounded-full"></div>
                    <span className="text-[#54655e] font-medium">
                      Shared Expertise
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#4ade80] rounded-full"></div>
                    <span className="text-[#54655e] font-medium">
                      Market Expansion
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#4ade80] rounded-full"></div>
                    <span className="text-[#54655e] font-medium">
                      Sustainable Growth
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden aspect-square shadow-2xl">
                  <Image
                    src="/images/collaboration-futureverde.jpg"
                    alt="FutureVerde partnerships and collaboration"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    priority
                  />
                  {/* Overlay for better text readability if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Types Section */}
        <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#f8faf8]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2e1a] mb-6 leading-tight">
                {partnerships.partnershipTypes.title}
              </h2>
              <p className="text-[#54655e] text-lg md:text-xl max-w-3xl mx-auto">
                {partnerships.partnershipTypes.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Technology Partners */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#1a2e1a] mb-3">
                      {partnerships.partnershipTypes.technology.title}
                    </h3>
                    <p className="text-[#54655e] mb-4 leading-relaxed">
                      {partnerships.partnershipTypes.technology.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {partnerships.partnershipTypes.technology.benefits.map(
                        (benefit, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full font-medium"
                          >
                            {benefit}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Financial Institutions */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#1a2e1a] mb-3">
                      {partnerships.partnershipTypes.financial.title}
                    </h3>
                    <p className="text-[#54655e] mb-4 leading-relaxed">
                      {partnerships.partnershipTypes.financial.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {partnerships.partnershipTypes.financial.benefits.map(
                        (benefit, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full font-medium"
                          >
                            {benefit}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Consulting Partners */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#1a2e1a] mb-3">
                      {partnerships.partnershipTypes.consulting.title}
                    </h3>
                    <p className="text-[#54655e] mb-4 leading-relaxed">
                      {partnerships.partnershipTypes.consulting.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {partnerships.partnershipTypes.consulting.benefits.map(
                        (benefit, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full font-medium"
                          >
                            {benefit}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Academic Collaborations */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#1a2e1a] mb-3">
                      {partnerships.partnershipTypes.academic.title}
                    </h3>
                    <p className="text-[#54655e] mb-4 leading-relaxed">
                      {partnerships.partnershipTypes.academic.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {partnerships.partnershipTypes.academic.benefits.map(
                        (benefit, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-orange-50 text-orange-700 text-sm rounded-full font-medium"
                          >
                            {benefit}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section - Unchanged */}
        <PartnershipTimeline data={partnerships.timeline.milestones} />

        {/* CTA Section */}
        <CallToAction />
      </main>
    </ClientLayout>
  );
}
