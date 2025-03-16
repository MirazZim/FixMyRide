import dbConnect, { collectionNamesObject } from '@/library/dbConnect/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default async function ServiceDetailsPage({ params }) {
    const p = await params;
    const serviceCollection = dbConnect(collectionNamesObject.servicesCollection);
    const data = await serviceCollection.findOne({ _id: new ObjectId(p.id) });

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Banner Section */}
            <section className='flex justify-center'>
                <figure className='mt-2 relative'>
                    <Image src={"/assets/images/checkout/checkout.png"}
                        alt="banner"
                        width={1350}
                        height={200}
                        className="rounded-xl shadow-lg"
                    />
                    <div className='absolute w-full h-full top-0 bg-black/60 flex justify-center items-center'>
                        <h1 className='text-5xl font-extrabold text-white drop-shadow-md'>Service Details</h1>
                    </div>
                </figure>
            </section>

            {/* Main Content */}
            <div className="w-11/12 mx-auto my-10 grid grid-cols-3 gap-8">
                <div className="col-span-2">

                    {/* Service Image with Enhanced Gradient Overlay */}
                    <div className="relative h-80 rounded-xl shadow-lg overflow-hidden">
                        <Image
                            className="absolute w-full h-full object-cover"
                            src={data.img}
                            alt="service"
                            width={1920}
                            height={1080}
                        />
                        <div className="absolute top-0 w-full h-full bg-gradient-to-r from-black/70 to-transparent flex items-center p-8">
                            <h1 className="text-white text-4xl font-extrabold">Details of {data.title}</h1>
                        </div>
                    </div>

                    {/* Service Details */}
                    <div className="p-10 bg-white rounded-xl shadow-lg mt-6">
                        <h2 className="text-4xl font-extrabold text-orange-500 mb-4">{data.title}</h2>
                        <p className="text-gray-600 leading-relaxed">{data.description}</p>
                    </div>

                    {/* Facilities Section with Modern Cards */}
                    <div className="grid grid-cols-2 gap-6 my-6">
                        {data.facility.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white backdrop-blur-md p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-xl hover:scale-[1.03] transition-transform duration-300"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 to-orange-500"></div>

                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="bg-red-500 text-white p-2 rounded-full shadow-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-800">{item?.name}</h2>
                                </div>

                                <p className="text-gray-600">{item?.details}</p>
                            </div>
                        ))}
                    </div>

                    {/* Steps Section */}
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h2 className="text-2xl font-extrabold text-gray-800 mb-4">3 Simple Steps to Process</h2>
                        <p className="text-gray-600">{data.process}</p>
                    </div>
                </div>

                {/* Sidebar Section */}
                <div className="p-6 bg-white rounded-xl shadow-md">
                    {/* Services List */}
                    <div className="bg-white p-6 rounded-xl shadow-2xl ">
                        <h3 className="text-2xl font-extrabold text-gray-800 mb-4">Services</h3>
                        <ul className="space-y-3">

                            <li className="
           bg-gradient-to-r from-gray-100 to-gray-200 
            text-gray-800 font-medium
            px-4 py-3 
            rounded-lg 
            shadow-md 
            cursor-pointer 
            hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 
            hover:text-white
            transition-all duration-300
        ">
                                Full Car Repair
                            </li>

                            <li className="
            bg-gradient-to-r from-gray-100 to-gray-200 
            text-gray-800 font-medium
            px-4 py-3 
            rounded-lg 
            shadow-md 
            cursor-pointer 
            hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 
            hover:text-white
            transition-all duration-300
        ">
                                Engine Repair
                            </li>

                            <li className="
            bg-gradient-to-r from-gray-100 to-gray-200 
            text-gray-800 font-medium
            px-4 py-3 
            rounded-lg 
            shadow-md 
            cursor-pointer 
            hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 
            hover:text-white
            transition-all duration-300
        ">
                                Automatic Services
                            </li>

                            <li className="
            bg-gradient-to-r from-gray-100 to-gray-200 
            text-gray-800 font-medium
            px-4 py-3 
            rounded-lg 
            shadow-md 
            cursor-pointer 
            hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 
            hover:text-white
            transition-all duration-300
        ">
                                Engine Oil Change
                            </li>

                            <li className="
            bg-gradient-to-r from-gray-100 to-gray-200 
            text-gray-800 font-medium
            px-4 py-3 
            rounded-lg 
            shadow-md 
            cursor-pointer 
            hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 
            hover:text-white
            transition-all duration-300
        ">
                                Battery Change
                            </li>
                        </ul>
                    </div>


                    {/* Download Section */}
                    <div className="mt-4 bg-black border-2 border-blue-500 p-4 text-white rounded-xl shadow-md">
                        <h3 className="text-xl font-bold mb-4">Download</h3>
                        <div className="flex flex-col gap-2">
                            <button className="bg-gradient-to-r from-gray-100 to-gray-200 
                                text-gray-800 font-medium
                                px-4 py-3 
                                rounded-lg 
                                shadow-md 
                                cursor-pointer 
                                hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 
                                hover:text-white
                                transition-all duration-300
                            ">
                                Our Brochure
                            </button>
                            <button className="bg-gradient-to-r from-gray-100 to-gray-200 
                                text-gray-800 font-medium
                                px-4 py-3 
                                rounded-lg 
                                shadow-md 
                                cursor-pointer 
                                hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 
                                hover:text-white
                                transition-all duration-300
                            ">
                                Company Details
                            </button>
                        </div>
                    </div>

                    {/* Price and Checkout */}
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center mt-6">
                        <h2 className="text-3xl font-extrabold text-gray-800 mb-2">${data.price}</h2>
                        <p className="text-sm text-gray-500 mb-4">Exclusive offer available for a limited time!</p>

                        <Link href={`/checkout/${data._id}`}>
                            <button className="
                                bg-gradient-to-r from-red-500 to-red-700 
                                text-white font-semibold 
                                px-4 py-3 
                                rounded-full 
                                w-full 
                                shadow-md 
                                hover:from-red-600 hover:to-red-800 
                                transition duration-300
                            ">
                                Proceed to Checkout
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
