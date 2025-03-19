// "use client";
import MybookingTable from "@/Components/tables/MybookingTable";
import { headers } from "next/headers";




const fetchBookings = async () => {
  const res = await fetch(
    "http://localhost:3000/api/service", 
    {
      headers: headers(),
    }
  );
  const data = await res.json();
  return data;
};


export default async function MyBookings() {
  const  data = await fetchBookings();
  return (
    <MybookingTable data={data} />
  );
};