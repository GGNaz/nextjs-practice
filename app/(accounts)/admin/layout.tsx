"use client";

import Sidebar from "@/components/sidebar/Sidebar";
import { useRouter } from "next/navigation";

import React, { useEffect } from "react";

export default function AdminLayout({ children }: any) {
  const router = useRouter();

  const routeCheck = false;
  useEffect(() => {
    if (routeCheck) return router.push("/login");
  }, [routeCheck]);
  return (
    <div className="flex flex-row h-screen w-full">
      <div className="basis-1/5 bg-slate-300">
        
        <Sidebar />
      </div>
      <div className="basis-4/5 bg-violet-200">{children}</div>
    </div>
  );
}
