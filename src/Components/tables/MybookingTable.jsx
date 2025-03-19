import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function MybookingTable({ data }) {
  return (
    <div className="container mx-auto px-6 py-10 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="relative h-64 overflow-hidden rounded-xl shadow-md">
        <Image
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          src="/assets/images/about_us/parts.jpg"
          alt="Service Background"
          width={1920}
          height={1080}
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <h1 className="text-white text-4xl font-semibold ml-8 tracking-wide">
            My Bookings
          </h1>
        </div>
      </div>

      {/* Table Section */}
      <div className="mt-10 bg-white rounded-xl shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-separate" style={{ borderSpacing: "0 8px" }}>
            <thead className="text-gray-500 text-xs font-medium uppercase tracking-widest">
              <tr>
                <th className="py-4 px-6 w-16"></th>
                <th className="py-4 px-6">Service Name</th>
                <th className="py-4 px-6">Price</th>
                <th className="py-4 px-6">Booking Date</th>
                <th className="py-4 px-6">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-900">
              {data?.map((booking) => (
                <tr
                  key={booking._id}
                  className="bg-white hover:bg-gray-50 transition-all duration-200 ease-in-out rounded-lg shadow-sm"
                >
                  <td className="py-4 px-6">
                    <img
                      src={booking.service_image}
                      alt={booking.service_name}
                      width={40}
                      height={40}
                      className="rounded-md object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </td>
                  <td className="py-4 px-6 font-medium text-base">{booking.service_name}</td>
                  <td className="py-4 px-6 text-gray-700">${booking.service_price}</td>
                  <td className="py-4 px-6 text-gray-600">
                    {new Date(booking.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <Link href={`/my-bookings/update/${booking._id}`}>
                        <button className="px-3 py-1 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-900 transition-all duration-200">
                          Edit
                        </button>
                      </Link>
                      <button className="px-3 py-1 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 transition-all duration-200">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}