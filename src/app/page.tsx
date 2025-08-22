"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { GlobeDemo } from "../components/GlobeDemo";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import BackgroundElements from "../components/BackgroundElements";
import { GlowingEffectDemo } from "../components/GlowingEffect";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden relative">
        <Navbar />
        <BackgroundElements />

        <main className="relative pt-24 pb-12 px-6">
          <div className="container mx-auto max-w-7xl">
            <HeroSection isLoaded={isLoaded} />
            <GlowingEffectDemo />
            <ServicesSection />
          </div>
        </main>
      </div>
    </>
  );
}
