"use client";

import { motion } from "motion/react";
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
  SiTestinglibrary,
} from "react-icons/si";

const skillMap = {
  JavaScript: <SiJavascript className="text-yellow-400 text-2xl" />,
  "React.js": <SiReact className="text-blue-400 text-2xl" />,
  "Next.js": <SiNextdotjs className="text-white text-2xl" />,
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
  "Unit Testing": <SiTestinglibrary className="text-red-400 text-2xl" />,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function Skills() {
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
    <section id="skills" className="max-w-[1024px] m-auto min-h-screen py-32 px-6 flex flex-col justify-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-3xl text-center md:text-4xl font-bold mb-10 tracking-tight"
      >
        My Skills
      </motion.h2>

      <motion.ul
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center"
      >
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            whileHover={{
              y: -6,
              scale: 1.04,
              borderColor: "rgba(6, 182, 212, 0.4)",
              boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.2)",
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl shadow-md transition-colors duration-300 flex flex-col items-center gap-2 cursor-default"
          >
            {skillMap[skill] || null}
            <span className="text-white text-sm font-medium mt-1">{skill}</span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
