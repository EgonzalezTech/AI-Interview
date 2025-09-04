"use client";

import React, { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles"; // importante usar este

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1, // aseguramos que esté detrás del contenido
        },
        background: {
          color: "#ffffff", // o el color que quieras de fondo
        },
        particles: {
          number: { value: 80 },
          size: { value: 3 },
          move: { enable: true, speed: 1 },
          opacity: { value: 0.5 },
          color: { value: "#000000" },
        },
      }}
    />
  );
};

export default ParticlesBackground;
