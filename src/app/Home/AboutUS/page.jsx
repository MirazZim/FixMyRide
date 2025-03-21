"use client";
import React from 'react';
import Image from 'next/image'; // For optimized image loading

export default function AboutUs() {
  const images = [
    { src: '/assets/images/about_us/person.jpg', alt: 'Person in workshop' },
    { src: '/assets/images/about_us/parts.jpg', alt: 'Car parts' },
  ];

  return (
    <section className="w-full py-12 px-4 bg-gradient-to-b">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Left: Images (Top and Under) */}
          <div className="flex flex-col space-y-6">
            <div className="relative group">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                width={521}
                height={557}
                className="w-full h-auto max-h-[400px] sm:max-h-[450px] md:max-h-[557px] object-cover rounded-2xl shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl animate-fadeIn"
              />
            </div>
            <div className="relative group">
              <Image
                src={images[1].src}
                alt={images[1].alt}
                width={521}
                height={257}
                className="w-full h-auto max-h-[200px] sm:max-h-[220px] md:max-h-[257px] object-cover rounded-2xl shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl animate-fadeIn"
                style={{ animationDelay: '0.2s' }}
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="p-6 md:p-8 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl animate-fadeIn">
            <h3 className="text-red-700 text-2xl font-semibold tracking-wide uppercase">
             <strong>About Us</strong>
            </h3>
            <h1 className="mt-2 text-2xl sm:text-3xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 leading-tight font-sans uppercase">
              We are qualified & of experience in this field
            </h1>
            <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              At <strong className='text-red-800'>Fix My Ride</strong> we pride ourselves on being a team of highly qualified professionals with years of experience in the automotive industry. Our passion for cars and commitment to excellence drive us to deliver <strong className='text-red-800'>top-notch services that keep your vehicle running smoothly and safely</strong>.
            </p>
            <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              Our mission is simple: to be your trusted partner on the road. We believe in transparency, quality, and building lasting relationships with our clients.<strong className='text-red-800'> When you choose Fix My Ride, you’re choosing a team that’s as dedicated to your vehicle as you are.</strong>
            </p>
            <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              Let us take care of your car, so you can focus on the journey ahead. Visit us today and experience the <strong className='text-red-800'>Fix My Ride</strong> difference!
            </p>
            <button className="mt-6 bg-gradient-to-r from-red-700 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-orange-500/50">
              Get More Info...
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}