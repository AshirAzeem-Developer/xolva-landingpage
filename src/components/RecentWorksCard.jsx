import React from "react";
import { FocusCards } from "@/components/ui/focus-cards";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function RecentWorks() {
  const cards = [
    {
      title: "Millac Foods HRMS",
      src: "/Millac.png",
      description:
        "Leveraging a powerful tech stack including D3.js, Bootstrap, and jQuery, we engineered a robust HRMS for Millac Foods. This platform automates critical HR functions, from recruitment to payroll, streamlining operations and empowering data-driven decision-making. Our solution provides a secure, efficient, and modern HR hub that reflects our commitment to innovation and quality.",
    },
    {
      title: "Eureka Select",
      src: "/BenthamScience.png",
      description:
        "We developed a custom web portal for Bentham Science, a leading publisher of scientific, technical, and medical journals. This project automated the entire scholarly publishing process, from initial manuscript submission to the final stages of peer review and editorial decision-making. The portal provides a seamless, secure, and efficient workflow for authors, editors, and reviewers, streamlining the complexities of academic publishing.",
    },
    {
      title: "Bentham Brand Ambassador",
      src: "/BenthamBrandAmbassador.png",
      description:
        "We designed and built a dedicated Brand Ambassador Portal for Bentham Science Publishers. This platform motivates and manages their global network of ambassadors, providing them with a clear guide to the program, a transparent system for tracking earnings, and an easy way to redeem their rewards. Our solution empowers the client to efficiently manage and grow their ambassador community.",
    },
    {
      title: "Eureka Conferences Inc.",
      src: "/EurekaConf.png",
      description:
        "We developed a comprehensive web platform for Eureka Conferences to manage their full event and publishing lifecycle. This solution offers a central hub for event management, book sales, and publishing services, providing a seamless experience for attendees, authors, and staff. The portal highlights upcoming events and showcases positive testimonials, demonstrating our ability to build robust and user-friendly platforms that connect communities and streamline operations.",
    },
  ];

  return (
    <div className="w-full">
      <FocusCards cards={cards} />

      {/* Enhanced View All Work Button - Black & White Theme */}
      <div className="flex justify-center mt-4 mb-8">
        <Link href={"/portfolio"} className="w-full flex justify-center mt-16">
          <button className="cursor-pointer w-full group relative overflow-hidden bg-white hover:bg-gray-100 text-gray-800 border-2 border-gray-300 hover:border-gray-500 font-semibold px-8 py-4 rounded-md shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-out">
            {/* Animated background overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-300/5 via-gray-500/10 to-gray-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Sparkle effects */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Sparkles className="absolute top-1 left-2 w-3 h-3 text-gray-500 animate-pulse" />
              <Sparkles className="absolute bottom-1 right-3 w-2 h-2 text-gray-600 animate-pulse delay-150" />
              <Sparkles className="absolute top-2 right-8 w-2 h-2 text-gray-700 animate-pulse delay-300" />
            </div>

            {/* Button content */}
            <div className="relative flex items-center justify-center space-x-3">
              <span className="text-lg tracking-wide">View All Work</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </div>

            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-gray-400/30 to-transparent transition-transform duration-700 ease-out"></div>
          </button>
        </Link>
      </div>

      {/* Optional: Add a subtle text hint below the button */}
      <div className="text-center ">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Discover more innovative solutions and success stories
        </p>
      </div>
    </div>
  );
}
