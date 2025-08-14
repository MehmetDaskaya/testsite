import ClientLayout from "../components/ClientLayout";
import { getDictionary } from "../../../lib/getDictionary";
import CallToAction from "../components/CallToAction";

export async function generateMetadata(props) {
  const { params } = await props;
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return {
    title: dict.insights.title,
    description: dict.insights.description,
    keywords:
      "FutureVerde, sustainability insights, ESG trends, regulatory landscape, consumer behavior, circular economy, sustainable finance, business outcomes",
    openGraph: {
      title: dict.insights.title,
      description: dict.insights.description,
      type: "website",
      locale: locale,
      alternateLocale: locale === "en" ? "tr" : "en",
      url: `https://futureverde.com/${locale}/insights`,
      images: [
        {
          url: `https://futureverde.com/images/fv-banner.webp`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.insights.title,
      description: dict.insights.description,
      images: ["https://futureverde.com/images/fv-banner.webp"],
    },
    alternates: {
      canonical: `https://futureverde.com/${locale}/insights`,
      languages: {
        en: "https://futureverde.com/en/insights",
        tr: "https://futureverde.com/tr/insights",
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function InsightsPage(props) {
  const { params } = await props;
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const { insights } = dict;

  return (
    <ClientLayout>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="uppercase text-sm tracking-wider text-[#2d4d44] font-medium mb-4">
              {insights.hero.subtitle}
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a2e1a] mb-6 leading-tight">
              {insights.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-[#54655e] max-w-3xl mx-auto leading-relaxed">
              {insights.hero.description}
            </p>
          </div>
        </section>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 pb-20">
          {/* Regulatory Landscape Section */}
          <article className="mb-20">
            <header className="mb-12">
              <div className="text-sm text-[#4ade80] font-semibold mb-2">
                {insights.sections.regulatory.subtitle}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e1a] leading-tight">
                {insights.sections.regulatory.title}
              </h2>
            </header>

            <div className="space-y-8">
              {insights.sections.regulatory.insights.map((insight, index) => (
                <div key={index} className="border-l-4 border-[#4ade80] pl-8">
                  <p className="text-lg md:text-xl text-[#1a2e1a] leading-relaxed mb-3">
                    {insight.text}
                  </p>
                  <cite className="text-sm text-[#54655e] italic">
                    — {insight.source}
                  </cite>
                </div>
              ))}
            </div>
          </article>

          {/* Divider */}
          <hr className="border-t border-gray-200 my-16" />

          {/* Consumer Behavior Section */}
          <article className="mb-20">
            <header className="mb-12">
              <div className="text-sm text-[#22c55e] font-semibold mb-2">
                {insights.sections.consumer.subtitle}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e1a] leading-tight">
                {insights.sections.consumer.title}
              </h2>
            </header>

            <div className="space-y-8">
              {insights.sections.consumer.insights.map((insight, index) => (
                <div key={index} className="border-l-4 border-[#22c55e] pl-8">
                  <p className="text-lg md:text-xl text-[#1a2e1a] leading-relaxed mb-3">
                    {insight.text}
                  </p>
                  <cite className="text-sm text-[#54655e] italic">
                    — {insight.source}
                  </cite>
                </div>
              ))}
            </div>
          </article>

          {/* Divider */}
          <hr className="border-t border-gray-200 my-16" />

          {/* Circular Economy Section */}
          <article className="mb-20">
            <header className="mb-12">
              <div className="text-sm text-[#16a34a] font-semibold mb-2">
                {insights.sections.circular.subtitle}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e1a] leading-tight">
                {insights.sections.circular.title}
              </h2>
            </header>

            <div className="space-y-8">
              {insights.sections.circular.insights.map((insight, index) => (
                <div key={index} className="border-l-4 border-[#16a34a] pl-8">
                  <p className="text-lg md:text-xl text-[#1a2e1a] leading-relaxed mb-3">
                    {insight.text}
                  </p>
                  <cite className="text-sm text-[#54655e] italic">
                    — {insight.source}
                  </cite>
                </div>
              ))}
            </div>
          </article>

          {/* Divider */}
          <hr className="border-t border-gray-200 my-16" />

          {/* Sustainable Finance Section */}
          <article className="mb-20">
            <header className="mb-12">
              <div className="text-sm text-[#2d4d44] font-semibold mb-2">
                {insights.sections.finance.subtitle}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e1a] leading-tight">
                {insights.sections.finance.title}
              </h2>
            </header>

            <div className="space-y-8">
              {insights.sections.finance.insights.map((insight, index) => (
                <div key={index} className="border-l-4 border-[#2d4d44] pl-8">
                  <p className="text-lg md:text-xl text-[#1a2e1a] leading-relaxed mb-3">
                    {insight.text}
                  </p>
                  <cite className="text-sm text-[#54655e] italic">
                    — {insight.source}
                  </cite>
                </div>
              ))}
            </div>
          </article>

          {/* Divider */}
          <hr className="border-t border-gray-200 my-16" />

          {/* Business Outcomes Section */}
          <article className="mb-20">
            <header className="mb-12">
              <div className="text-sm text-[#54655e] font-semibold mb-2">
                {insights.sections.business.subtitle}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e1a] leading-tight">
                {insights.sections.business.title}
              </h2>
            </header>

            <div className="space-y-8">
              {insights.sections.business.insights.map((insight, index) => (
                <div key={index} className="border-l-4 border-[#54655e] pl-8">
                  <p className="text-lg md:text-xl text-[#1a2e1a] leading-relaxed mb-3">
                    {insight.text}
                  </p>
                  <cite className="text-sm text-[#54655e] italic">
                    — {insight.source}
                  </cite>
                </div>
              ))}
            </div>
          </article>
        </div>
        {/* Call to Action */}
        <CallToAction />
      </main>
    </ClientLayout>
  );
}
