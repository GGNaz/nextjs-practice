"use client"
import Navbar from '@/components/navbar/Navbar'
import Image from 'next/image'
import React from 'react'
import bdo from "@/app/assets/bdo.jpg"
import gcash from "@/app/assets/gcash.png"
import { BsCashCoin, BsDash, BsDashLg, BsPlus, BsPlusLg } from 'react-icons/bs'
import ScrollAnimation from '@/components/ScrollAnimation'
export default function Cart() {
  return (
    <div className='h-full w-full flex flex-col bg-slate-100 overflow-y-scroll '>
         <Navbar/>
         <div className='absolute h-[70vh] w-full bg-gradient-to-t bg-darkviolet from-slate-100 top-0 left-0'/>
         <div className='w-full my-10  flex flex-col gap-5 justify-center items-center '>
         <div className='w-full flex flex-col lg:flex-row gap-5 pt-5  max-w-3xl md:max-w-4xl lg:max-w-7xl px-5 h-full'>
          <div className='3/6 lg:basis-3/5   h-full w-full flex flex-col gap-5'>
          <ScrollAnimation
                    animateTo={{ y: 0 }}
                    animateFrom={{ y: 70 }}
                    delay={0.3}
                   
                  >
            <div className='flex flex-col gap-5 bg-white shadow-lg rounded-lg p-10'>
              <div className='text-lg font-bold p-3 bg-darkviolet rounded-lg text-white'>Shipping address</div>
              <div className='grid grid-cols-2 gap-3'>
              <div className='flex flex-col col-span-2 gap-2'>
                      <div className='text-sm text-gray-400'>Address Type *</div>
                      <div className='flex flex-row gap-10'>

                      <div className='flex flex-row gap-2'>

                      <input type='radio' className=" accent-darkviolet h-5 w-5"  checked/>
                      <div className='text-sm'>Home</div>
                      </div>
                      <div className='flex flex-row gap-2'>

                      <input type='radio' className=" accent-darkviolet h-5 w-5"   />
                    <div className='text-sm'>Office</div>
                    </div>
                  </div>
                  </div>
                  <div className='flex flex-col col-span-1'>
                      <div className='text-sm text-gray-400'>First name *</div>
                      <input type="text" placeholder='John' className='border h-10 rounded-lg focus:outline-none border-brandviolet px-2 text-sm'  />
                  </div>
                  <div className='flex flex-col col-span-1'>
                      <div className='text-sm text-gray-400'>Last name *</div>
                      <input type="text" placeholder='Doe' className='border h-10 rounded-lg focus:outline-none border-brandviolet px-2 text-sm'  />
                  </div>
                  <div className='flex flex-col col-span-1'>
                      <div className='text-sm text-gray-400'>Email *</div>
                      <input type="email" placeholder='johndoe@mail.com' className='border h-10 rounded-lg focus:outline-none border-brandviolet px-2 text-sm'  />
                  </div>
                  <div className='flex flex-col col-span-1'>
                      <div className='text-sm text-gray-400'>Mobile number *</div>
                      <input type="text" placeholder='+63' className='border h-10 rounded-lg focus:outline-none border-brandviolet px-2 text-sm'  />
                  </div>
                  <div className='flex flex-col col-span-2'>
                      <div className='text-sm text-gray-400'>Address *</div>
                      <input type="text" placeholder='Villa Ortigas Il 44 Granada Street Near Greenhills San Juan 1100, Quezon City' className='border h-10 rounded-lg focus:outline-none border-brandviolet px-2 text-sm'  />
                  </div>
                  
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
                    animateTo={{ y: 0 }}
                    animateFrom={{ y: 70 }}
                    delay={0.5}
                   
                  >
            <div className='flex flex-col gap-5 bg-white shadow-lg rounded-lg p-10'>
              <div className='text-lg font-bold p-3 bg-darkviolet rounded-lg text-white'>Payment Method</div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
              <div className='text-sm text-gray-400 col-span-1 md:col-span-2'>Select payment option *</div>
                    <div className='flex flex-row gap-2 border rounded-xl p-3 shadow-md items-center'>
                      <input type="radio" className=" accent-darkviolet h-5 w-5" checked />
                      <Image src={bdo} alt="bdo" height={50} width={100} className='h-16 w-20 rounded-lg' />
                      <div className='flex flex-col'>
                        <div className='text-customblack font-semibold'>Banco De Oro</div>
                        <div className='text-xs text-gray-500'>Pay via bank transfer</div>
                      </div>
                    </div>
                    <div className='flex flex-row gap-2 border rounded-xl p-3 shadow-md items-center'>
                      <input type="radio" className=" accent-darkviolet h-5 w-5" />
                      <Image src={gcash} alt="gcash" height={100} width={100} className='h-16 w-20 rounded-lg' />
                      <div className='flex flex-col'>
                        <div className='text-customblack font-semibold'>Gcash</div>
                        <div className='text-xs text-gray-500'>Pay via gcash</div>
                      </div>
                    </div>
                    <div className='flex flex-row gap-2 border rounded-xl p-3 shadow-md items-center'>
                      <input type="radio" className=" accent-darkviolet h-5 w-5" />
                      <div className='h-16 w-20 rounded-lg'>
                        <BsCashCoin className='h-16 w-20 rounded-lg text-gray-400' />
                        </div>
                      <div className='flex flex-col'>
                        <div className='text-customblack font-semibold'>COD</div>
                        <div className='text-xs text-gray-500'>Cash on delivery</div>
                      </div>
                    </div>
                  
              </div>
            </div>
            </ScrollAnimation>
          </div>
         
          <div className='3/6 lg:basis-2/5  h-fit w-full'>
          <ScrollAnimation
                    animateTo={{ y: 0 }}
                    animateFrom={{ y: 70 }}
                    delay={0.7}
                   
                  >
                   <div className=' bg-white shadow-lg rounded-lg p-10 '>
            <div className='flex flex-col  '>
              <div className='text-lg font-bold p-3 bg-darkviolet rounded-lg text-white'>Your order</div>
              <div className='flex flex-row justify-between pt-5 mb-2'>
                <div className='flex flex-row gap-2 items-center'>
                <input type="checkbox" className=" accent-darkviolet h-4 w-4" />
                <div className='font-medium text-sm'>List of orders</div>
                </div>
                <button className='font-medium text-sm'>Clear all</button>
             
              </div>
              <div className='flex flex-col gap-5 divide-y-2'>
              <div className='flex flex-row gap-2 justify-between  items-center w-full'>
              <div className='flex flex-row gap-2 items-center w-full'>
              <input type="checkbox" className=" accent-darkviolet h-3 w-3" />
              <div className='h-20 w-20  rounded-lg'>
                <Image src={
            "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            } alt="bdo" height={100} width={100} className='h-full w-full'/>
              </div>
              <div className='flex flex-col '>
                <div className='text-sm font-semibold'>
                T-shirt nigga
                </div>
               <div className='text-xs'>Mens clothing</div>
               <div className='pt-1 text-sm'>123</div>
              </div>
              </div>
              <div className='flex justify-evenly gap-5 items-center'>
              <button className='bg-darkviolet p-2 text-white rounded-full'><BsDashLg/></button>
                  <span className='text-xl font-medium'>5</span>
                
                  <button className='bg-darkviolet p-2 text-white rounded-full'><BsPlusLg/></button>
              </div>
              </div>
              <div className='flex flex-row gap-2 justify-between pt-5 items-center w-full'>
              <div className='flex flex-row gap-2 items-center w-full'>
                <input type="checkbox" className=" accent-darkviolet h-3 w-3" />
              <div className='h-20 w-20  rounded-lg'>
                <Image src={
              "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
              } alt="bdo" height={100} width={100} className='h-full w-full'/>
              </div>
              <div className='flex flex-col '>
                <div className='text-sm font-semibold'>
                T-shirt nigga
                </div>
               <div className='text-xs'>Mens clothing</div>
               <div className='pt-1 text-sm'>123</div>
              </div>
              </div>
              <div className='flex justify-evenly gap-5 items-center'>
              <button className='bg-darkviolet p-2 text-white rounded-full'><BsDashLg/></button>
                  <span className='text-xl font-medium'>3</span>
                
                  <button className='bg-darkviolet p-2 text-white rounded-full'><BsPlusLg/></button>
              </div>
              </div>
            
            </div>
            <div className='flex flex-col gap-5 mt-10 border-t-2 border-dashed'>
            <div className='flex flex-col  pt-2'>
            <div className='flex flex-row justify-between w-full text-sm'>
              <div>Subtotal</div>
              <div>100.00</div>
            </div>
            <div className='flex flex-row justify-between w-full text-sm'>
              <div>Delivery fee</div>
              <div>52.00</div>
            </div>
            <div className='flex flex-row justify-between w-full'>
              <div className='text-xl font-semibold'>Total</div>
              <div className='text-xl font-semibold'>152.00</div>
            </div>
            </div>
           
            <button className='border border-darkviolet hover:bg-darkviolet/10 font-medium text-darkviolet w-full p-2  rounded-lg'>Checkout</button>
            </div>
        </div>
        </div>
            </ScrollAnimation>
          </div>
      
          </div>
          </div>
    </div>
  )
}
