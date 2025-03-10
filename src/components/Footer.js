"use client";

import { FaLinkedin, FaGithub, FaTwitter, FaFileAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full bg-gray-900 text-white py-6 border-t border-gray-700 mt-16"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Jagdish Saini. All rights reserved.
        </p>
        <div className="flex gap-4 text-xl">
          <a
            href="https://www.linkedin.com/in/jagdish904/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/jagdishsaini90"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/jagdish904"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:text-sky-200"
          >
            <FaTwitter />
          </a>
          <a
            href="https://drive.google.com/file/d/11Nic9eHF0zyCyC3TpYWhQeBafNL4nRdV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-500"
          >
            <FaFileAlt />
          </a>
        </div>
      </div>
    </footer>
  );
}
