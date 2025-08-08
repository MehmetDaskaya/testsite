import ClientLayout from "../components/ClientLayout";
import { getDictionary } from "../../../lib/getDictionary";
import ContactForm from "../components/ContactForm";

export async function generateMetadata({ params: { locale } }) {
  const dict = await getDictionary(locale);

  return {
    title: dict.contact.title,
    description: dict.contact.description,
    keywords:
      "FutureVerde, contact, ESG reporting, green financing, sustainability solutions, Istanbul, Yıldız Teknopark, consultation, support",
    openGraph: {
      title: dict.contact.title,
      description: dict.contact.description,
      type: "website",
      locale: locale,
      siteName: "FutureVerde",
      url: `https://futureverde.com/${locale}/contact`,
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
      title: dict.contact.title,
      description: dict.contact.description,
      images: ["https://futureverde.com/images/fv-banner.webp"],
    },
    alternates: {
      canonical: `https://futureverde.com/${locale}/contact`,
      languages: {
        en: "https://futureverde.com/en/contact",
        tr: "https://futureverde.com/tr/contact",
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code",
    },
  };
}

export default async function ContactPage({ params: { locale } }) {
  const dict = await getDictionary(locale);
  const { contact } = dict;

  return (
    <ClientLayout>
      <main className="min-h-screen mt-32 bg-[#f0f5f0]">
        {/* Hero Section */}
        <section className="relative py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-[#2d4d44] to-[#1a2e1a] text-white">
          <div className="max-w-7xl mx-auto text-center">
            <div className="animate-fade-in">
              <div className="uppercase text-sm tracking-wider text-[#98a45c] font-medium mb-4">
                {contact.hero.subtitle}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {contact.hero.title}
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-[#e7f0ea]">
                {contact.hero.description}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form Section */}
        <section className="py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e1a] mb-4">
                    {contact.info.title}
                  </h2>
                  <p className="text-[#54655e] text-lg">
                    {contact.info.subtitle}
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#2d4d44] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1a2e1a] mb-2">
                        {contact.info.address.title}
                      </h3>
                      <p className="text-[#54655e] leading-relaxed">
                        {contact.info.address.value}
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#2d4d44] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1a2e1a] mb-2">
                        {contact.info.email.title}
                      </h3>
                      <a
                        href={`mailto:${contact.info.email.value}`}
                        className="text-[#54655e] hover:text-[#2d4d44] transition-colors"
                      >
                        {contact.info.email.value}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#2d4d44] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1a2e1a] mb-2">
                        {contact.info.phone.title}
                      </h3>
                      <a
                        href={`tel:${contact.info.phone.value.replace(
                          /\s/g,
                          ""
                        )}`}
                        className="text-[#54655e] hover:text-[#2d4d44] transition-colors"
                      >
                        {contact.info.phone.value}
                      </a>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#2d4d44] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1a2e1a] mb-2">
                        {contact.info.hours.title}
                      </h3>
                      <p className="text-[#54655e] leading-relaxed">
                        {contact.info.hours.value}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <ContactForm contact={contact} />
            </div>
          </div>
        </section>

        {/* Google Maps Section */}
        <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e1a] mb-4">
                {contact.map.title}
              </h2>
              <p className="text-[#54655e] text-lg">{contact.map.subtitle}</p>
            </div>

            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.9633698339308!2d28.9554!3d41.1053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA2JzE5LjEiTiAyOMKwNTcnMTkuNCJF!5e0!3m2!1sen!2str!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FutureVerde Office Location - Yıldız Teknopark"
                aria-label="Map showing FutureVerde office location at Yıldız Teknopark, Istanbul"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </ClientLayout>
  );
}
