"use client";

import { useEffect, useState } from "react";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiRailway,
  SiMongodb,
} from "react-icons/si";

const iconMap = {
  "Next.js": <SiNextdotjs className="text-xl text-black" />,
  "Tailwind CSS": <SiTailwindcss className="text-xl text-sky-400" />,
  "Framer Motion": <SiFramer className="text-xl text-pink-500" />,
  React: <SiReact className="text-xl text-blue-400" />,
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
      <h2 className="text-4xl font-bold text-white mb-12 text-center">
        Projects
      </h2>
      <div className="flex flex-col gap-6 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-md px-6 py-4 text-white w-full"
          >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold text-cyan-400 mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm max-w-2xl">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 bg-cyan-700/20 border border-cyan-500 text-cyan-300 text-sm px-3 py-1 rounded-full"
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
                  className="text-sm text-indigo-400 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-indigo-400 hover:underline"
                >
                  Live Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
