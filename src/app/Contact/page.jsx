// File: components/Contact.js
import { FaClock, FaMapMarkerAlt, FaPaperPlane, FaPhone } from 'react-icons/fa';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className="bg-gradient-to-b from-silver-100 to-silver-200 min-h-screen  text-gray-900">
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-96 overflow-hidden rounded-3xl shadow-2xl group">
          <Image
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            src="/assets/images/about_us/parts.jpg"
            alt="Service Background"
            width={1920}
            height={1080}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent flex items-end px-6 py-4">
            <h2 className="text-5xl shadow-lg relative my-46 mx-auto font-bold text-white">Contact Us</h2>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-24 relative z-10">
          {/* Phone Card */}
          <div className="bg-silver-300/90 backdrop-blur-md rounded-xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 border border-silver-400/50">
            <div className="flex justify-center mb-4">
              <FaPhone className="text-3xl text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">Phone</h3>
            <p className="text-black mt-2">01977766048</p>
          </div>  

          {/* Address Card */}
          <div className="bg-silver-300/90 backdrop-blur-md rounded-xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 border border-silver-400/50">
            <div className="flex justify-center mb-4">
              <FaMapMarkerAlt className="text-3xl text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">Address</h3>
            <p className="text-black mt-2">Dhaka, Bangladesh</p>
          </div>

          {/* Working Hours Card */}
          <div className="bg-silver-300/90 backdrop-blur-md rounded-xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 border border-silver-400/50">
            <div className="flex justify-center mb-4">
              <FaClock className="text-3xl text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">Working Hours</h3>
            <p className="text-black mt-2">Mon - Fri: 08:00 - 22:00</p>
            <p className="text-black">Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12 bg-silver-300/90 backdrop-blur-md rounded-xl p-8 shadow-2xl border border-silver-400/50">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Got a Question? Drop Us a Line!
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-silver-200 border border-silver-400 rounded-lg text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-red-700 focus:border-transparent transition-all duration-200"
                  placeholder="Your Name"
                  required
                />
              </div>
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-silver-200 border border-silver-400 rounded-lg text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-red-700 focus:border-transparent transition-all duration-200"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-600 mb-2">
                Phone*
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 bg-silver-200 border border-silver-400 rounded-lg text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-red-700 focus:border-transparent transition-all duration-200"
                placeholder="Your Phone Number"
                required
              />
            </div>
            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-2">
                Message*
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-3 bg-silver-200 border border-silver-400 rounded-lg text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-red-700 focus:border-transparent transition-all duration-200"
                placeholder="Tell us what’s on your mind..."
                required
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center bg-red-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-red-800 transition-all duration-300"
            >
              <FaPaperPlane className="mr-2" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}