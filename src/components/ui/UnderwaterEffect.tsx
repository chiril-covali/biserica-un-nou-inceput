import React from 'react';

export function UnderwaterEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-[#020e1a] via-[#042440] to-[#0A4775] select-none pointer-events-none z-0">
      {/* Dynamic Water Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-45 mix-blend-screen z-0"
      >
        <source src="/poze/apa.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-[#020e1a]/20 z-0" />
    </div>
  );
}
