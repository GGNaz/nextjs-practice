"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Sidebar() {
  const path = usePathname();
  console.log("🚀 ~ file: Sidebar.tsx:7 ~ Sidebar ~ path:", path);
  return (
    <div>
      <Link href="/admin/dashboard">
        <div
          className={`${
            path === "/admin/dashboard" ? "text-black" : "text-red-600"
          }`}
        >
          dashboard
        </div>
      </Link>

      <Link href="/admin/items">
        <div
          className={`${
            path === "/admin/items" ? "text-black" : "text-red-600"
          }`}
        >
          items
        </div>
      </Link>
    </div>
  );
}
