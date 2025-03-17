"use server";

import dbConnect, { collectionNamesObject } from "@/library/dbConnect/dbConnect";
import bcrypt from "bcrypt";

export const loginUser = async (payload) => {
    const { email, password } = payload;

    const userCollection = dbConnect(collectionNamesObject.usersCollection);

    const user = await userCollection.findOne({ email });

    if (!user) {
        throw new Error("User not found");
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
        throw new Error("Invalid credentials");
    }

    return user;
}