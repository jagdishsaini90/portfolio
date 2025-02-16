"use Client"
import Image from "next/image";
import JS from '../../public/js.png'
import ParticlesBackground from "../../components/Particles";
import TypingText from "../../components/TypingEffect";

export default function Home() {
  return (
    <div className="w-[100%] h-[100vh] bg-[#FFE26E]">
      <Image
        width={400}
        height={400}
        src={JS}
        alt="Jagdish Saini"
      />

      <div className="w-[70%] leading-[1] font-extrabold text-[5em] text-[#001F40] m-auto">
        <h1>Hi,</h1>
        <div className="flex">
          <h1 className="w-fit mr-5">
          {"I'm"}
        </h1>
          <TypingText text={"Jagdish"} />
        </div>
        
      </div>
      <ParticlesBackground  />
    </div>
  );
}
