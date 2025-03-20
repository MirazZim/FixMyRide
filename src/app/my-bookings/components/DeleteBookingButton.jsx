"use client";

import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function DeleteBookingButton({ id }) {
    const router = useRouter();
    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"    
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await fetch(`http://localhost:3000/api/service/${id}`, { method: "DELETE" });
                const data = await response.json();
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: "Good job!",
                        text: "You have successfully deleted!",
                        icon: "success"
                    });
                    router.refresh();
                } else {
                    Swal.fire({
                        title: "Error!",
                        text: "You have failed to delete!",
                        icon: "error"
                    });
                }
            }
        });
    }
  return (
    <div>
        <button onClick={() => handleDelete(id)} className="px-5 py-3 bg-gradient-to-r rounded-full from-gray-100 to-gray-200 text-gray-800 font-semibold shadow-lg hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 hover:text-white transform transition-all duration-300 hover:scale-105">
                        Delete
         </button>
    </div>
  )
}
