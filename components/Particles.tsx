"use client"; // Required for Next.js 13+ App Router

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim"; // Use `loadSlim` instead of `loadFull`

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine); // ✅ Fix: Use loadSlim to load the necessary features
  }, []);

  return (
      <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
      //   background: { color: "" }, // Dark background
        particles: {
          color: { value: "#002330" }, // Darker particles
          number: { value: 100, density: { enable: true, area: 800 } },
          shape: { type: "circle" },
          opacity: { value: 0.8 },
          size: { value: { min: 2, max: 4 } },
          move: { enable: true, speed: 1.5 },
          line_linked: { // Connects particles
            enable: true,
            distance: 150,
            color: "#444444", // Darker connection lines
            opacity: 0.6,
            width: 1.5,
          },
        },
        interactivity: {
          events: { 
            onHover: { enable: true, mode: "grab" }, // Connects when hovered
            onClick: { enable: true, mode: "push" },
          },
          modes: { grab: { distance: 200, line_linked: { opacity: 0.8 } } },
        },
      }}
    />
  );
};

export default ParticlesBackground;
