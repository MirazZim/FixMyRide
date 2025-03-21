import React from 'react'
import ServicesSection from './ServicesSection/page'
import Banner from './Banner/page'
import AboutUs from './AboutUS/page'
import WhyChooseUs from './WhyChooseUs/page'
import Reviews from './Reviews/page'

export default function HomePage() {
  return (
    <div  className='bg-gray-100'>
        <Banner />
        <ServicesSection />
        <AboutUs />
        <WhyChooseUs />
        <Reviews />
    </div>
  )
}
