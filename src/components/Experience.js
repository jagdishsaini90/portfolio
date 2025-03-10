const experiences = [
  {
    company: "Zscaler",
    role: "Software Development Engineer",
    duration: "Feb 2023 - Present",
    highlights: [
      {
        category: "ZIA",
        points: [
          "Collaborated in the migration from Backbone.js to React.js with Redux, contributing to performance optimization and reduced load times across the application.",
          "Worked on migrating and optimizing Insights and Admin pages, improving user experience and functionality within these key sections.",
          "Refactored legacy code by eliminating redundant conditional logic, improving the efficiency of the DNS Control Policy page.",
          "Handled the migration of critical pages such as URL Categories, VPN Credentials, and Cloud NSS, enhancing performance and ensuring seamless functionality.",
        ],
      },
      {
        category: "CSS",
        points: [
          "Implemented dynamic theming capabilities to enable seamless theme switching without requiring page reloads.",
        ],
      },
      {
        category: "Playwright Automation",
        points: [
          "Developed and executed automated test scripts using Playwright, achieving 70% code coverage and improving resilience for ZIA and OneUI applications.",
        ],
      },
      {
        category: "OneUI",
        points: [
          "Built reusable TypeScript components, such as charts, with strict type checking to ensure consistent UI/UX design and alignment with visual standards.",
        ],
      },
    ],
  },
  {
    company: "Kashware",
    role: "Software Development Engineer Intern",
    duration: "Mar 2022 - June 2022",
    highlights: [
      {
        points: [
          "Developed intuitive and responsive user interfaces for Kashware’s web application using modern frontend technologies.",
          "Collaborated closely with designers and backend teams to translate UI/UX wireframes into functional and visually appealing components.",
          "Ensured cross-browser compatibility, optimized performance, and implemented reusable components for scalable UI development.",
        ],
      },
    ],
  },
  {
    company: "GharPeShiksha",
    role: "Frontend Developer Intern",
    duration: "Jan 2022 - Mar 2022",
    highlights: [
      {
        points: [
          "Developed a dynamic checkout page for course enrollment, ensuring a smooth and user-friendly payment experience.",
          "Designed and implemented a new responsive homepage for the web application, improving navigation and user engagement.",
          "Enhanced UI consistency and performance by optimizing layout structures and reusing modular components across the platform.",
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
      <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>

      <div className="relative border-l-4 border-white/20 pl-6 max-w-3xl w-full">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 relative">
            <div className="absolute left-[-0.75rem] top-0 w-4 h-4 bg-white rounded-full border-4 border-gray-950" />
            <h3 className="text-xl font-semibold text-cyan-400">
              {exp.role} @ {exp.company}
            </h3>
            <p className="text-sm text-gray-400 mb-2">{exp.duration}</p>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              {exp.highlights.map((highlight, i) => (
                <div key={i}>
                  {highlight.category && (
                    <strong className="text-indigo-400">
                      {highlight.category}
                    </strong>
                  )}
                  {highlight.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
