import dbConnect, { collectionNamesObject } from '@/library/dbConnect/dbConnect'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default async function ServicesSection() {

    /* DB Connection */
    const serviceCollection = dbConnect(collectionNamesObject.servicesCollection)
    const data = await serviceCollection.find({}).toArray()
    /* ........................................................ */

    return (
        <div className='container mx-auto px-6 py-12 bg-gray-100'>
            {/* Section Header */}
            <h1 className="text-4xl font-bold text-gray-800 mb-8 tracking-wide text-center">
                Premium Car Services
            </h1>
            <p className="text-lg text-gray-600 text-center mb-12">
                Explore our exclusive range of services tailored for your car.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                
            {data.map(service => (
                <div key={service._id} className='relative p-6 bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-xl transform transition-all duration-200 hover:scale-110'>
                    <figure className='relative h-[200px] w-full overflow-hidden ' >
                    <Link href={`/services/${service._id}`}>
                        <Image
                            width={314} height={150}
                            src={service.img} alt={service.title} className=' absolute inset-0 w-full rounded-3xl h-full object-cover transition-transform duration-300 hover:scale-110' />
                    </Link>
                    </figure>
                    <div className='flex justify-between items-center mt-4  '>
                        <div>
                            <h2 className='text-xl font-bold'>{service.title}</h2>
                            <p className='font-bold text-xl text-orange-500'>${service.price}</p>
                        </div>
                        <div>
                        <Link href={`/services/${service._id}`} className='text-black hover:text-white'>
                            <button className='bg-gradient-to-r from-gray-100 to-gray-200 
                                               text-gray-800 font-bold
                                               px-4 py-3 
                                               rounded-lg 
                                               shadow-md 
                                               cursor-pointer 
                                               hover:bg-gradient-to-r
                                                hover:from-red-500
                                                hover:to-red-700 
                                               hover:text-white
                                               transition-all duration-300'>
                            
                                <FaArrowRight /> 
                           
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}


// const data = await serviceCollection.find({}).toArray();
// /* ........................................................ */

// return (
//     <div className="container mx-auto px-6 py-12 bg-gray-50">
//         {/* Section Header */}
//         <h1 className="text-4xl font-bold text-gray-800 mb-8 tracking-wide text-center">
//             Premium Cat Services
//         </h1>
//         <p className="text-lg text-gray-600 text-center mb-12">
//             Explore our exclusive range of services tailored for your feline friends.
//         </p>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {data.map((service) => (
//                 <div
//                     key={service._id}
//                     className="relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//                 >
//                     {/* Service Image */}
//                     <figure className="relative h-[200px] w-full overflow-hidden">
//                         <Image
//                             src={service.img}
//                             alt={service.title}
//                             width={400}
//                             height={300}
//                             className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-110"
//                             priority
//                         />
//                         <div className="absolute inset-0 bg-black/30"></div>
//                     </figure>

//                     {/* Service Details */}
//                     <div className="p-6 flex flex-col justify-between h-full">
//                         <h2 className="text-xl font-bold text-gray-800">{service.title}</h2>
//                         <p className="text-lg font-semibold text-orange-500 mt-2">${service.price}</p>
//                         <Link
//                             href={`/services/${service._id}`}
//                             className="mt-auto flex items-center text-orange-500 hover:text-orange-600 transition-colors duration-200 font-medium"
//                         >
//                             Learn More
//                             <FaArrowRight className="ml-2" />
//                         </Link>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </div>
// );
// }
//  */