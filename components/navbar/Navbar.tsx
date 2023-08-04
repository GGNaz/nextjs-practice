"use client";
import React from "react";
import Logo from "../logo/Logo";
import {
  BsPlusLg,
  BsFilter,
  BsHeartFill,
  BsCart2,
  BsPersonFill,
} from "react-icons/bs";
import Link from "next/link";
import { Box, Button } from "@mui/material";
import { useAppSelector } from "@/redux/hooks";
export default function Navbar() {
  const myCart = useAppSelector((state) => state.cartReducer.cart);
  console.log("🚀 ~ file: page.tsx:36 ~ ViewProducts ~ MyCart:", myCart);
  return (
    <Box className="fixed left-0 top-0 z-50 w-full bg-gradient-to-b from-customblack/70 to-transparent px-5 py-2 backdrop:blur-sm">
      <Box className="flex flex-row justify-between">
        <Box>
          {" "}
          <Link href="/admin/home">
            <Logo withBrandname={true} color="text-white" />
          </Link>
        </Box>
        <Box className="flex flex-row items-center justify-center gap-5 px-5">
          <Link href="/admin/cart" className="relative">
            <BsCart2 className="text-2xl text-white" />
            {myCart?.length > 0 && (
              <div className="absolute -right-2 -top-1 flex h-4 w-4 animate-pulse items-center justify-center rounded-full bg-white p-2 text-xs font-medium">
                {myCart?.length}
              </div>
            )}
          </Link>
          <Button className="flex flex-row items-center justify-center gap-2 rounded-lg border px-4 py-1 text-white hover:bg-darkviolet/30">
            <BsPersonFill className="text-lg" />
            <span>Login</span>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
