"use client";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import bg from "../../assets/cta-donut-bg.png";
import { useDictionary } from "../../../lib/DictionaryContext";
import { useRouter, usePathname } from "next/navigation";

export default function CallToAction() {
  const dictionary = useDictionary();
  const { cta } = dictionary;
  const router = useRouter();
  const pathname = usePathname();

  // Don't show CTA on contact page
  if (pathname.includes("/contact")) {
    return null;
  }

  const handleContactClick = () => {
    // Extract locale from current pathname
    const locale = pathname.split("/")[1];
    router.push(`/${locale}/contact`);
  };

  return (
    <section className="relative py-20 px-6 md:px-16 lg:px-24 bg-[#f0f5f0] flex flex-col items-center justify-center text-center overflow-hidden min-h-[640px]">
      {/* Donut SVG Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <Parallax translateY={[-10, 10]} scale={[1, 1.1]}>
          <div className="relative w-[150vw] sm:w-[120vw] md:w-[90vw] max-w-none aspect-[1440/640]">
            <Image
              src={bg}
              alt="Floating donut background"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Parallax>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-10 pointer-events-none" />

      {/* CTA Content */}
      <div className="relative z-20 w-full max-w-2xl mx-auto">
        <div className="uppercase text-sm tracking-wider text-white font-medium mb-4">
          {cta.subtitle}
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-10">
          {cta.title}
        </h2>
        <button
          onClick={handleContactClick}
          className="bg-[#e06443] text-white font-medium py-3 px-8 rounded-full hover:bg-[#d25835] transition-all hover:scale-105 transform duration-200"
        >
          {cta.label}
        </button>
      </div>
    </section>
  );
}
