"use client";
import React from "react";
import { Globe, Quote, ArrowRight, Code } from "lucide-react";
import Link from "next/link";

const CTAButtons: React.FC = () => (
  <>
    {/* Primary CTA buttons */}
    <div className="flex flex-col sm:flex-row gap-2">
      <Link
        href={"/contact-us"}
        className="group flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 font-semibold hover:from-gray-200 hover:to-gray-300 transition-all duration-300 transform hover:scale-105 rounded-full shadow-lg hover:shadow-gray-300"
      >
        Get Custom Quote
        <Quote className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
      </Link>

      <Link
        href={"/our-services"}
        className="group flex items-center justify-center px-6 py-3 bg-white/40 border border-gray-300/50 rounded-full text-gray-700 hover:text-gray-900 hover:border-gray-400/60 transition-all duration-300 backdrop-blur-sm"
      >
        <Code className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
        See Our Services
      </Link>
    </div>
  </>
);

export default CTAButtons;
