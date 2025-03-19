"use client";

import { registerUser } from "@/app/actions/auth/registerUser";
import Swal from "sweetalert2";

export default function RegisterForm() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const data = { name, email, password };
        const result = await registerUser(data);
        if (result?.error) {
            Swal.fire({
                title: "Error!",
                text: "You have failed to login!",
                icon: "error"
              });
             // Show error message if login fails
        } else {
            Swal.fire({
                title: "Good job!",
                text: "You have successfully registered!",
                icon: "success"
              });
            window.location.href = "/login";
        }
       
    }
    return (
        <form onSubmit={handleSubmit} action="" className="space-y-5">
            <div>
                <label htmlFor="name" className="text-gray-700 font-medium">Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full p-3 mt-2 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                />
            </div>

            <div>
                <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
                <input
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full p-3 mt-2 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                />
            </div>

            <div>
                <label htmlFor="photoURL" className="text-gray-700 font-medium">PhotoURL</label>
                <input
                    type="text"
                    name="photoURL"
                    placeholder="Enter your photo URL"
                    className="w-full p-3 mt-2 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                />
            </div>

            <div>
                <label htmlFor="password" className="text-gray-700 font-medium">Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="w-full p-3 mt-2 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 font-semibold px-5 py-3 rounded-xl shadow-lg hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 hover:text-white transform transition-all duration-300 hover:scale-105"
            >
                Sign Up
            </button>
        </form>
    )
}
