"use client";
import React from 'react';
import { Card, CardContent } from '../../../Components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from '../../../Components/ui/carousel';

export default function Banner() {
  const images = [
    { src: '/assets/images/banner/1.jpg', alt: 'Banner Image 1' },
    { src: '/assets/images/banner/2.jpg', alt: 'Banner Image 2' },
    { src: '/assets/images/banner/3.jpg', alt: 'Banner Image 3' },
    { src: '/assets/images/banner/4.jpg', alt: 'Banner Image 4' },
    { src: '/assets/images/banner/5.jpg', alt: 'Banner Image 5' },
    { src: '/assets/images/banner/6.jpg', alt: 'Banner Image 6' },
  ];

  // State for tracking the current slide
  const [api, setApi] = React.useState(null);
  const [current, setCurrent] = React.useState(0);

  // Update current slide when carousel changes
  React.useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap() + 1);
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full max-w-11/12 mx-auto bg-gray-100">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{ align: 'start', loop: true }}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card className="border-none  overflow-hidden  bg-gray-100">
                <CardContent className="p-0 relative">
                  {/* Background Image with Gradient Overlay */}
                  <div
                    className="w-full h-[450px] md:h-[550px] bg-cover bg-center relative  "
                    style={{ backgroundImage: `url(${image.src})` }}
                  >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                    {/* Text and Buttons with Glassmorphism */}
                    <div className="absolute inset-0 flex flex-col justify-center items-start p-6 md:p-12">
                      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 md:p-8 max-w-lg animate-fadeIn">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-sans">
                          Affordable Price For Car Servicing
                        </h1>
                        <p className="mt-3 text-base md:text-lg text-gray-200 max-w-md font-sans">
                          There Are Many Variations Of Passages Of Available, But The Majority Have Suffered Alteration In Some Form
                        </p>
                        <div className="mt-6 flex space-x-4">
                          <button className="bg-gradient-to-r from-red-700 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                            Discover More
                          </button>
                          <button className="bg-transparent border-2 border-white hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                            Latest Project
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Navigation Arrows with Glow Effect */}
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full w-12 h-12 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full w-12 h-12 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110" />
        {/* Sleek Progress Bar Instead of Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-300/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-orange-500 transition-all duration-300"
            style={{ width: `${(current / images.length) * 100}%` }}
          />
        </div>
      </Carousel>
    </div>
  );
}