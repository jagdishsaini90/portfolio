"use Client"
import ParticlesBackground from "../../components/Particles";
import TypingText from "../../components/TypingEffect";
import Skills from "../../components/Skills";
import ProjectTimeline from "../../components/Experiences";

export default function Home() {
  return (
    <div className="px-[100px] py-[50px] m-auto">
     <div className=" h-[100vh]">
      <div className="leading-[1] font-extrabold text-[5em] text-[#001F40] m-auto">
        <h1>Hi,</h1>
        <div className="flex">
          <h1 className="w-fit mr-5">
          {"I'm"}
        </h1>
          <TypingText text={"Jagdish"} />
        </div>
      </div>
        <h1 className="text-[2em] m-auto">Frontend Developer</h1>
        <ParticlesBackground />
      </div>
      <Skills  />
        <ProjectTimeline/>
    </div>
  );
}
