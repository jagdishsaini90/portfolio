"use client";

import { motion } from "motion/react";

const experiences = [
  {
    company: "Mercari India",
    role: "Software Engineer 2 - FullStack",
    duration: "April 2025 - Present",
    location: "Bangalore, IN",
    highlights: [
      {
        points: [
          "Owned and built the RMT platform from scratch (0 to 1) using React.js, TypeScript, and Vite, driving product architecture, technical design, and delivery of an LLM-powered workflow automation solution that reduced operational processing time from 1–2 weeks to 1 day.",
          "Designed and developed scalable, responsive frontend workflows using React.js, TypeScript, and GraphQL for the Items Moderation platform, streamlining UI interactions and reducing moderation turnaround time from several days to a few hours.",
          "Designed and implemented a reusable Playwright test automation framework integrated with CI/CD pipelines, building end-to-end and regression test suites that achieved 80%+ workflow coverage and improved release reliability.",
          "Owned full-stack implementation of 3+ new pages from the ground up, building Go backend services with gRPC, Protobuf, and REST APIs, integrated with Google Cloud Spanner and Kubernetes, independently delivering features without backend team dependency.",
          "Owned development of moderation features for Hallo using Next.js and TypeScript, building the moderation workflows from the ground up.",
        ],
      },
    ],
  },
  {
    company: "Zscaler",
    role: "Software Engineer 1 - Frontend",
    duration: "Feb 2023 - Mar 2025",
    location: "Bangalore, IN",
    highlights: [
      {
        points: [
          "Migrated legacy Backbone.js modules to React.js and Redux, modernizing frontend architecture and improving component maintainability, application state management, and performance.",
          "Developed and optimized React.js-based Insights and Admin interfaces, improving responsive UI design, usability, and maintainability across critical application workflows.",
          "Refactored legacy conditional logic in DNS Control Policy, improving efficiency and reducing technical debt.",
          "Implemented dynamic theming to enable seamless theme switching without page reloads.",
          "Developed Playwright E2E automation for ZIA and OneUI, achieving 70% workflow coverage and improving regression detection.",
        ],
      },
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen w-full px-4 py-32 flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-12 text-center tracking-tight"
      >
        Experience
      </motion.h2>

      <div className="relative border-l-4 border-white/20 pl-6 max-w-3xl w-full">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            className="mb-12 relative"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.15 }}
              className="absolute left-[-0.75rem] top-0 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-950 shadow-[0_0_12px_rgba(6,182,212,0.8)]"
            />
            <h3 className="text-xl font-semibold text-cyan-400">
              {exp.role} @ {exp.company}
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              {exp.duration} {exp.location && `• ${exp.location}`}
            </p>
            <div className="text-gray-300 space-y-4">
              {exp.highlights.map((highlight, i) => (
                <div key={i}>
                  {highlight.category && (
                    <h4 className="text-indigo-400 font-semibold mb-1">
                      {highlight.category}
                    </h4>
                  )}
                  <ul className="list-disc pl-5 space-y-2">
                    {highlight.points.map((point, j) => (
                      <li key={j} className="leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
