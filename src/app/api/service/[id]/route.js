import { authOptions } from "@/library/authOptions/authOptions";
import dbConnect, { collectionNamesObject } from "@/library/dbConnect/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";


export const DELETE = async (req, { params }) => {

    const bookingCollection = dbConnect(collectionNamesObject.bookingsCollection)
    const  p = await params;
    const query = { _id: new ObjectId(p.id) };

    const session = await getServerSession(authOptions);
    const currentBooking = await bookingCollection.findOne(query);
    const  isOwnerOk  =  session?.user?.email === currentBooking?.email;


   if (isOwnerOk) {
    //Deleting user  specific booking
    const deleteResponse  = await bookingCollection.deleteOne(query);
    revalidatePath("/my-bookings");
    return NextResponse.json(deleteResponse);
    
    
    
} 
else
 {
    return NextResponse.json({ success: false, message: "Forbidden  Action" }, { status: 403 });
}
}




   
   
   



export const GET = async (req, { params }) => {
    const p = await params;
    const serviceCollection = dbConnect(collectionNamesObject.servicesCollection);
    const data = await serviceCollection.findOne({ _id: new ObjectId(p.id) });

    return NextResponse.json(data);
}



// export const PUT = async (req) => {
    
// }

