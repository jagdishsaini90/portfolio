"use client";

import { motion } from "motion/react";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiRailway,
  SiMongodb,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

const iconMap = {
  "Next.js": <SiNextdotjs className="text-xl text-white" />,
  "Tailwind CSS": <SiTailwindcss className="text-xl text-sky-400" />,
  "Framer Motion": <SiFramer className="text-xl text-pink-500" />,
  React: <SiReact className="text-xl text-blue-400" />,
  "React.js": <SiReact className="text-xl text-blue-400" />,
  Javascript: <SiJavascript className="text-xl text-yellow-400" />,
  Typescript: <SiTypescript className="text-xl text-blue-500" />,
  Redux: <SiRedux className="text-xl text-purple-500" />,
  "Redux Toolkit": <SiRedux className="text-xl text-purple-500" />,
  "Node.js": <SiNodedotjs className="text-xl text-green-600" />,
  Railway: <SiRailway className="text-xl text-yellow-400" />,
  MongoDB: <SiMongodb className="text-xl text-green-500" />,
};

const projects = [
  {
    title: "Task Manager App",
    description:
      "A task manager app that allows users to create, update, and delete tasks. The app also features user authentication and authorization",
    skills: ["Next.js", "React.js", "Javascript", "Redux Toolkit"],
    github: "https://github.com/jagdishsaini90/task-Manager",
    live: "https://task-manager-wheat-alpha.vercel.app/",
  },
  {
    title: "Swiggy Clone",
    description:
      "A Swiggy-like food ordering web app featuring real-time menu browsing, cart management, and seamless checkout experience.",
    skills: ["Javascript", "React.js", "Redux", "Node.js"],
    github: "https://github.com/jagdishsaini90/swiggy-clone",
    live: "https://swiggy-clonee.vercel.app",
  },
  {
    title: "GlobetRotter",
    description:
      "A fun and interactive trivia game that tests your knowledge across various categories. Challenge yourself, track your score, and learn something new with every question!",
    skills: ["React", "Redux", "Node.js", "Framer Motion", "Railway"],
    github: "https://github.com/jagdishsaini90/Globetrotter-client",
    live: "https://globetrotter-client.vercel.app/",
  },
  {
    title: "Movies/Tv Shows",
    description:
      "A movie and TV show search app to explore trending titles, view details, and discover content using public APIs.",
    skills: ["Javascript", "React.js", "Typescript", "Redux Toolkit"],
    github: "https://github.com/jagdishsaini90/movies",
    live: "https://react-firebase-bxp7.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-4 py-32 w-full flex flex-col items-center bg-gray-950"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-white mb-12 text-center tracking-tight"
      >
        Projects
      </motion.h2>

      <div className="flex flex-col gap-6 w-full max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{
              y: -4,
              borderColor: "rgba(6, 182, 212, 0.4)",
              boxShadow: "0 12px 30px -10px rgba(6, 182, 212, 0.15)",
            }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-md px-6 py-5 text-white w-full transition-colors duration-300"
          >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold text-cyan-400 mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm max-w-2xl leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1.5 bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {iconMap[skill] || null}
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 shrink-0">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-indigo-400 hover:text-indigo-300 hover:underline transition-colors"
                >
                  Live Site
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
