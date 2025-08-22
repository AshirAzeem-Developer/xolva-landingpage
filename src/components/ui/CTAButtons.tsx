import React from "react";
import { Globe, Quote, ArrowRight, Code } from "lucide-react";

const CTAButtons: React.FC = () => (
  <>
    {/* Primary CTA buttons */}
    <div className="flex flex-col sm:flex-row gap-4">
      <button className="group flex items-center justify-center px-8 py-4 bg-gradient-to-r from-white to-gray-200 text-black font-semibold hover:from-gray-100 hover:to-white transition-all duration-300 transform hover:scale-105 rounded-full shadow-lg hover:shadow-white/25">
        Get Custom Quote
        <Quote className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
      </button>

      {/* <button className="flex items-center justify-center px-8 py-4 border-2 border-gray-400 rounded-full text-white hover:border-white hover:text-gray-200 transition-all duration-300 backdrop-blur-sm">
        <Globe className="w-5 h-5 mr-2" />
        View Portfolio
      </button> */}
      <button className="group flex items-center justify-center px-6 py-3 bg-gradient-to-r from-gray-800/40 to-gray-700/40 border border-gray-600/50 rounded-full text-gray-300 hover:text-white hover:border-gray-500/60 transition-all duration-300 backdrop-blur-sm">
        <Code className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
        See Our Services
      </button>
    </div>

    {/* Additional CTA buttons */}
    {/* <div className="flex flex-col sm:flex-row gap-3 pt-2">
      <button className="group flex items-center justify-center px-6 py-3 bg-gradient-to-r from-gray-700/40 to-gray-600/40 border border-gray-500/50 rounded-full text-gray-300 hover:text-white hover:border-gray-400/60 transition-all duration-300 backdrop-blur-sm">
        <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
        Schedule Consultation
      </button>

      <button className="group flex items-center justify-center px-6 py-3 bg-gradient-to-r from-gray-800/40 to-gray-700/40 border border-gray-600/50 rounded-full text-gray-300 hover:text-white hover:border-gray-500/60 transition-all duration-300 backdrop-blur-sm">
        <Code className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
        See Our Services
      </button>
    </div> */}
  </>
);

export default CTAButtons;
