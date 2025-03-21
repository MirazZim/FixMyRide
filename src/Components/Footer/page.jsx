import Image from 'next/image';
import React from 'react';

// Importing social media icons (you can use SVGs or a library like react-icons)
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Left Section: Logo and Description */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            {/* Logo (you can replace with an actual image or SVG) */}
            <div className="flex items-center mb-4">
              <div className="text-red-500 text-2xl mr-7"><Image src="/assets/images/logoF.png" alt="Logo" width={120} height={120} /></div>
              
            </div>
            <p className="text-gray-400">
              Miraz Zim is a software and web technologies engineer, a life coach trainer who is also a serial...
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaGoogle size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Middle Section: Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Why Car Doctor</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">About</a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Support Center</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Feedback</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Accessibility</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}