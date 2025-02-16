"use client"; // Required for Next.js

import Image from "next/image";
import { motion } from "framer-motion";
import JavaScript from "../public/javascript.svg";
import TypeScript from "../public/typescript.svg";
import ReactImage from "../public/react.svg";
import Next from "../public/next.svg";
import Tailwind from "../public/tailwind.svg";
import Node from "../public/node.svg";
import HTMLImage from "../public/html.svg";
import CSSImage from "../public/css.svg";
import SCSSImage from "../public/scss.svg";
import Bitbucket from "../public/bitbucket.svg";

const skills = [
  { name: "JavaScript", logo: JavaScript },
  { name: "TypeScript", logo: TypeScript },
  { name: "React", logo: ReactImage },
  { name: "Next.js", logo: Next },
  { name: "Tailwind CSS", logo: Tailwind },
  { name: "Node.js", logo: Node },
  { name: "HTML", logo: HTMLImage },
  { name: "CSS", logo: CSSImage },
      { name: "SCSS", logo: SCSSImage },
      { name: "Bitbucker", logo: Bitbucket },
  
];

const Skills = () => {
  return (
    <div className="h-[100vh] select-none rounded-lg text-[#001F40]">
      <motion.h1
        className="text-7xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.h1>
      <motion.div
        className="flex justify-center gap-5 flex-wrap items-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center p-4 rounded-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="flex flex-col content-center items-center">
              <Image
                src={skill.logo}
                alt={skill.name}
                width={100}
                height={100}
                className="mb-2"
              />
              <div className="text-sm">{skill.name}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
