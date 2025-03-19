"use client";
import MybookingTable from "@/Components/tables/MybookingTable";


import React, {useEffect, useState } from "react";


export default function MyBookings() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchBookings = async () => {
      const res = await fetch(
        "http://localhost:3000/api/service"
      );
      const data = await res.json();
      setData(data);
    };
    fetchBookings();
  }, []);
  return (
    <MybookingTable data={data} />
  );
};