"use client";

import { useEffect, useState } from "react";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiGithub,
  SiPostman,
  SiRedux,
  SiPostcss,
  SiTestinglibrary, // You can also use SiJest for Jest testing icon
} from "react-icons/si";

const skillMap = {
  JavaScript: <SiJavascript className="text-yellow-400 text-2xl" />,
  "React.js": <SiReact className="text-blue-400 text-2xl" />,
  "Next.js": <SiNextdotjs className="text-black text-2xl" />,
  "Tailwind CSS": <SiTailwindcss className="text-sky-400 text-2xl" />,
  "Node.js": <SiNodedotjs className="text-green-600 text-2xl" />,
  "HTML & CSS": (
    <div className="flex gap-1 items-center justify-center">
      <SiHtml5 className="text-orange-500 text-2xl" />
      <SiCss3 className="text-blue-600 text-2xl" />
    </div>
  ),
  "Git & GitHub": <SiGithub className="text-white text-2xl" />,
  "REST APIs": <SiPostman className="text-orange-400 text-2xl" />,
  Redux: <SiRedux className="text-purple-500 text-2xl" />,
  SCSS: <SiPostcss className="text-pink-400 text-2xl" />,
  "Unit Testing": <SiTestinglibrary className="text-red-400 text-2xl" />, // New skill
};

export default function Skills() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    "JavaScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "HTML & CSS",
    "Git & GitHub",
    "REST APIs",
    "Redux",
    "SCSS",
    "Unit Testing",
  ];

  return (
    <section id="skills" className="max-w-[1024px] m-auto h-screen py-32 px-6">
      <h2 className="text-3xl text-center md:text-4xl font-bold mb-6 transition-all duration-700 ease-in-out opacity-90">
        My Skills
      </h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-500 ease-in-out flex flex-col items-center gap-2"
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          >
            {skillMap[skill] || null}
            <span className="text-white text-sm mt-1">{skill}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
