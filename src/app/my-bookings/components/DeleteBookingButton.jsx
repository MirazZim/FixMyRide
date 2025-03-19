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
        <button onClick={() => handleDelete(id)} className="px-3 py-1 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 transition-all duration-200">
                        Delete
         </button>
    </div>
  )
}
