import React from "react";
import { Zap, Shield, Database } from "lucide-react";
import { HeroSectionProps } from "./types";
import StatusIndicator from "./ui/StatusIndicator";
import CTAButtons from "./ui/CTAButtons";
import EnhancedGlobeSection from "./ServiceOrb";

const HeroSection: React.FC<HeroSectionProps> = ({ isLoaded }) => (
  <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
    {/* Left Content */}
    <div
      className={`space-y-8 transition-all duration-1000 ease-out ${
        isLoaded ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
      }`}
    >
      <div className="space-y-6">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-white/10 to-gray-300/20 border border-white/20 text-sm font-medium text-white">
          <Zap className="w-4 h-4 mr-2" />
          Professional Development Solutions
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
            XOLVA
          </span>
          <br />
          Software and
          <br />
          <span className="relative inline-block">
            Service Solutions
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-white to-gray-400 rounded-full" />
          </span>
        </h1>
      </div>

      <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-lg">
        We are an independent software development company offering cutting-edge
        solutions through the world's latest technologies. From mobile apps to
        enterprise systems, we deliver innovation that transforms businesses.
      </p>

      <CTAButtons />

      <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
        <StatusIndicator
          icon={<div className="w-2 h-2 bg-white rounded-full animate-pulse" />}
          text="100+ Projects Delivered"
        />
        <StatusIndicator
          icon={<Shield className="w-4 h-4 text-white" />}
          text="Enterprise Grade"
        />
        <StatusIndicator
          icon={<Database className="w-4 h-4 text-gray-300" />}
          text="Latest Technologies"
        />
      </div>
    </div>

    {/* Right Content - Globe */}
    <div
      className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ease-out ${
        isLoaded ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
      }`}
    >
      <EnhancedGlobeSection />
    </div>
  </div>
);

export default HeroSection;
