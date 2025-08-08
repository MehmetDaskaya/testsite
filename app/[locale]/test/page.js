"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function FutureVerdePage() {
  // State for sticky header
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#f0f5f0]">
      {/* Header Section */}
      <header
        className={`w-full py-4 px-6 md:px-16 lg:px-24 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md fixed top-0 z-50" : "bg-transparent"
        }`}
      >
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-3xl font-bold text-black">
              future<span className="text-green-600">verde</span>
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex space-x-6 items-center">
          <Link
            href="/"
            className="text-black font-medium border-b-2 border-black pb-1"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-black font-medium hover:border-b-2 hover:border-black hover:pb-1 transition-all"
          >
            About Us
          </Link>
          <Link
            href="/solution"
            className="text-black font-medium hover:border-b-2 hover:border-black hover:pb-1 transition-all"
          >
            Our Solution
          </Link>
          <Link
            href="/features"
            className="text-black font-medium hover:border-b-2 hover:border-black hover:pb-1 transition-all"
          >
            Key Features
          </Link>
          <Link
            href="/industries"
            className="text-black font-medium hover:border-b-2 hover:border-black hover:pb-1 transition-all"
          >
            Industries We Serve
          </Link>
          <button className="ml-2 text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>

        <button className="md:hidden text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative w-full py-28 md:py-36 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a2e1a] mb-8 leading-tight">
            PAVING THE WAY
            <br />
            FOR
            <br />
            TECH-DRIVEN
            <br />
            SUSTAINABILITY
          </h1>
          <p className="text-[#54655e] text-lg md:pr-12 mb-8">
            We maximize automation, digitalization, and verification in ESG
            Reporting and Green Finance.
          </p>
          <div className="mt-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-[#1a2e1a] animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative mt-12 md:mt-0">
          <div className="absolute right-0 w-full h-full">
            <div className="relative w-full h-full">
              <div className="absolute transform -rotate-12 w-64 h-96 md:w-96 md:h-128 bg-blue-100/80 rounded-3xl z-0 right-0"></div>
              <div className="absolute right-12 top-12 z-10">
                <div className="relative flex space-x-4">
                  <div className="relative rounded-full overflow-hidden border-4 border-white/50 bg-gradient-to-b from-[#2d3b3a] to-[#4a7a7d] h-40 w-40 md:h-64 md:w-64">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-3/4 w-3/4 rounded-full bg-blue-50/80 flex items-center justify-center">
                        <div className="h-full w-full rounded-full relative overflow-hidden">
                          {/* Plants/foliage around the spheres */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="absolute top-0 left-1/2 w-12 h-12 bg-green-500/30"></div>
                            <div className="absolute top-1/4 right-0 w-8 h-16 bg-green-600/20"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-full overflow-hidden border-4 border-white/50 bg-gradient-to-b from-[#2d3b3a] to-[#4a7a7d] h-40 w-40 md:h-64 md:w-64">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-3/4 w-3/4 rounded-full bg-blue-50/80 flex items-center justify-center">
                        <div className="h-full w-full rounded-full relative overflow-hidden">
                          {/* Plants/foliage around the spheres */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="absolute bottom-0 right-1/3 w-14 h-14 bg-green-500/30"></div>
                            <div className="absolute top-1/3 left-0 w-10 h-12 bg-green-600/20"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-[#f0f5f0]">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="relative rounded-xl overflow-hidden h-64 md:h-96">
              <Image
                src="/api/placeholder/600/400"
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a2e1a] mb-6">
              Welcome to
              <br />
              FutureVerde
            </h2>
            <p className="text-[#54655e] mb-6">
              FutureVerde is your forward-thinking technology partner on the
              path to sustainability.
            </p>
            <p className="text-[#54655e] mb-6">
              Our intelligent, data-driven platform combines big data, advanced
              analytics, business intelligence, and AI to deliver a
              comprehensive suite for ESG Analysis, Reporting, and Green
              Financing.
            </p>
            <p className="text-[#54655e] mb-6">
              Designed to help companies meet both national and international
              standards, FutureVerde enhances transparency, accuracy, and impact
              in sustainability reporting. With predictive technologies, our
              platform empowers businesses to anticipate risks, seize emerging
              opportunities, and make future-oriented, strategic decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-[#f0f5f0]">
        <div className="mb-12">
          <div className="uppercase text-sm tracking-wider text-[#2d4d44] font-medium mb-4">
            FUTUREVERDE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2e1a] mb-6">
            Key Features
          </h2>
          <p className="text-[#54655e] md:w-1/2">
            Transform Your Sustainability Journey with FutureVerde's Key
            Features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-lg">
            <div className="w-16 h-16 mb-6 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-[#1a2e1a]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">AI-Powered Reporting</h3>
            <p className="text-[#54655e]">
              Streamline ESG reporting with easy-to-use tools, ensuring accuracy
              and speed.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-lg">
            <div className="w-16 h-16 mb-6 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-[#1a2e1a]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">
              Multidimensional Scoring & Benchmarking
            </h3>
            <p className="text-[#54655e]">
              Measure and compare your sustainability performance to industry
              standards.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-lg">
            <div className="w-16 h-16 mb-6 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-[#1a2e1a]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Supply Chain Tracking</h3>
            <p className="text-[#54655e]">
              Gain traceability and audit capabilities across your entire supply
              chain.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-8 rounded-lg">
            <div className="w-16 h-16 mb-6 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-[#1a2e1a]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">
              Green Financing Compliance
            </h3>
            <p className="text-[#54655e]">
              Monitor and report on Green Financing processes with comprehensive
              impact and compliance analysis.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white p-8 rounded-lg">
            <div className="w-16 h-16 mb-6 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-[#1a2e1a]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">
              Proactive Risk & Opportunity Analysis
            </h3>
            <p className="text-[#54655e]">
              Identify future sustainability risks and opportunities with
              AI-driven insights.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white p-8 rounded-lg">
            <div className="w-16 h-16 mb-6 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-[#1a2e1a]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Continuous Development</h3>
            <p className="text-[#54655e]">
              Benefit from AI-based recommendations for continual improvement in
              your sustainability efforts.
            </p>
          </div>
        </div>
      </section>

      {/* Sustainability Platform CTA */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-[#f0f5f0] flex flex-col items-center justify-center text-center">
        <div className="relative w-full max-w-2xl mx-auto">
          <div className="mb-8">
            <Image
              src="/api/placeholder/800/400"
              alt="Circular green sustainability symbol"
              width={800}
              height={400}
              className="mx-auto"
            />
          </div>
          <div className="uppercase text-sm tracking-wider text-[#2d4d44] font-medium mb-4">
            FUTUREVERDE
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#1a2e1a] mb-10">
            Sustainability Platform
          </h2>
          <button className="bg-[#e06443] text-white font-medium py-3 px-8 rounded-full hover:bg-[#d25835] transition-all">
            Get in Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1a0f] text-white py-12 px-6 md:px-16 lg:px-24">
        <div className="flex flex-col space-y-10">
          <div className="flex flex-wrap justify-between items-center">
            <nav className="flex flex-wrap gap-x-8 gap-y-4">
              <Link
                href="/"
                className="text-white hover:text-gray-300 border-b border-white pb-1"
              >
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-gray-300">
                About Us
              </Link>
              <Link href="/solution" className="text-white hover:text-gray-300">
                Our Solution
              </Link>
              <Link href="/features" className="text-white hover:text-gray-300">
                Key Features
              </Link>
              <Link
                href="/industries"
                className="text-white hover:text-gray-300"
              >
                Industries We Serve
              </Link>
              <Link
                href="/partnerships"
                className="text-white hover:text-gray-300"
              >
                Partnerships & Collaboration
              </Link>

              <Link href="/contacts" className="text-white hover:text-gray-300">
                Contacts
              </Link>
            </nav>
          </div>

          <div className="h-px w-full bg-gray-800"></div>

          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <p className="text-gray-300">
                Maslak, Dereboyu 2 Cd,
                <br />
                34485 Sarıyer/İstanbul
              </p>
            </div>
            <div className="mb-6 md:mb-0">
              <p className="text-gray-300">(0212) 285 99 75</p>
              <p className="text-gray-300">info@futureverde.com</p>
            </div>
          </div>

          <div className="h-12"></div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <p className="text-gray-400">
                FutureVerde © 2025. All Rights Reserved. Designed by Renee
                Design Labs
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <button className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
