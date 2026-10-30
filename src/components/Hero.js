"use client";

import { motion } from "motion/react";
import { ChevronDown, Download } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen w-full flex justify-center items-center flex-col pt-28 px-6 md:px-12 max-w-5xl mx-auto text-white text-center"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold leading-tight mb-4 tracking-tight"
        >
          {"Hi, I'm Jagdish 👋"}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed"
        >
          Full Stack Engineer passionate about building scalable, high-performance
          web applications and seamless end-to-end digital experiences from 0 to 1.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-8 flex justify-center">
          <motion.a
            href="https://drive.google.com/file/d/1ryGI4jEjYC1zF6qFem18SBL5fO03HFtY/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(6, 182, 212, 0.4)" }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 backdrop-blur-md bg-white/10 border border-white/30 text-cyan-300 hover:text-white hover:bg-cyan-600 px-6 py-3 rounded-xl shadow-lg transition-colors duration-300 ease-in-out"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center mt-14 space-y-1"
        >
          <ChevronDown className="w-6 h-6 text-cyan-400 opacity-90" />
          <ChevronDown className="w-5 h-5 text-cyan-300 opacity-70" />
          <ChevronDown className="w-4 h-4 text-cyan-200 opacity-50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
