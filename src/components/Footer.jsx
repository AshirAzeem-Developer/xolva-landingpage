import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-white max-w-8xl bg-black/50 rounded-t-4xl  rounded-r-4xl  ">
      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl self-center mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Logo Section */}
          <div className="lg:col-span-3">
            <div className="flex items-center space-x-2">
              <span className="font-posterama text-4xl font-bold text-white tracking-wider">
                XOLVA
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-6">
            <nav className="flex flex-wrap justify-center lg:justify-center space-x-8">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Portfolio
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Career
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Ideas
              </a>
            </nav>
          </div>

          {/* Social Media Icons */}
          <div className="lg:col-span-3">
            <div className="flex justify-center lg:justify-end space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 pt-4 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            {/* Email */}
            <div className="flex items-center justify-center md:justify-start space-x-2 text-gray-400">
              <Mail className="w-4 h-4" />
              <span>info@xolva.com</span>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <Phone className="w-4 h-4" />
              <span>(905) 782 7379 | (514) 562 2796</span>
            </div>

            {/* Address */}
            <div className="flex items-center justify-center md:justify-end space-x-2 text-gray-400">
              <MapPin className="w-4 h-6" />
              <span>
                224,1310 Dundas St East Mississauga, ON L4Y 2C1 Canada
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 py-4">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className=" text-sm text-gray-500 text-center md:text-left">
              © 2025 <span className="font-posterama">XOLVA</span>. All rights
              reserved.
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm text-gray-500">
              <a
                href="#"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
