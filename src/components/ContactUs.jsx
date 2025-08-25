import { Mail } from "lucide-react";
import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <div className="max-w-7xl mx-auto mt-28 my-24">
      <div className="relative bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-2xl overflow-hidden min-h-[400px] lg:min-h-[500px] border border-gray-700">
        {/* Enhanced Background Circuit Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 50 0 L 0 0 0 50"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              </pattern>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Grid background */}
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Circuit lines and nodes */}
            <g stroke="white" strokeWidth="1.5" fill="none" filter="url(#glow)">
              {/* Main circuit paths */}
              <path
                d="M0 150 L120 150 L120 200 L250 200 L250 100 L400 100"
                strokeWidth="2"
              />
              <path
                d="M450 100 L600 100 L600 180 L750 180 L750 120 L900 120"
                strokeWidth="2"
              />
              <path
                d="M100 300 L200 300 L200 250 L350 250 L350 350 L500 350"
                strokeWidth="1.5"
              />
              <path
                d="M550 350 L650 350 L650 280 L800 280 L800 400 L1000 400"
                strokeWidth="1.5"
              />

              {/* Connecting lines */}
              <line x1="250" y1="100" x2="250" y2="200" strokeWidth="2" />
              <line x1="600" y1="100" x2="600" y2="180" strokeWidth="2" />
              <line x1="350" y1="250" x2="350" y2="350" strokeWidth="1.5" />
              <line x1="750" y1="120" x2="750" y2="180" strokeWidth="2" />

              {/* Circuit nodes with enhanced styling */}
              <g fill="white">
                <circle
                  cx="120"
                  cy="150"
                  r="4"
                  stroke="white"
                  strokeWidth="2"
                />
                <circle
                  cx="250"
                  cy="100"
                  r="5"
                  stroke="white"
                  strokeWidth="2"
                />
                <circle
                  cx="600"
                  cy="180"
                  r="4"
                  stroke="white"
                  strokeWidth="2"
                />
                <circle
                  cx="350"
                  cy="250"
                  r="4"
                  stroke="white"
                  strokeWidth="2"
                />
                <circle
                  cx="750"
                  cy="120"
                  r="5"
                  stroke="white"
                  strokeWidth="2"
                />

                {/* Smaller connection points */}
                <rect x="118" y="198" width="4" height="4" />
                <rect x="598" y="98" width="4" height="4" />
                <rect x="348" y="348" width="4" height="4" />
                <rect x="748" y="178" width="4" height="4" />
              </g>
            </g>
          </svg>
        </div>

        {/* Animated floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-1 h-1 bg-white rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-32 right-32 w-1 h-1 bg-white rounded-full animate-ping opacity-40 animation-delay-1000"></div>
          <div className="absolute bottom-28 left-40 w-1 h-1 bg-white rounded-full animate-ping opacity-50 animation-delay-2000"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full p-8 lg:p-12">
          {/* Left Content */}
          <div className="flex-1 text-white mb-8 lg:mb-0 lg:pr-8">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6 tracking-tight">
              Have a question or need a custom quote?
            </h2>
            <p className="text-gray-300 text-lg lg:text-xl mb-8 max-w-lg leading-relaxed font-light">
              Please drop us a line about your area of interest at
              info@xolva.com and we will get back to you.
            </p>
            <button className="group flex relative bg-white text-black hover:bg-gray-100 px-8 py-3 lg:px-10 lg:py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-gray-300">
              <Mail className="w-6 h-6 mr-3" />
              <span className="relative z-10">Email Us Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
            </button>
          </div>

          {/* Right Content - Chat Bubbles */}
          <div className="flex-1 flex justify-center lg:justify-end items-center">
            <div className="relative w-64 h-64 lg:w-96 lg:h-96">
              {/* Background glow for image */}
              <div className="absolute inset-0 bg-white rounded-full blur-3xl opacity-5 scale-75"></div>
              <Image
                src="/ContactUsRight.png"
                alt="ContactUsRight"
                fill
                className="object-contain grayscale contrast-125 brightness-110 drop-shadow-2xl"
                priority
              />
              {/* Subtle overlay for better integration */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white opacity-5 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Enhanced glow effects for black/white theme */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl opacity-5"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl opacity-3"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-white via-transparent to-transparent opacity-5"></div>

        {/* Subtle border highlight */}
        <div className="absolute inset-0 rounded-2xl border border-white opacity-10"></div>
      </div>
    </div>
  );
};

export default ContactUs;
