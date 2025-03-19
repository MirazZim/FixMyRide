import dbConnect, { collectionNamesObject } from "@/library/dbConnect/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    const p = await params;
    const serviceCollection = dbConnect(collectionNamesObject.servicesCollection);
    const data = await serviceCollection.findOne({ _id: new ObjectId(p.id) });

    return NextResponse.json(data);
}



// export const PUT = async (req) => {
    
// }

// export const DELETE = async (req) => {
    
// }
