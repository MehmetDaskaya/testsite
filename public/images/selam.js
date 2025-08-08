"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Selam = () => {
  // State for sticky header and mobile menu
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`w-full fixed top-0 z-50 py-4 px-6 md:px-16 lg:px-24 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "bg-[#e7f0ea]" : "bg-transparent"
        }`}
      >
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img
              src="https://future.codobilisim.com/wp-content/uploads/2022/11/Logo-Temel-Yatay-e1745100634279.png"
              alt="FutureVerde Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center absolute left-1/2 transform -translate-x-1/2">
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
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="5" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="12" cy="19" r="2" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="5" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="12" cy="19" r="2" />
          </svg>
        </button>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 pt-20 px-6 pb-6 flex flex-col">
          <button
            className="absolute top-5 right-6 text-black focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Close mobile menu"
          >
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <nav className="flex flex-col space-y-6">
            <Link
              href="/"
              className="text-xl text-black font-medium border-b border-gray-200 pb-2"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-xl text-black font-medium border-b border-gray-200 pb-2"
              onClick={toggleMobileMenu}
            >
              About Us
            </Link>
            <Link
              href="/solution"
              className="text-xl text-black font-medium border-b border-gray-200 pb-2"
              onClick={toggleMobileMenu}
            >
              Our Solution
            </Link>
            <Link
              href="/features"
              className="text-xl text-black font-medium border-b border-gray-200 pb-2"
              onClick={toggleMobileMenu}
            >
              Key Features
            </Link>
            <Link
              href="/industries"
              className="text-xl text-black font-medium border-b border-gray-200 pb-2"
              onClick={toggleMobileMenu}
            >
              Industries We Serve
            </Link>
            <Link
              href="/partnerships"
              className="text-xl text-black font-medium border-b border-gray-200 pb-2"
              onClick={toggleMobileMenu}
            >
              Partnerships & Collaboration
            </Link>

            <Link
              href="/contact"
              className="text-xl text-black font-medium border-b border-gray-200 pb-2"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}

      {/* Add spacer when navbar is fixed */}
      {isScrolled && <div className="h-16 md:h-20"></div>}
    </>
  );
};

export default Selam;
