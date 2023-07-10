"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";
import getUser from "@/utils/getUser";
import HOCLoading from "@/components/loading/HOCLoading";
export default function Home() {
  const router = useRouter();

  const isClick = (clicked) => {
    if (clicked) return router.push("/admin/dashboard");
  };
  const { data, error, isLoading } = useSWR(
    "https://fakestoreapi.com/products/1",
    getUser
  );

  console.log("isLoading", isLoading);

  useEffect(() => {
    console.log("awit");
  }, []);
  console.log("data", data);
  console.log("error", error);
  return (
    <>
      {/* {isLoading ? (
        <HOCLoading />
      ) : ( */}
      <div className="flex flex-col items-center gap-20 w-full h-screen">
        <button className="" onClick={() => isClick(true)}>
          Login
        </button>
        <input
          type="text"
          className="border max-w-md"
          onChange={(e) => {
            console.log("nakalagay", e.target.value);
          }}
        />

        <div className=" flex flex-col">{JSON.stringify(data, "\t")}</div>
      </div>
      {/* )} */}
    </>
  );
}
