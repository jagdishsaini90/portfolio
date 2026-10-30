"use client";

import { motion } from "motion/react";
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full bg-gray-950 text-white py-8 border-t border-white/10 mt-16"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-4">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Jagdish Saini. All rights reserved.
        </p>
        <div className="flex gap-5 text-xl">
          <motion.a
            href="https://www.linkedin.com/in/jagdish904/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.92 }}
            className="text-blue-400 hover:text-blue-300 transition-colors"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/jagdishsaini90"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.92 }}
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="GitHub profile"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://drive.google.com/file/d/1ryGI4jEjYC1zF6qFem18SBL5fO03HFtY/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.92 }}
            className="text-green-400 hover:text-green-300 transition-colors"
            aria-label="Resume Google Drive document"
          >
            <FaFileAlt />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
