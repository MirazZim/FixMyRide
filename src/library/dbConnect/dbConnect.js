import { MongoClient, ServerApiVersion } from 'mongodb';



export const collectionNamesObject = {
    servicesCollection: 'test_services',
    usersCollection: 'test_user',
    bookingsCollection: 'Booking_Services'
}



export default function dbConnect(collectionName) {
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.qlurp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
return client.db(process.env.DB_NAME).collection(collectionName)
}




