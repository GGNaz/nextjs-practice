"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [first, setfirst] = useState("");
  const isClick = (clicked) => {
    if (clicked) return router.push("/admin/dashboard");
  };
  return (
    <div className="flex w-full h-screen">
      <button className="text-white" onClick={() => isClick(true)}>
        Login
      </button>
    </div>
  );
}
