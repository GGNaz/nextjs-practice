"use client"
import Navbar from '@/components/navbar/Navbar'
import getUser from '@/utils/getUser';
import Image from 'next/image';
import React from 'react'
import { BsPlusLg, BsDashLg,BsSuitHeart,BsCart2  } from "react-icons/bs";
import useSWR from "swr";


export default function Homepage() {
  const filterSection = [
    {
      _id:1,
      isShow: false,
      label: "Category"
   
    },
    {
      _id:2,
      isShow: false,
      label: "Price"
    
    }
  ]

  const { data, error, isLoading } = useSWR(
    "https://fakestoreapi.com/products?limit=6",
    getUser
  );
  const products = data?.data ?? []

  console.log("🚀 ~ file: page.tsx:25 ~ Homepage ~ data:", data)
  return (
    <div className='h-full w-full flex flex-col bg-slate-100 overflow-y-scroll '>
        <Navbar/>
        <div className='h-[70vh] min-h-[70vh] flex flex-col justify-center bg-[url(https://images.pexels.com/photos/4904563/pexels-photo-4904563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-center bg-cover bg-brandviolet/20  bg-blend-soft-light'>
          <div className='p-10 flex flex-col gap-2'>
            <div className='flex flex-col text-white font-semibold text-4xl md:text-5xl'>
            <div >
              Discover the joy of 
            </div>
            <div>online shopping</div>
            </div>
            
            <div>
              <button className='px-2 w-36 p-2 border text-white border-white text-xs hover:bg-white/20 '>Shop now</button>
            </div>
          </div>
        </div>
        <div className='w-full my-10  flex justify-center items-center h-full'>
        <div className='w-full flex flex-col gap-2  max-w-3xl md:max-w-4xl lg:max-w-7xl px-5 h-full'>
        <div className='font-semibold'>List of products</div>
          <div className='  grid grid-cols-2 md:grid-cols-3 gap-5'>
          {
            products.map((data:any) => {
              const { category, id,image ,price,rating
,title              } = data ?? {}
return (
  <div className='bg-white p-5 flex flex-col  items-center shadow-lg rounded-xl relative gap-5' key={id}>
    <button className='absolute right-5 top-5'>
        <BsSuitHeart className='h-5 w-5 hover:text-darkviolet'/>
    </button>  
    <div className='h-36 w-36 md:h-52 md:w-52 flex justify-center items-center'>
    <Image src={image} alt="title" height={150} width={150} className='w-full h-full'  />
    </div>
    <div className='flex flex-col gap-1 w-full'>
    <div className='text-customblack font-semibold text-sm '>{title}</div>
    <div className='flex flex-row justify-between items-center pt-3'>
    <div className='text-gray-500'>${price}</div>
 <button className=' bg-darkviolet text-white p-2 rounded-full w-10 h-10  text-sm flex items-center justify-center'><BsPlusLg className='text-lg' /></button>
    </div>
   
 
    </div>

  </div>
)
            }) 
          }
</div>
        </div>
        </div>
       
    </div>
  )
}
