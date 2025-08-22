import React, { useState } from "react";
import { Smartphone, Monitor, BookOpen } from "lucide-react";
import { ServiceOrbProps } from "./types";
import { GlobeDemo } from "./GlobeDemo";

const ServiceOrb: React.FC<ServiceOrbProps> = ({
  icon: Icon,
  title,
  position,
  delay,
  onClick,
}) => (
  <div
    className={`absolute ${position} group cursor-pointer animate-pulse`}
    style={{ animationDelay: delay, animationDuration: "3s" }}
    onClick={onClick}
  >
    <div className="relative">
      {/* Outer glow ring */}
      <div className="absolute inset-0 w-20 h-20 bg-white/10 rounded-full blur-lg group-hover:bg-white/20 transition-all duration-500" />
      {/* Main orb */}
      <div className="relative w-16 h-16 bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-sm border-2 border-white/20 rounded-full flex items-center justify-center group-hover:border-white/40 group-hover:scale-110 transition-all duration-300">
        <Icon className="w-7 h-7 text-white group-hover:text-gray-300 transition-colors duration-300" />
      </div>
      {/* Service title */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="bg-black/90 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/20 whitespace-nowrap">
          <span className="text-xs font-medium text-white">{title}</span>
        </div>
      </div>
    </div>
  </div>
);

const EnhancedGlobeSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      position: "top-10 left-10",
      delay: "0.5s",
    },
    {
      icon: Monitor,
      title: "Website Development",
      position: "top-10 right-10",
      delay: "1s",
    },
    {
      icon: BookOpen,
      title: "Publishing Services",
      position: "bottom-10 right-10",
      delay: "2s",
    },
  ];

  return (
    <div className="w-full">
      <GlobeDemo />
      {/* Service orbs positioned around the globe */}
      {services.map((service, index) => (
        <ServiceOrb
          key={index}
          icon={service.icon}
          title={service.title}
          position={service.position}
          delay={service.delay}
          onClick={() => setSelectedService(service.title)}
        />
      ))}

      {/* Service details popup */}
      {selectedService && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 p-4 bg-black/95 backdrop-blur-sm border border-white/20 rounded-xl">
          <p className="text-sm text-gray-300 text-center max-w-xs">
            {selectedService}
          </p>
          <button
            onClick={() => setSelectedService(null)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-xs text-gray-400 hover:text-white"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default EnhancedGlobeSection;
