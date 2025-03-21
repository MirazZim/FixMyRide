"use client";
import React from 'react';
import { FaClock, FaHeadphones, FaTools, FaUser, FaUserShield } from 'react-icons/fa';
import { GoPackage } from "react-icons/go";

export default function WhyChooseUs() {
    return (
        <div className="container mx-auto px-6 py-24 bg-gradient-to-b bg-gray-100 overflow-hidden">
           <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center tracking-tight">Why Choose Us</h2>
           <p className="text-gray-600 text-xl text-center mb-12">We're committed to delivering exceptional service that exceeds your expectations. Our team of experts is dedicated to ensuring your satisfaction and providing solutions that meet your needs.</p>

            

            {/* Card items */}
            <div className="flex flex-row flex-wrap justify-center gap-8 max-w-7xl mx-auto">
                <div className="group relative bg-white/90 backdrop-blur-lg px-8 py-12 rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 hover:bg-gradient-to-br hover:from-red-500 hover:to-purple-800 hover:text-white w-72 transform hover:-translate-y-3 border border-gray-200/50 hover:border-indigo-500/50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <FaUser className="relative h-14 w-14 text-red-500  mb-6 group-hover:text-white transition-all duration-500 mx-auto group-hover:scale-105" />
                    <h3 className="relative text-xl font-semibold text-gray-900 group-hover:text-white mb-3 text-center tracking-tight">Elite Expertise</h3>
                    <p className="relative text-gray-600 group-hover:text-gray-100 text-sm leading-relaxed text-center font-light">
                        Precision-driven experts shaping your vision.
                    </p>
                </div>

                <div className="group relative bg-white/90 backdrop-blur-lg px-8 py-12 rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 hover:bg-gradient-to-br hover:from-indigo-800 hover:to-purple-800 hover:text-white w-72 transform hover:-translate-y-3 border border-gray-200/50 hover:border-indigo-500/50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <FaClock className="relative h-14 w-14 text-red-500 mb-6 group-hover:text-white transition-all duration-500 mx-auto group-hover:scale-105" />
                    <h3 className="relative text-xl font-semibold text-gray-900 group-hover:text-white mb-3 text-center tracking-tight">Flawless Timing</h3>
                    <p className="relative text-gray-600 group-hover:text-gray-100 text-sm leading-relaxed text-center font-light">
                        Delivery perfected to your pace.
                    </p>
                </div>

                <div className="group relative bg-white/90 backdrop-blur-lg px-8 py-12 rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 hover:bg-gradient-to-br hover:from-red-500 hover:to-purple-800 hover:text-white w-72 transform hover:-translate-y-3 border border-gray-200/50 hover:border-indigo-500/50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <FaHeadphones className="relative h-14 w-14 text-red-500  mb-6 group-hover:text-white transition-all duration-500 mx-auto group-hover:scale-105" />
                    <h3 className="relative text-xl font-semibold text-gray-900 group-hover:text-white mb-3 text-center tracking-tight">Always On</h3>
                    <p className="relative text-gray-600 group-hover:text-gray-100 text-sm leading-relaxed text-center font-light">
                        Support that never sleeps.
                    </p>
                </div>

                <div className="group relative bg-white/90 backdrop-blur-lg px-8 py-12 rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 hover:bg-gradient-to-br hover:from-indigo-800 hover:to-purple-800 hover:text-white w-72 transform hover:-translate-y-3 border border-gray-200/50 hover:border-indigo-500/50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <FaTools className="relative h-14 w-14 text-red-500  mb-6 group-hover:text-white transition-all duration-500 mx-auto group-hover:scale-105" />
                    <h3 className="relative text-xl font-semibold text-gray-900 group-hover:text-white mb-3 text-center tracking-tight">Precision Tools</h3>
                    <p className="relative text-gray-600 group-hover:text-gray-100 text-sm leading-relaxed text-center font-light">
                        Tech that defines excellence.
                    </p>
                </div>

                <div className="group relative bg-white/90 backdrop-blur-lg px-8 py-12 rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 hover:bg-gradient-to-br hover:from-red-500 hover:to-purple-800 hover:text-white w-72 transform hover:-translate-y-3 border border-gray-200/50 hover:border-indigo-500/50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <FaUserShield className="relative h-14 w-14 text-red-500  mb-6 group-hover:text-white transition-all duration-500 mx-auto group-hover:scale-105" />
                    <h3 className="relative text-xl font-semibold text-gray-900 group-hover:text-white mb-3 text-center tracking-tight">Absolute Trust</h3>
                    <p className="relative text-gray-600 group-hover:text-gray-100 text-sm leading-relaxed text-center font-light">
                        Confidence, built to last.
                    </p>
                </div>

                <div className="group relative bg-white/90 backdrop-blur-lg px-8 py-12 rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 hover:bg-gradient-to-br hover:from-indigo-800 hover:to-purple-800 hover:text-white w-72 transform hover:-translate-y-3 border border-gray-200/50 hover:border-indigo-500/50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <GoPackage className="relative h-14 w-14 text-red-500  mb-6 group-hover:text-white transition-all duration-500 mx-auto group-hover:scale-105" />
                    <h3 className="relative text-xl font-semibold text-gray-900 group-hover:text-white mb-3 text-center tracking-tight">Effortless Access</h3>
                    <p className="relative text-gray-600 group-hover:text-gray-100 text-sm leading-relaxed text-center font-light">
                        Convenience, elevated.
                    </p>
                </div>
            </div>
        </div>
    );
}