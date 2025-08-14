"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDictionary } from "../../../lib/DictionaryContext";
import { X, Menu } from "lucide-react";
import logo from "../../assets/fv-logo.webp";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visibleLinksCount, setVisibleLinksCount] = useState(5);
  const [isOverflowOpen, setIsOverflowOpen] = useState(false);
  const overflowMenuRef = useRef(null);
  const timeoutRef = useRef(null);
  const pathname = usePathname();

  const dictionary = useDictionary();
  const { nav } = dictionary;

  // Extract current locale from pathname
  const currentLocale = pathname.split("/")[1] || "en";

  // All links in order with current locale
  const navItems = [
    { href: `/${currentLocale}`, label: nav.home },
    { href: `/${currentLocale}/about`, label: nav.about },
    { href: `/${currentLocale}/solution`, label: nav.solution },
    { href: `/${currentLocale}/contact`, label: nav.contact },
    { href: `/${currentLocale}/insights`, label: nav.insights },
    { href: `/${currentLocale}/partnerships`, label: nav.partnerships },
  ];

  // Dynamically adjust visible items based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleLinksCount(0);
      } else if (window.innerWidth < 1000) {
        setVisibleLinksCount(2);
      } else if (window.innerWidth < 1100) {
        setVisibleLinksCount(3);
      } else if (window.innerWidth < 1450) {
        setVisibleLinksCount(4);
      } else if (window.innerWidth < 1700) {
        setVisibleLinksCount(5);
      } else if (window.innerWidth < 1800) {
        setVisibleLinksCount(6);
      } else {
        setVisibleLinksCount(8); // Show all
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle click outside of overflow menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        overflowMenuRef.current &&
        !overflowMenuRef.current.contains(event.target)
      ) {
        setIsOverflowOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Improved hover handling for overflow menu
  const handleMenuEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOverflowOpen(true);
  };

  const handleMenuLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOverflowOpen(false);
    }, 300); // Delay before closing to allow moving to submenu
  };

  const handleDropdownEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOverflowOpen(false);
    }, 300);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent scrolling when mobile menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const visibleLinks = navItems.slice(0, visibleLinksCount);
  const overflowLinks = navItems.slice(visibleLinksCount);

  return (
    <>
      <header
        className={`w-full fixed top-0 z-50 py-4 px-6 md:px-8 lg:px-16 xl:px-24 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "bg-[#e7f0ea] shadow-md" : "bg-transparent top-6"
        }`}
      >
        <Link href={`/${currentLocale}`} className="flex items-center">
          <img
            src={logo.src || logo}
            alt="FutureVerde Logo"
            className="h-10 w-auto object-contain"
            onError={(e) => {
              console.error("Logo failed to load:", e.target.src);
              e.target.style.border = "2px solid red";
            }}
            onLoad={() => console.log("Logo loaded successfully")}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden ml-12 md:flex space-x-4 lg:space-x-6 items-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          {visibleLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-black font-medium relative px-1 group`}
            >
              {item.label}
              {/* Active indicator for current page */}
              {pathname === item.href && (
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black"></span>
              )}
              {/* Hover animation line */}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {overflowLinks.length > 0 && (
            <div className="relative" ref={overflowMenuRef}>
              <button
                className="ml-2 text-black p-2 rounded-full hover:bg-gray-100"
                onMouseEnter={handleMenuEnter}
                onMouseLeave={handleMenuLeave}
                onClick={() => setIsOverflowOpen(!isOverflowOpen)}
                aria-expanded={isOverflowOpen}
                aria-haspopup="true"
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

              {/* Enhanced dropdown with hover margin gap */}
              <div
                className={`absolute right-0 mt-2 bg-white text-black rounded-lg shadow-xl px-4 py-3 min-w-[220px] z-50 transition-all duration-300 border border-gray-200 ${
                  isOverflowOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
                aria-hidden={!isOverflowOpen}
              >
                <div className="flex flex-col space-y-2">
                  {overflowLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 px-2 text-sm relative group transition-colors duration-200"
                    >
                      <span className="relative z-10">{item.label}</span>
                      {/* Active indicator for current page */}
                      {pathname === item.href && (
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black"></span>
                      )}
                      {/* Hover animation line */}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                      {/* Hover background */}
                      <span className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 rounded-md transition-opacity duration-200 -z-10"></span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* Language Switcher */}
        <div className="hidden md:flex items-center">
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-black focus:outline-none p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </header>

      {/* Animated Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-[#e7f0ea] z-50 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <Link href={`/${currentLocale}`} className="flex items-center">
            <img
              src={logo.src || logo}
              alt="FutureVerde Logo"
              className="h-8 w-auto object-contain"
              onError={(e) => {
                console.error("Mobile logo failed to load:", e.target.src);
                e.target.style.border = "2px solid red";
              }}
              onLoad={() => console.log("Mobile logo loaded successfully")}
            />
          </Link>

          <button
            className="flex items-center text-black focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Close mobile menu"
          >
            <span className="mr-2 text-sm font-medium">Close</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="px-6 py-8 h-full overflow-y-auto">
          <nav className="flex flex-col space-y-6">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xl text-black font-medium border-b border-gray-200 pb-3 transition-all duration-300 relative group ${
                  pathname === item.href ? "border-black" : "border-gray-200"
                }`}
                onClick={toggleMobileMenu}
                style={{
                  transitionDelay: `${index * 50}ms`,
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen
                    ? "translateY(0)"
                    : "translateY(-20px)",
                }}
              >
                {item.label}
                {/* Mobile hover animation */}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Language Switcher */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-[#1a2e1a]">
                Language / Dil
              </span>
              <div className="flex space-x-3">
                <LanguageSwitcher />
              </div>
            </div>
          </div>

          <div className="mt-auto pt-8">
            <div className="text-sm text-[#54655e] mt-8">
              <p>© 2025 FutureVerde. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className={`h-16 md:h-20 ${!isScrolled && "hidden"}`}></div>
    </>
  );
};

export default Navbar;
