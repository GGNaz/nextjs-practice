"use client"
import Image from 'next/image'
import React from 'react'

export default function page({ params:{id} }:any) {
  console.log("asdasd",id)
  return (
    <div className='flex flex-row w-full h-screen justify-center items-center'>
     <div className='w-full flex justify-center relative'><div className='absolute top-40 text-9xl font-black text-customblack'>MENS CLOTHING</div> <Image src={"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"} alt="title" height={150} width={150} className='z-10 opacity-80 w-full max-w-xl h-[80%]'  /></div>
    </div>
  )
}
