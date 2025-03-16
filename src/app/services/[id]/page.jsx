import dbConnect, { collectionNamesObject } from '@/library/dbConnect/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react'

export default async function ServiceDetailsPage({ params }) {
    const p = await params;
    /* DB Connection */
    const serviceCollection = dbConnect(collectionNamesObject.servicesCollection)
    const data = await serviceCollection.findOne({ _id: new ObjectId(p.id) })
    /* ........................................................ */
    return (
        <div>
            {/* Banner Section */}
            <section className='flex justify-center '>
                <figure className=' mt-2 relative '>
                    <Image src={"/assets/images/checkout/checkout.png"}
                        alt={"banner"}
                        width={1350}
                        height={200} />
                    <div className='transparent-layer overlay-bg absolute w-full h-full  top-0'>
                        <div className='w-full h-full flex justify-center items-center'>
                            <div>
                                <h1 className='text-4xl font-bold text-white'>Service Details</h1>
                            </div>
                        </div>
                    </div>
                </figure>
            </section>
            <h1>Service Detail : {p.id}</h1>

        </div>
    )
}
