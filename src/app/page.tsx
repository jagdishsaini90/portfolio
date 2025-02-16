import Image from "next/image";
import JS from '../../public/js.png'
import ParticlesBackground from "../../components/Particles";
export default function Home() {
  return (
    <div className="w-[100%] h-[100vh] bg-[#FFE26E]">
      <Image
        width={400}
        height={400}
        src={JS}
        alt="Jagdish Saini"
      />

      <div className="border border-indigo-600">
        <h1 className="text-[5em]">Hi</h1>
      </div>
      <ParticlesBackground  />
    </div>
  );
}
