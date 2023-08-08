"use client";
import Loading from "@/app/loading";
import apiGet from "@/utils/apiFunction";
import React, { Suspense } from "react";
import useSWR from "swr";

export default function page() {
  const {
    data: products,
    error,
    isLoading,
  } = useSWR("https://fakestoreapi.com/products", apiGet);
  console.log("products", products);
  return (
    <div>
      asd123123asdasdasdasdsfsdfsdf12312312312321312
      {/* <Suspense>{JSON.stringify(products).slice(0, 1)}</Suspense> */}
    </div>
  );
}
