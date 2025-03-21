"use client";
import  {  useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import '@smastrom/react-rating/style.css'
import { PiQuotesFill } from "react-icons/pi";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('Reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
  return (
    <div className='my-2'>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center tracking-tight">Reviews</h2>
            <p className="text-gray-600 text-xl text-center mb-4">What our clients say</p>

            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                {
                    reviews.map(review => (
                        <SwiperSlide
                            key={review._id}
                        >
                            <div className="flex justify-center">
                                <PiQuotesFill className="text-center text-8xl " />
                            </div>
                            <div className="flex flex-col items-center my-16 mx-24">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}   
                                    readOnly
                                />
                                <p className="text-lg text-gray-600 mb-4 my-8">{review.details}</p>
                                <h3 className="text-2xl font-semibold text-gray-800">{review.name}</h3>
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
  )
}
