import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-6">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 transform transition-all duration-500 hover:scale-105">
        {/* Left Side - Image with Different Style */}
        <div className="hidden md:flex items-center justify-center relative bg-gray-50 border-r border-gray-200 p-6">
          <div className="absolute w-80 h-80 bg-gradient-to-br from-red-300 to-red-600 rounded-full blur-3xl opacity-30"></div>
          <Image
            src="/assets/images/login/login.svg"
            height={400}
            width={400}
            alt="register image"
            className="relative z-10 transform transition-all duration-500 hover:scale-110 drop-shadow-lg"
          />
        </div>

        {/* Right Side - Form */}
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-8 tracking-tight">Create an Account</h2>
          <p className="text-center text-gray-500 mb-6 text-sm">Join us and explore amazing features.</p>
          <form action="" className="space-y-5">
            <div>
              <label htmlFor="name" className="text-gray-700 font-medium">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full p-3 mt-2 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 mt-2 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
              />
            </div>

            <div>
              <label htmlFor="password" className="text-gray-700 font-medium">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full p-3 mt-2 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 font-semibold px-5 py-3 rounded-xl shadow-lg hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 hover:text-white transform transition-all duration-300 hover:scale-105"
            >
              Sign Up
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-gray-600">or sign up with</p>
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-700">Already have an account?{' '}
              <Link href="/login" className="text-red-600 font-semibold hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}