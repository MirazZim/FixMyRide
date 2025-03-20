import dbConnect, { collectionNamesObject } from "@/library/dbConnect/dbConnect";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server"

export  const  GET = async (req, { params }) => {

    const p = await params;   
    const bookingCollection = dbConnect(collectionNamesObject.bookingsCollection);
    const query = { _id: new ObjectId(p.id) };
    const singleBooking = await bookingCollection.findOne(query);

    return  NextResponse.json(singleBooking) 
}

export const PATCH = async (req, { params }) => {
    const p = await params;
    const bookingCollection = dbConnect(collectionNamesObject.bookingsCollection);
    const query = { _id: new ObjectId(p.id) };
    const body = await req.json();
   const filter  = {
    $set: {
        ...body
    }
   }
   const options = {
    upsert: true
   }
   const updateResponse = await bookingCollection.updateOne(query, filter, options);
   revalidatePath("/my-bookings");
    return NextResponse.json(updateResponse);
}
