import Image from "next/image";
import { getDictionary } from "../../../lib/getDictionary";
import ClientLayout from "../components/ClientLayout";
import CallToAction from "../components/CallToAction";
import sustainabilityImg from "../../assets/futureverde-sustainability.webp";

// SEO metadata generation
export async function generateMetadata(props) {
  const { params } = await props;
  const locale = (await params)?.locale ?? "en";
  const dictionary = await import(`../../../locales/${locale}.json`);
  const dict = dictionary.default || dictionary;

  return {
    title: dict.about.title,
    description: dict.about.description,
    keywords:
      "FutureVerde, ESG, sustainability, green finance, AI reporting, environmental technology, GTech, fintech",
    openGraph: {
      title: dict.about.title,
      description: dict.about.description,
      type: "website",
      locale: locale,
      url: `https://futureverde.com/${locale}/about`,
      images: [
        {
          url: `https://futureverde.com/images/fv-banner.webp`,
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: {
      canonical: `https://futureverde.com/${locale}/about`,
      languages: {
        en: "https://futureverde.com/en/about",
        tr: "https://futureverde.com/tr/about",
      },
    },
    twitter: {
      card: "summary_large_image",
      title: dict.about.title,
      description: dict.about.description,
      images: ["https://futureverde.com/images/fv-banner.webp"],
    },
  };
}

export default async function AboutPage(props) {
  const { params } = await props;
  const locale = (await params)?.locale ?? "en";
  const dictionary = await getDictionary(locale);
  const { about } = dictionary;

  return (
    <ClientLayout>
      <main className="min-h-screen pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-[#2d4d44] py-20 mt-10 px-6 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-white">
                <div className="uppercase text-sm tracking-wider text-white/80 font-medium mb-4">
                  {about.hero.subtitle}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  {about.hero.title}
                </h1>
                <p className="text-white/90 text-lg mb-8 leading-relaxed">
                  {about.hero.description}
                </p>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                  <Image
                    src={sustainabilityImg}
                    alt="Industrial facility with sustainable green technology"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Description Section */}
        <section className="py-20 px-6 md:px-16 lg:px-24 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 text-lg leading-relaxed text-[#54655e]">
              <p>{about.company.paragraph1}</p>
              <p>{about.company.paragraph2}</p>
              <p>{about.company.paragraph3}</p>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#2d4d44]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Green Financing */}
              <div className="text-center text-white">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">
                  {about.highlights.greenFinancing.title}
                </h3>
              </div>

              {/* Innovative Technologies */}
              <div className="text-center text-white border-l border-r border-white/20 md:px-8">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">
                  {about.highlights.innovativeTech.title}
                </h3>
              </div>

              {/* Experience */}
              <div className="text-center text-white">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">
                  {about.highlights.experience.title}
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Company Facts Section */}
        <section className="py-20 px-6 md:px-16 lg:px-24 bg-[#2d4d44]">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {Object.values(about.facts).map((fact, index) => (
                <div key={index} className="flex items-start text-white">
                  <div className="flex-shrink-0 w-2 h-2 bg-white rounded-full mt-3 mr-6"></div>
                  <p className="text-lg leading-relaxed">{fact}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-6 md:px-16 lg:px-24 bg-[#e7f0ea]">
          <div className="max-w-7xl mx-auto">
            {/* Founders Section */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e1a] mb-12 text-center">
                {about.team.founders.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* CEO - Şölen Yıldırım */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="aspect-square relative">
                    <Image
                      src="/images/team/solen-yildirim.png"
                      alt="Şölen Yıldırım - CEO"
                      fill
                      className="object-cover grayscale brightness-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1a2e1a] mb-2">
                      Şölen Yıldırım
                    </h3>
                    <p className="text-[#54655e] mb-4 font-semibold">
                      {about.team.founders.ceo}
                    </p>
                    <a
                      href="https://linkedin.com/in/solen-yildirim-88723a2/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-100 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Sarp Taşkaya */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="aspect-square relative">
                    <Image
                      src="/images/team/sarp-taskaya.png"
                      alt="Sarp Taşkaya"
                      fill
                      className="object-cover grayscale brightness-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1a2e1a] mb-2">
                      Sarp Taşkaya
                    </h3>
                    <p className="text-[#54655e] mb-4">
                      {about.team.founders.operations}
                    </p>
                    <a
                      href="https://www.linkedin.com/in/sarptaskaya/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-100 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Boğaçhan Peksü */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="aspect-square relative">
                    <Image
                      src="/images/team/bogachan-peksu.png"
                      alt="Boğaçhan Peksü"
                      fill
                      className="object-cover grayscale brightness-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1a2e1a] mb-2">
                      Boğaçhan Peksü
                    </h3>
                    <p className="text-[#54655e] mb-4">
                      {about.team.founders.finance}
                    </p>
                    <a
                      href="https://www.linkedin.com/in/bo%C4%9Fa%C3%A7han-peks%C3%BC/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-100 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e1a] mb-12 text-center">
                {about.team.members.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Erkam Demirci */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="aspect-square relative">
                    <Image
                      src="/images/team/erkam-demirci.png"
                      alt="Erkam Demirci"
                      fill
                      className="object-cover grayscale brightness-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1a2e1a] mb-2">
                      Erkam Demirci
                    </h3>
                    <p className="text-[#54655e] mb-4">
                      {about.team.members.seniorFrontend}
                    </p>
                    <a
                      href="https://www.linkedin.com/in/erkamdemirci/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-100 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* İsmail Öztürk */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="aspect-square relative">
                    <Image
                      src="/images/team/ismail-ozturk.png"
                      alt="İsmail Öztürk"
                      fill
                      className="object-cover grayscale brightness-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1a2e1a] mb-2">
                      İsmail Öztürk
                    </h3>
                    <p className="text-[#54655e] mb-4">
                      {about.team.members.seniorBackend}
                    </p>
                    <a
                      href="https://www.linkedin.com/in/ismail%C3%B6zt%C3%BCrk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-100 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Mehmet Daşkaya */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="aspect-square relative">
                    <Image
                      src="/images/team/mehmet-daskaya.png"
                      alt="Mehmet Daşkaya"
                      fill
                      className="object-cover grayscale brightness-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1a2e1a] mb-2">
                      Mehmet Daşkaya
                    </h3>
                    <p className="text-[#54655e] mb-4">
                      {about.team.members.frontend}
                    </p>
                    <a
                      href="https://www.linkedin.com/in/mehmetdaskaya/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-100 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <CallToAction />
      </main>
    </ClientLayout>
  );
}
