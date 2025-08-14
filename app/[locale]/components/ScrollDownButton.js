"use client";

export default function ScrollDownButton() {
  const handleScroll = () => {
    const nextSection = document.getElementById("welcome-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleScroll}
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
  );
}
