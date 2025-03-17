"use server"; // Marks this function to run on the server side
import bcrypt from "bcrypt"; // Import bcrypt for password hashing
import dbConnect, { collectionNamesObject } from "@/library/dbConnect/dbConnect"; // Import database connection setup

// This function is for registering a new user
export const registerUser = async (payload) => {
    // Connect to the 'users' collection in the database
    const userCollection = dbConnect(collectionNamesObject.usersCollection);

    // Extract values from the payload (data received from the form)
    const { name, email, password } = payload;

    // Check if any field is empty
    if (!name || !email || !password) {
        return { error: "All fields are required" }; // Return an error if fields are missing
    }

    // Check if a user with the same email already exists
    const user = await userCollection.findOne({ email: payload.email });

    // If no user is found, continue with registration
    if (!user) {
        // Hash the password for security
        const hashedPassword = await bcrypt.hash(password, 10);

        // Replace the original password with the hashed password
        payload.password = hashedPassword;

        // Insert the new user data into the database
        const result = await userCollection.insertOne(payload);

        // Extract values from the result
        const { _id, acknowledged } = result;  // `_id` is the MongoDB document ID
        const insertedId = result.insertedId.toString(); // Convert ObjectId to string for safe use

        // Return success response
        return { _id, acknowledged, insertedId };
    }

    // If a user with the same email already exists, return an error
    return { error: "User already exists" };
};
