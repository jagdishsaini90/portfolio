"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const NAV_ITEMS = ["Home", "Skills", "Experience", "Projects", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-5 left-1/2 z-50 w-[90%] max-w-5xl bg-gray-950/80 backdrop-blur-md border border-white/20 text-white rounded-2xl shadow-lg px-6 py-3 flex items-center justify-between"
    >
      <div className="text-xl font-semibold tracking-wide text-cyan-400">JS</div>

      <div className="hidden md:flex gap-6">
        {NAV_ITEMS.map((nav) => (
          <a
            key={nav}
            href={`#${nav.toLowerCase()}`}
            onClick={(e) => handleNavClick(e, `#${nav.toLowerCase()}`)}
            className="text-gray-300 hover:text-cyan-300 transition-colors duration-200"
          >
            {nav}
          </a>
        ))}
      </div>

      <button
        className="md:hidden p-1 rounded-lg text-gray-200 hover:text-white hover:bg-white/10 transition"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 w-full bg-gray-950/95 backdrop-blur-xl border border-white/20 rounded-2xl mt-3 p-4 flex flex-col gap-2 md:hidden shadow-2xl"
          >
            {NAV_ITEMS.map((nav) => (
              <a
                key={nav}
                href={`#${nav.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, `#${nav.toLowerCase()}`)}
                className="px-4 py-2.5 rounded-xl text-gray-200 hover:text-white hover:bg-white/10 transition-colors duration-200"
              >
                {nav}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
