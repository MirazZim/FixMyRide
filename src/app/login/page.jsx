import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LoginForm from './components/LoginForm';
import { FaGithub, FaGithubAlt, FaGoogle } from 'react-icons/fa';


export default function Login() {
  return (
    <div className="flex items-center justify-center mt-12 bg-white p-2">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 transform transition-all duration-500 hover:scale-105">
        {/* Left Side - Image with Different Style */}
        <div className="hidden md:flex items-center justify-center relative bg-gray-50 border-r border-gray-200 p-6">
          <div className="absolute w-80 h-80 bg-gradient-to-br from-red-300 to-red-600 rounded-full blur-3xl opacity-30"></div>
          <Image
            src="/assets/images/login/login.svg"
            height={400}
            width={400}
            alt="login image"
            className="relative z-10 transform transition-all duration-500 hover:scale-110 drop-shadow-lg"
          />
        </div>

        {/* Right Side - Form */}
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-8 tracking-tight">Welcome Back</h2>
          <p className="text-center text-gray-500 mb-6 text-sm">Log in to continue your journey with us.</p>
          
          {/* Login Form from components */}
          <LoginForm />

          <div className="text-center mt-6">
            <p className="text-gray-600">or sign in with</p>
            <div className="flex items-center justify-center space-x-4 mt-5">
              <button
                type="button"
                className="w-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 font-semibold px-5 py-3 rounded-xl shadow-lg hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 hover:text-white transform transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-center">
                  <FaGoogle className="mx-auto" />
                </div>
              </button>
              <button
                type="button"
                className="w-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 font-semibold px-5 py-3 rounded-xl shadow-lg hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 hover:text-white transform transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-center">
                  <FaGithub className="mx-auto" />
                </div>
              </button>
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-700">Don't have an account?{' '}
              <Link href="/register" className="text-red-600 font-semibold hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}