"use client";
import { signIn } from 'next-auth/react';
import { FaGithub, FaGoogle } from 'react-icons/fa';


export default function SocialLogin() {
    const handleSocialLogin = async (providerName) => {
        console.log("Social Login",providerName);

        const result = await signIn(providerName, {
            redirect: false
        })

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
        
    }
    return (
        <div className="flex items-center justify-center space-x-4 mt-5">
            <button
                onClick ={() => handleSocialLogin('google')}
                type="button"
                className="w-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 font-semibold px-5 py-3 rounded-xl shadow-lg hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 hover:text-white transform transition-all duration-300 hover:scale-105"
            >
                <div className="flex items-center justify-center">
                    <FaGoogle className="mx-auto" />
                </div>
            </button>
            <button
                onClick ={() => handleSocialLogin('github')}
                type="button"
                className="w-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 font-semibold px-5 py-3 rounded-xl shadow-lg hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 hover:text-white transform transition-all duration-300 hover:scale-105"
            >
                <div className="flex items-center justify-center">
                    <FaGithub className="mx-auto" />
                </div>
            </button>
        </div>
    )
}
