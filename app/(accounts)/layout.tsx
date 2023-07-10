"use client";

import Sidebar from "@/components/sidebar/Sidebar";
import { useRouter } from "next/navigation";

import React, { useEffect } from "react";

export default function AdminLayout({ children }: any) {
 
  return (

    
      <div>{children}</div>

  );
}
