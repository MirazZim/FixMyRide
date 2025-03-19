import dbConnect, { collectionNamesObject } from "@/library/dbConnect/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    const body = await req.json();
    const bookingsCollection = dbConnect(collectionNamesObject.bookingsCollection);
    const result = await bookingsCollection.insertOne(body);
    return NextResponse.json(result);
}
