"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = ["Home", "Skills", "Experience", "Projects", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollTarget, setScrollTarget] = useState(null);

  useEffect(() => {
    if (scrollTarget) {
      const el = document.querySelector(scrollTarget);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setScrollTarget(null);
      }
    }
  }, [scrollTarget]);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    setIsOpen(false);
    setScrollTarget(target);
  };

  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-5xl bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-2xl shadow-lg px-6 py-3 flex items-center justify-between">
      <div className="text-xl font-semibold tracking-wide">JS</div>

      <div className="hidden md:flex gap-6">
        {NAV_ITEMS.map((nav) => (
          <a
            key={nav}
            href={`#${nav.toLowerCase()}`}
            onClick={(e) => handleNavClick(e, `#${nav.toLowerCase()}`)}
            className="hover:text-gray-300 transition"
          >
            {nav}
          </a>
        ))}
      </div>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white/10 backdrop-blur-md border border-white/30 rounded-b-2xl mt-2 px-6 py-4 flex flex-col gap-4 md:hidden">
          {NAV_ITEMS.map((nav) => (
            <a
              key={nav}
              href={`#${nav.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, `#${nav.toLowerCase()}`)}
              className="hover:text-gray-300 transition"
            >
              {nav}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
