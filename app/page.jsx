"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import useSWR from "swr";
const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function Home() {
  const router = useRouter();
  const [first, setfirst] = useState("");
  const isClick = (clicked) => {
    if (clicked) return router.push("/admin/dashboard");
  };
  const { data, error, isLoading } = useSWR(
    "https://fakestoreapi.com/products/1",
    fetcher
  );
  console.log("data", data);
  console.log("error", error);
  return (
    <div className="flex w-full h-screen">
      <button className="" onClick={() => isClick(true)}>
        Login {isLoading}
      </button>
      <div className=" flex flex-col">{JSON.stringify(data, "\t")}</div>
    </div>
  );
}
