"use client";
import React from "react";
import { Zap, Shield, Database } from "lucide-react";
import StatusIndicator from "./ui/StatusIndicator";
import CTAButtons from "./ui/CTAButtons";
import EnhancedGlobeSection from "./ServiceOrb";

// Define the props for the HeroSection component
interface HeroSectionProps {
  isLoaded: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isLoaded }) => (
  // Main container, adjusted text and grid colors
  <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] text-gray-900">
    {/* Left Content */}
    <div
      className={`space-y-8 transition-all duration-1000 ease-out ${
        isLoaded ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
      }`}
    >
      <div className="space-y-4">
        {/* Adjusted background, border, and text colors for a light theme */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100/70 border border-gray-300/50 text-sm font-medium text-gray-700">
          <Zap className="w-4 h-4 mr-2" />
          Professional Development Solutions
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
          {/* Changed gradient to be darker for visibility on white background */}
          <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent font-posterama">
            XOLVA
          </span>
          <br />
          Software and
          <br />
          <span className="relative inline-block">
            Service Solutions
            {/* Changed underline gradient to a darker color */}
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-black rounded-full" />
          </span>
        </h1>
      </div>

      {/* Changed text color for better contrast */}
      <p className="text-lg sm:text-lg text-gray-700 leading-relaxed max-w-lg">
        We are an independent software development company offering cutting-edge
        solutions through the world's latest technologies. From mobile apps to
        enterprise systems, we deliver innovation that transforms businesses.
      </p>

      <CTAButtons />
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
        <StatusIndicator
          // Changed pulsating icon color
          icon={
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
          }
          text="100+ Projects Delivered"
        />
        <StatusIndicator
          // Changed icon color
          icon={<Shield className="w-4 h-4 text-blue-600" />}
          text="Enterprise Grade"
        />
        <StatusIndicator
          // Changed icon color
          icon={<Database className="w-4 h-4 text-purple-600" />}
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
