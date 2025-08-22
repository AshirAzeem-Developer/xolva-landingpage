import React from "react";
import { FloatingOrbProps } from "./types";

const FloatingOrb: React.FC<FloatingOrbProps> = ({
  size,
  delay,
  duration,
  x,
  y,
}) => {
  const sizeMap: { [key: string]: string } = {
    "16": "64px",
    "24": "96px",
    "32": "128px",
  };

  return (
    <div
      className="absolute bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 rounded-full blur-2xl animate-float"
      style={{
        width: sizeMap[size] || "64px",
        height: sizeMap[size] || "64px",
        left: x,
        top: y,
        animationDelay: delay,
        animationDuration: duration,
      }}
    />
  );
};

const GridPattern: React.FC = () => (
  <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        maskImage:
          "radial-gradient(circle at center, black 70%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(circle at center, black 70%, transparent 100%)",
      }}
    />
  </div>
);

const ParticleField: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: 70 }, (_, i) => (
      <div
        key={i}
        className="absolute w-[2px] h-[2px] bg-white/30 rounded-full animate-twinkle"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 4}s`,
          animationDuration: `${2 + Math.random() * 3}s`,
        }}
      />
    ))}
  </div>
);

const BackgroundElements: React.FC = () => (
  <>
    <style jsx>{`
      @keyframes float {
        0% {
          transform: translateY(0px) scale(1);
        }
        50% {
          transform: translateY(-20px) scale(1.05);
        }
        100% {
          transform: translateY(0px) scale(1);
        }
      }

      .animate-float {
        animation: float infinite ease-in-out;
      }

      @keyframes twinkle {
        0%,
        100% {
          opacity: 0.2;
        }
        50% {
          opacity: 1;
        }
      }

      .animate-twinkle {
        animation: twinkle infinite ease-in-out;
      }
    `}</style>

    {/* Particles + Grid */}
    <ParticleField />
    <GridPattern />

    {/* Floating Orbs */}
    <FloatingOrb size="32" delay="0s" duration="6s" x="15%" y="25%" />
    <FloatingOrb size="24" delay="1s" duration="8s" x="70%" y="65%" />
    <FloatingOrb size="16" delay="2s" duration="7s" x="25%" y="85%" />
  </>
);

export default BackgroundElements;
