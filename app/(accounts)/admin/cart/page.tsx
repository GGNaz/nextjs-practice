"use client";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import React from "react";
import bdo from "@/app/assets/bdo.jpg";
import gcash from "@/app/assets/gcash.png";
import { BsCashCoin, BsDash, BsDashLg, BsPlus, BsPlusLg } from "react-icons/bs";
import ScrollAnimation from "@/components/ScrollAnimation";
import { useAppSelector } from "@/redux/hooks";
export default function Cart() {
  const myCart = useAppSelector((state) => state.cartReducer.cart);
  console.log("🚀 ~ file: page.tsx:36 ~ ViewProducts ~ MyCart:", myCart);

  return (
    <div className="flex h-full w-full flex-col overflow-y-scroll bg-slate-100 ">
      <Navbar />
      <div className="absolute left-0 top-0 h-[70vh] w-full bg-darkviolet bg-gradient-to-t from-slate-100" />
      <div className="my-10 flex  w-full flex-col items-center justify-center gap-5 ">
        <div className="flex h-full w-full max-w-3xl flex-col gap-5  px-5 pt-5 md:max-w-4xl lg:max-w-7xl lg:flex-row">
          <div className="3/6 flex   h-full w-full flex-col gap-5 lg:basis-3/5">
            <ScrollAnimation
              animateTo={{ y: 0 }}
              animateFrom={{ y: 70 }}
              delay={0.3}
            >
              <div className="flex flex-col gap-5 rounded-lg bg-white p-10 shadow-lg">
                <div className="rounded-lg bg-darkviolet p-3 text-lg font-bold text-white">
                  Shipping address
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="col-span-2 flex flex-col gap-2">
                    <div className="text-sm text-gray-400">Address Type *</div>
                    <div className="flex flex-row gap-10">
                      <div className="flex flex-row gap-2">
                        <input
                          type="radio"
                          className=" h-5 w-5 accent-darkviolet"
                          // checked
                        />
                        <div className="text-sm">Home</div>
                      </div>
                      <div className="flex flex-row gap-2">
                        <input
                          type="radio"
                          className=" h-5 w-5 accent-darkviolet"
                        />
                        <div className="text-sm">Office</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 flex flex-col">
                    <div className="text-sm text-gray-400">First name *</div>
                    <input
                      type="text"
                      placeholder="John"
                      className="h-10 rounded-lg border border-brandviolet px-2 text-sm focus:outline-none"
                    />
                  </div>
                  <div className="col-span-1 flex flex-col">
                    <div className="text-sm text-gray-400">Last name *</div>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="h-10 rounded-lg border border-brandviolet px-2 text-sm focus:outline-none"
                    />
                  </div>
                  <div className="col-span-1 flex flex-col">
                    <div className="text-sm text-gray-400">Email *</div>
                    <input
                      type="email"
                      placeholder="johndoe@mail.com"
                      className="h-10 rounded-lg border border-brandviolet px-2 text-sm focus:outline-none"
                    />
                  </div>
                  <div className="col-span-1 flex flex-col">
                    <div className="text-sm text-gray-400">Mobile number *</div>
                    <input
                      type="text"
                      placeholder="+63"
                      className="h-10 rounded-lg border border-brandviolet px-2 text-sm focus:outline-none"
                    />
                  </div>
                  <div className="col-span-2 flex flex-col">
                    <div className="text-sm text-gray-400">Address *</div>
                    <input
                      type="text"
                      placeholder="Villa Ortigas Il 44 Granada Street Near Greenhills San Juan 1100, Quezon City"
                      className="h-10 rounded-lg border border-brandviolet px-2 text-sm focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateTo={{ y: 0 }}
              animateFrom={{ y: 70 }}
              delay={0.5}
            >
              <div className="flex flex-col gap-5 rounded-lg bg-white p-10 shadow-lg">
                <div className="rounded-lg bg-darkviolet p-3 text-lg font-bold text-white">
                  Payment Method
                </div>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <div className="col-span-1 text-sm text-gray-400 md:col-span-2">
                    Select payment option *
                  </div>
                  <div className="flex flex-row items-center gap-2 rounded-xl border p-3 shadow-md">
                    <input
                      type="radio"
                      className=" h-5 w-5 accent-darkviolet"
                      // checked
                    />
                    <Image
                      src={bdo}
                      alt="bdo"
                      height={50}
                      width={100}
                      className="h-16 w-20 rounded-lg"
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold text-customblack">
                        Banco De Oro
                      </div>
                      <div className="text-xs text-gray-500">
                        Pay via bank transfer
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2 rounded-xl border p-3 shadow-md">
                    <input
                      type="radio"
                      className=" h-5 w-5 accent-darkviolet"
                    />
                    <Image
                      src={gcash}
                      alt="gcash"
                      height={100}
                      width={100}
                      className="h-16 w-20 rounded-lg"
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold text-customblack">
                        Gcash
                      </div>
                      <div className="text-xs text-gray-500">Pay via gcash</div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2 rounded-xl border p-3 shadow-md">
                    <input
                      type="radio"
                      className=" h-5 w-5 accent-darkviolet"
                    />
                    <div className="h-16 w-20 rounded-lg">
                      <BsCashCoin className="h-16 w-20 rounded-lg text-gray-400" />
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold text-customblack">COD</div>
                      <div className="text-xs text-gray-500">
                        Cash on delivery
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <div className="3/6 h-fit  w-full lg:basis-2/5">
            <ScrollAnimation
              animateTo={{ y: 0 }}
              animateFrom={{ y: 70 }}
              delay={0.7}
            >
              <div className=" rounded-lg bg-white p-10 shadow-lg ">
                <div className="flex flex-col  ">
                  <div className="rounded-lg bg-darkviolet p-3 text-lg font-bold text-white">
                    Your order
                  </div>
                  <div className="mb-2 flex flex-row justify-between pt-5">
                    <div className="flex flex-row items-center gap-2">
                      <input
                        type="checkbox"
                        className=" h-4 w-4 accent-darkviolet"
                      />
                      <div className="text-sm font-medium">List of orders</div>
                    </div>
                    <button className="text-sm font-medium">Clear all</button>
                  </div>
                  <div className="flex flex-col gap-5 divide-y-2">
                    {myCart.length > 0
                      ? myCart.map((data) => {
                          const {
                            title,
                            category,
                            quantity,
                            price,
                            id,
                            image,
                          } = data ?? {};
                          return (
                            <div
                              className="flex w-full flex-row items-center  justify-between gap-2"
                              key={id}
                            >
                              <div className="flex w-full flex-row items-center gap-2">
                                <input
                                  type="checkbox"
                                  className=" h-3 w-3 accent-darkviolet"
                                />
                                <div className="h-20 w-20  rounded-lg">
                                  <Image
                                    src={image}
                                    alt={image}
                                    height={100}
                                    width={100}
                                    className="h-full w-full"
                                  />
                                </div>
                                <div className="flex flex-col ">
                                  <div className="max-w-xs truncate text-sm font-semibold">
                                    {title}
                                  </div>
                                  <div className="text-xs">{category}</div>
                                  <div className="pt-1 text-sm">{price}</div>
                                </div>
                              </div>
                              <div className="flex items-center justify-evenly gap-5">
                                <button className="rounded-full bg-darkviolet p-2 text-white">
                                  <BsDashLg />
                                </button>
                                <span className="text-xl font-medium">
                                  {quantity}
                                </span>

                                <button className="rounded-full bg-darkviolet p-2 text-white">
                                  <BsPlusLg />
                                </button>
                              </div>
                            </div>
                          );
                        })
                      : "Empty cart."}
                  </div>
                  <div className="mt-10 flex flex-col gap-5 border-t-2 border-dashed">
                    <div className="flex flex-col  pt-2">
                      <div className="flex w-full flex-row justify-between text-sm">
                        <div>Subtotal</div>
                        <div>100.00</div>
                      </div>
                      <div className="flex w-full flex-row justify-between text-sm">
                        <div>Delivery fee</div>
                        <div>52.00</div>
                      </div>
                      <div className="flex w-full flex-row justify-between">
                        <div className="text-xl font-semibold">Total</div>
                        <div className="text-xl font-semibold">152.00</div>
                      </div>
                    </div>

                    <button className="w-full rounded-lg border border-darkviolet p-2 font-medium text-darkviolet  hover:bg-darkviolet/10">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}
