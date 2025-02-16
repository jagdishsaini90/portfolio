"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "ZIA Migration",
    description: "Migrated legacy Backbone pages to modern React framework.",
    year: "2024",
  },
  {
    title: "Admin Panel Upgrade",
    description: "Refactored admin dashboard with improved UI/UX and performance.",
    year: "2023",
  },
  {
    title: "Cloud NSS",
    description: "Developed a cloud-based security solution for network traffic monitoring.",
    year: "2022",
  },
];

const ProjectTimeline = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center  text-[#001F40]">
      <motion.h2
        className="text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      <div className="relative w-full max-w-3xl">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-700 transform -translate-x-1/2"></div>

        {/* Project Items */}
        <div className="flex flex-col space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center w-full ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Project Card */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-64">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.description}</p>
                <span className="text-gray-400 text-sm mt-2 block">{project.year}</span>
              </div>

              {/* Circle Indicator */}
              <div className="absolute left-1/2 w-5 h-5 bg-blue-500 rounded-full border-4 border-gray-900 transform -translate-x-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectTimeline;
