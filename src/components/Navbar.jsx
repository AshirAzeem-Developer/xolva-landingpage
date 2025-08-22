"use client";
import { useState } from "react";

export const Navbar = () => {
  // State to manage the mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // The main navbar container
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-[90vw] mt-4 border-[3px] border-slate-100 rounded-lg">
      {/* A semi-transparent container with blur for a modern "glassmorphism" effect */}
      <div className="mx-auto w-full  bg-white bg-opacity-80 backdrop-blur-md shadow-lg p-4 transition-all duration-300">
        {/* Flex container for the navbar content */}
        <div className="flex items-center justify-between">
          {/* Logo/Brand Section */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-800 tracking-wider">
              XOLVA
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 font-medium transition duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 font-medium transition duration-300"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 font-medium transition duration-300"
            >
              Portfolio
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 font-medium transition duration-300"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button (Hamburger Icon) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  className={`${isOpen ? "hidden" : "block"}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
                <path
                  className={`${isOpen ? "block" : "hidden"}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden mt-4 space-y-2 transition-all duration-300 ${
            isOpen ? "h-auto opacity-100" : "h-0 opacity-0 overflow-hidden"
          }`}
        >
          <a
            href="#"
            className="block px-3 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
          >
            About
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
          >
            Services
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
          >
            Portfolio
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};
