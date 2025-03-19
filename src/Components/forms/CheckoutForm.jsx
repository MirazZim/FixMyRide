"use client";

import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export default function CheckoutForm({ data }) {
    const { data: session } = useSession();


    const handleBookingService = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const bookingData = {
            //session data
            customerName: formData.get("name"),
            date: formData.get("date"),
            email: formData.get("email"),
            //user inputs
            dueAmount: formData.get("dueAmount"),
            phone: formData.get("phone"),
            address: formData.get("address"),
            //service data
            service_id: data?._id,
            service_name: data?.title,
            service_price: data?.price,
            service_image: data?.img,

        };
        console.log("Booking Data:", bookingData);
        // Add your booking logic here (e.g., API call)
        const res = await fetch("http://localhost:3000/api/service", {
            method: "POST",
            body: JSON.stringify(bookingData),
        });
        const result = await res.json();
        if (result.acknowledged) {
            Swal.fire({
                title: "Good job!",
                text: "You have successfully booked the service!",
                icon: "success"
              });
              form.reset();
              window.location.href = "/";
        }
        console.log(result);
    };

    return (
        <div>
            <section className="flex justify-center mt-12">
                <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-4xl lg:w-[1140px] lg:h-[700px] border border-gray-100/30 backdrop-blur-sm">
                    <h2 className="text-center text-3xl font-bold tracking-wide text-gray-800 mb-8 mt-10">
                        <span className="block">Book Service:</span>
                        <span className="inline-block bg-gray-100 px-3 py-1 rounded-full">{data?.title}</span>
                    </h2>
                    <form onSubmit={handleBookingService} className="h-full flex flex-col justify-between">
                        <div className="space-y-8">
                            <div className="flex gap-8">
                                <div className="flex-1">
                                    <label className="block text-gray-700 text-sm font-semibold mb-3 tracking-wide">
                                        Name
                                    </label>
                                    <input
                                    readOnly
                                        defaultValue={session?.user?.name || ""}
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        className="w-full p-3 mt-2 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                                        required
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-gray-700 text-sm font-semibold mb-3 tracking-wide">
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        className="w-full p-3 mt-2 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex gap-8">
                                <div className="flex-1">
                                    <label className="block text-gray-700 text-sm font-semibold mb-3 tracking-wide">
                                        Email
                                    </label>
                                    <input
                                        readOnly
                                        defaultValue={session?.user?.email || ""}
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        className="w-full p-3 mt-2 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                                        required
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-gray-700 text-sm font-semibold mb-3 tracking-wide">
                                        Due Amount
                                    </label>
                                    <input
                                        readOnly
                                        defaultValue={data?.price || ""}
                                        type="number"
                                        name="dueAmount"
                                        placeholder="Due Amount"
                                        className="w-full p-3 mt-2 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex gap-8">
                                <div className="flex-1">
                                    <label className="block text-gray-700 text-sm font-semibold mb-3 tracking-wide">
                                        Phone
                                    </label>
                                    <input
                                        defaultValue={session?.data?.user?.phone || ""}
                                        type="tel"
                                        name="phone"
                                        placeholder="Your Phone"
                                        className="w-full p-3 mt-2 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                                        required
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-gray-700 text-sm font-semibold mb-3 tracking-wide">
                                        Present Address
                                    </label>
                                    <input
                                        type="text"
                                        name="address"
                                        placeholder="Your Address"
                                        className="w-full p-3 mt-2 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                                        required
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className=" bg-gradient-to-r from-red-500 to-red-700 
                                text-white font-semibold 
                                px-4 py-3 
                                rounded-full 
                                w-full 
                                shadow-md 
                                hover:from-red-600 hover:to-red-800 
                                transition duration-300"
                            >
                                Order Confirm
                            </button>
                        </div>

                    </form>
                </div>
            </section>
        </div>
    );
}