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
        <div className='grid mt-10 grid-cols-12 gap-4 container mx-auto'>
            {data.map(service => (
                <div key={service._id} className='col-span-12 md:col-span-6 lg:col-span-4 p-4 h-full border rounded-lg'>
                    <figure className='w-full h-3/4 flex justify-center items-center'>
                        <Image
                            width={314} height={150}
                            src={service.img} alt={service.title} className=' w-full h-full object-fit' />
                    </figure>
                    <div className='flex justify-between items-center mt-4'>
                        <div>
                            <h2 className='text-xl font-bold'>{service.title}</h2>
                            <p className='font-bold text-xl text-orange-500'>${service.price}</p>
                        </div>
                        <div>
                            <Link href={`/services/${service._id}`} className='text-orange-500'>
                                <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
