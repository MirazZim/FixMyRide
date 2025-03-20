import { authOptions } from "@/library/authOptions/authOptions";
import dbConnect, { collectionNamesObject } from "@/library/dbConnect/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server"

export  const  GET = async (req, { params }) => {

    const p = await params;   
    const bookingCollection = dbConnect(collectionNamesObject.bookingsCollection);
    const query = { _id: new ObjectId(p.id) };

    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    
    const singleBooking = await bookingCollection.findOne(query);
    const isOwnerOk  =  email === singleBooking?.email;

    if (isOwnerOk) {
        return  NextResponse.json(singleBooking) 
    }
    else
    {
        return NextResponse.json({ success: false, message: "Forbidden  Action" }, { status: 403 });
    }
}

export const PATCH = async (req, { params }) => {
    const p = await params;
    const bookingCollection = dbConnect(collectionNamesObject.bookingsCollection);
    const query = { _id: new ObjectId(p.id) };

     
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    const currentBooking = await bookingCollection.findOne(query);
    const isOwnerOk  =  email === currentBooking?.email;

    if (isOwnerOk) {
         //Update
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
    else
    {
        return NextResponse.json({ success: false, message: "Forbidden  Action" }, { status: 403 });
    }

   
}
