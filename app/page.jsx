"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";
import getUser from "@/utils/getUser";
import HOCLoading from "@/components/loading/HOCLoading";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Logo from "@/components/logo/Logo";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

export default function Home() {
  const router = useRouter();

  const isClick = (clicked) => {
    if (clicked) return router.push("/admin/home");
  };
  // const { data, error, isLoading } = useSWR(
  //   "https://fakestoreapi.com/products/1",
  //   getUser
  // );

  // useEffect(() => {
  //   console.log("awit");
  // }, []);
  // console.log("data", data);
  // console.log("error", error);
  return (
    <div className="flex flex-row justify-center  h-screen w-full ">
      <div className="flex md:basis-2/5 max-w-xl w-full md:max-w-none ">
        <div className="flex h-full w-full justify-center items-center">
          <div className=" p-5 rounded-xl max-w-lg w-full flex flex-col justify-center gap-3">
            <Logo withBrandname={true} />
            <div className="flex flex-col gap-3">
              <div className="flex flex-col text-customblack">
                <div className="text-sm">Welcome back</div>
                <div className="font-bold text-lg">Sign In to your Account</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <div className="text-sm text-gray-400">Email</div>
                  <input
                    type="email"
                    placeholder="janedoe@mail.com"
                    className="w-full text-sm h-10 rounded-lg border border-brandviolet focus:outline-none px-2"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-sm text-gray-400">Password</div>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full text-sm  h-10 rounded-lg border border-brandviolet focus:outline-none px-2"
                    />
                    <BsEyeSlashFill className="absolute cursor-pointer right-3 top-3 text-gray-500" />
                  </div>
                </div>
                <div className="pt-5">
                  <button className="p-2.5 rounded-lg bg-darkviolet hover:bg-darkviolet/80 text-white w-full text-sm">
                    Login
                  </button>
                </div>
                <div className="flex flex-row py-5">
                  <div className=" w-full">
                    <div className="border-b-darkviolet  w-full" />
                  </div>
                  <div>OR</div>
                  <div className="divide-y divide-x-2 h-2 w-full">
                    <div />
                  </div>
                </div>
                <div>
                  <button
                    className="p-2 rounded-lg text-gray-600 border border-darkviolet hover:bg-gray-100  w-full text-sm"
                    onClick={() => isClick(true)}
                  >
                    Login as Guest
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`hidden md:flex flex-col justify-center p-14 items-center md:basis-3/5 bg-[url(https://img.freepik.com/premium-photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone_8087-3877.jpg)] bg-center bg-cover bg-darkviolet/70  bg-blend-soft-light`}
      >
        <div className="text-white font-bold text-5xl lg:text-7xl">
          Bringing the world of fashion to your doorstep.
        </div>
      </div>
      {/* <div className="flex flex-col items-center gap-20 w-full h-screen">
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
      </div> */}
    </div>
  );
}
