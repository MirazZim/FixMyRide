import { authOptions } from "@/library/authOptions/authOptions";
import dbConnect, { collectionNamesObject } from "@/library/dbConnect/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export const GET = async (req) => {
    const session = await getServerSession(authOptions);
    if (session) {
        const email = session?.user?.email;
        const bookingsCollection = dbConnect(collectionNamesObject.bookingsCollection);
        const result = await bookingsCollection.find({ email }).toArray();
        return NextResponse.json(result);
    }
   
    return NextResponse.json({});
}



export const POST = async (req) => {
    const body = await req.json();
    const bookingsCollection = dbConnect(collectionNamesObject.bookingsCollection);
    const result = await bookingsCollection.insertOne(body);
    return NextResponse.json(result);
}
