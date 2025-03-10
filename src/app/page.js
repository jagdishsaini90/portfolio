import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { ChevronDown, Download } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-gray-950 text-white">
      <Header />
      <section
        id="home"
        className="h-screen w-screen flex justify-center items-center flex-col pt-28 px-6 md:px-12 max-w-5xl mx-auto text-white text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          {"Hi, I'm Jagdish 👋"}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Frontend Developer passionate about crafting fast, aesthetic, and
          user-centric web experiences.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="/Jagdish_Saini_Resume.pdf"
            download
            className="inline-flex items-center gap-2 backdrop-blur-md bg-white/10 border border-white/30 text-cyan-300 hover:text-white hover:bg-cyan-600 px-6 py-3 rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </div>
        <div className="flex flex-col items-center mt-10 space-y-1 animate-bounce">
          <ChevronDown className="w-6 h-6 text-cyan-400 opacity-90" />
          <ChevronDown className="w-5 h-5 text-cyan-300 opacity-70" />
          <ChevronDown className="w-4 h-4 text-cyan-200 opacity-50" />
        </div>
      </section>

      <Skills />

      <Experience />

      <Projects />

      <Footer />
    </div>
  );
}
