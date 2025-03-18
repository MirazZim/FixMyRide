"use client";
import {  signIn } from "next-auth/react";
import Swal from "sweetalert2";
// import { useRouter } from "next/navigation";


export default function LoginForm() {
    // const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const data = { email, password };
        try {
            const result = await signIn('credentials', {
                ...data,
                redirect: false  // Important for manual redirect control
            });

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
                    text: "You have successfully logged in!",
                    icon: "success"
                  });
                window.location.href = "/"; // Redirect to home page
            }
        } catch (error) {
            console.error("Login Error:", error);
            alert("Authentication Failed");
        }
    }
  return (
    <form onSubmit={handleSubmit} action="" className="space-y-5">
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
              Sign In
            </button>
          </form>
  )
}
