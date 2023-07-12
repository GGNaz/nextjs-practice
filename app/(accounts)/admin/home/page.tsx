"use client"
import Loading from '@/app/loading';
import Navbar from '@/components/navbar/Navbar'
import getUser from '@/utils/getUser';
import Image from 'next/image';
import React, {Dispatch, SetStateAction, useState} from 'react'
import { BsPlusLg, BsFilter,BsHeartFill,BsChatText ,BsRobot,BsXLg,BsSend } from "react-icons/bs";
import wide_selection from "@/app/assets/wide_selection.png"
import competitive_prices from "@/app/assets/competitive_prices.png"
import easy_navigation from "@/app/assets/easy_navigation.png"
import secure_transaction from "@/app/assets/secure_transaction.png"
import fast_shipping from "@/app/assets/fast_shipping.png"
import customer_support from "@/app/assets/customer_support.png"
import useSWR from "swr";
import Footer from '@/components/footer/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "@/components/use-follow-pointer";

interface FilterProps{
  sort_type?:string,
  sort_by?: string,
  isSubmit?:boolean
}

export default function Homepage() {
  const [ showFilter, setShowFilter ] = useState<boolean>(false)
  const [ showBot, setShowBot ] = useState<boolean>(false)
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  const [ filteredItems, setFilteredItems ] = useState<FilterProps>({
    sort_type:"select",
    sort_by: "select",
    isSubmit: false
  })



  const performFilter = () => {
    const { isSubmit, sort_by,sort_type } = filteredItems ?? {}
    const apiReq = isSubmit ? `https://fakestoreapi.com/products${sort_type}${sort_by}` :  "https://fakestoreapi.com/products?limit=6"
    console.log("🚀 ~ file: page.tsx:31 ~ performFilter ~ apiReq:", apiReq)
    return apiReq
   
  }

  const { data, error, isLoading } = useSWR(
    performFilter,
    getUser
  );

  const products = data?.data ?? []

  console.log("🚀 ~ file: page.tsx:25 ~ Homepage ~ data:", data)


  const choose_us = [
    {
      id:1,
      image: wide_selection,
      title: "Wide Selection",
      desc: "From electronics and fashion to home decor and beauty products, we offer an extensive selection to cater to your every need. Browse through our vast range of high-quality items and find exactly what you're looking for."
    },
    {
      id:2,
      image: competitive_prices,
      title: "Competitive Prices",
      desc: "We understand the importance of value for money. That's why we strive to offer competitive prices without compromising on product quality. Enjoy great deals and discounts, making your shopping experience even more rewarding."
    },
    {
      id:3,
      image: easy_navigation,
      title: "Easy Navigation",
      desc: "Our website is designed with your convenience in mind. Effortlessly navigate through categories, filter products based on your preferences, and find the perfect items with just a few clicks. We prioritize a seamless and intuitive user experience."
    },
    {
      id:4,
      image: secure_transaction,
      title: "Secure Transactions",
      desc: "Your privacy and security are our top priorities. Rest assured that your personal information and payment details are handled with the utmost care. Our secure checkout process ensures a safe and reliable transaction every time."
    },
    {
      id:5,
      image: fast_shipping,
      title: "Fast Shipping",
      desc: "We understand that prompt delivery is essential. We partner with trusted shipping services to ensure your purchases reach you as quickly as possible. Track your orders and stay updated on their progress, allowing you to plan ahead."
    },
    {
      id:6,
      image: customer_support,
      title: "Customer Support",
      desc: "Our dedicated customer support team is always ready to assist you. Whether you have questions about products, need help with an order, or require any assistance, we are here to provide timely and friendly support."
    }
  ]

  return (
    <div className='h-full w-full flex flex-col bg-slate-100 overflow-y-scroll '>
      {
        showBot&&(
<div className=' fixed bottom-24 right-24 bg-white h-96 rounded-t-xl  shadow-lg w-80 z-50 animate__animated animate__bounceIn'>
          <div className='flex flex-row justify-between bg-darkviolet p-3 rounded-t-xl text-white'>
          <div className=' text-sm  flex gap-2 items-center'><BsRobot className='text-xl' /><span className='font-semibold'>LazBot</span></div>
          <button onClick={() => setShowBot(false)}><BsXLg/></button>
          </div>
          <div className='flex flex-col gap-3 justify-center text-gray-400 h-[80%] items-center'>
            <div><BsRobot className='text-5xl' /></div>
            <span>Chat with me</span>
          </div>
          <div className='absolute bottom-0 w-full flex flex-row  border p-2'><input type='text' placeholder='Say something...' className='px-2 text-sm focus:outline-none h-9 w-full'/><button className='text-white bg-darkviolet rounded-lg p-2'><BsSend className='text-xl' /></button> </div>
        </div>
        )
      }
        
        <button className='p-5 fixed bottom-5 right-10 rounded-full bg-darkviolet shadow-lg text-white text-2xl hover:bg-darkviolet/80' onClick={() => setShowBot(!showBot)}>
          <BsChatText/>
        </button>
      {showFilter&&<FilterModal setShowFilter={setShowFilter} setFilteredItems={setFilteredItems} filteredItems={filteredItems}/>}
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
        <div className='w-full my-10  flex flex-col gap-5 justify-center items-center '>
         
              <div className='w-full flex flex-col gap-2  max-w-3xl md:max-w-4xl lg:max-w-7xl px-5 h-full'>
                <div className='flex flex-row justify-between items-center'>
                  <div className='font-semibold capitalize text-customblack'> Top {filteredItems.sort_type !=="select" ? filteredItems?.sort_by : " Sale's"}</div> 
                  <button
                  onClick={() => setShowFilter(!showFilter)}
                  className='p-2 bg-darkviolet text-white rounded-lg focus:outline-none  w-20 flex gap-1 text-xs justify-center items-center hover:bg-darkviolet/80' ><BsFilter className='text-lg'/> <span>Filter</span></button>
                </div>
                {
            !isLoading ? (
              <div className='  grid grid-cols-2 md:grid-cols-3 gap-5'>
              {
                products.map((data:any) => {
                  const { category, id,image ,price,rating
                  ,title } = data ?? {}
                  return (
                    <ScrollAnimation
                    animateTo={{ y: 0 }}
                    animateFrom={{ y: 70 }}
                    delay={0.2}
                    key={id}
                  >
                    <div className='bg-white p-5 flex flex-col  items-center shadow-lg rounded-xl relative gap-5' key={id}>
                      <button className='absolute right-5 top-5 flex flex-row items-center justify-center gap-1 text-brandviolet'>
                          <BsHeartFill className='h-5 w-5  hover:text-darkviolet'/><span>{rating?.rate}</span>
                      </button>  
                      <div className='h-36 w-36 md:h-52 md:w-52 flex justify-center items-center'>
                      <Image src={image} alt="title" height={150} width={150} className='w-full h-full'  />
                      </div>
                      <div className='flex flex-col gap-3 w-full'>
                      <div className='text-customblack font-semibold text-sm truncate max-w-sm'>{title}</div>
                      <div className='flex justify-between'>
                        <div className='flex flex-col'>
                          <div className='capitalize text-xs bg-brandgray p-1 text-white'>{category}</div>
                        <div className='text-gray-500'>${price}</div>
                        </div>
                        <button className=' bg-darkviolet text-white p-2 rounded-full w-10 h-10  text-sm flex items-center justify-center'><BsPlusLg className='text-lg' /> </button>
                      </div>
    
     
                  </div>
    
                </div>
                </ScrollAnimation>
              )
                          }) 
                        }
              </div>
            ):<div>Loading..</div>
          }
           <div className='flex flex-col gap-5  pt-10'>
              <div className='w-full text-center font-semibold text-4xl  text-customblack p-5 '>Why Choose Us?</div>
              {
                choose_us?.map(({id,title, image, desc}) => (
                  <ScrollAnimation
                  animateTo={{ y: 0 }}
                  animateFrom={{ y: 70 }}
                  delay={0.5}
                  key={id}
                >
                  <div className={`flex ${id%2 === 0 ? "flex-row-reverse divide-x-2 divide-x-reverse" :"flex-row divide-x-2"} justify-evenly w-full  bg-white rounded-lg shadow-lg p-5`} key={id}>
                  <div className='flex justify-center items-center w-full'>
                    <Image src={image} height={300} width={300} className='' alt={title}/>
                  </div>
                  <div className='w-full flex flex-col justify-center'>
                  <div className='flex flex-col justify-center gap-5 p-5 w-full '>
                    <div className='text-xl font-semibold'>{title}</div>
                    <p className='text-gray-400'>
                      {desc}
                    </p>
                  </div>
                  </div>
                </div>
                </ScrollAnimation>
                ))
              }
            </div>

            </div>
    
           
        </div>
        <div className='h-56'>
        <Footer/>
        </div>
  
      
       
    </div>
  )
}

interface ModalProps {
  setShowFilter: Dispatch<SetStateAction<boolean>>
  setFilteredItems:Dispatch<SetStateAction<FilterProps>>
  filteredItems:FilterProps
}

const FilterModal = ({setShowFilter,setFilteredItems,filteredItems}:ModalProps) => {
  console.log("🚀 ~ file: page.tsx:98 ~ FilterModal ~ filteredItems:", filteredItems)

  const priceArray = [
    {
      value: "asc",
      label: "Min - max price"
    },
    {
      value: "desc",
      label: "Max - min price"
    }
  ]

  const filterChange = ({target}:any) => {
    const { name, value}:any = target
    if(name==="sort_type"){
      setFilteredItems({[name]: value ,sort_by: "select"})
    }else{
      setFilteredItems({...filteredItems, [name]: value})
    }
  
  }

  const categoryArray = [
    {
      value: "men's clothing",
      label: "Men's Clothing"
    },
    {
      value: "women's clothing",
      label: "Women's Clothing"
    },
    {
      value: "jewelery",
      label: "Jewelery"
    },
    {
      value: "electronics",
      label: "Electronics"
    }
  ]
  const sortValue =  filteredItems.sort_type === "?sort=" ? priceArray : categoryArray
  return (
    <div className='absolute top-0 left-0 flex justify-center items-center z-10 h-screen w-full bg-black/50'>
      <div className='bg-white animate__animated animate__zoomIn w-full max-w-md p-5 rounded-lg'>
        <div className='flex flex-col gap-5'>
          <div>Filter</div>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-col text-sm'>
                <div className='text-gray-500'>Sort by</div>
                <select name="sort_type" value={filteredItems?.sort_type} onChange={(e) => {
                filterChange(e)
                }} className=' text-sm w-full border focus:outline-none h-9 border-brandviolet rounded-lg px-2 '>
                <option value="select" >Select</option>
                  <option value="?sort=" >Price</option>
                  <option value="/category/">Category</option>
                </select>
            </div>
            {
              filteredItems?.sort_type !=="select" &&(
                <select 
                name="sort_by"
                value={filteredItems?.sort_by}
                onChange={(e) => {
                  filterChange(e)
                }}
                className=' text-sm w-full border focus:outline-none h-9 border-brandviolet rounded-lg px-2'> 
                 <option value="select" >Select</option>
                  {
                    sortValue.map(({value, label}, index) => 
                        <option value={value} key={index}>{label}</option>
                    )
                  }
                </select>
              ) 
            }
           
          </div>
          <div className='flex flex-row justify-evenly gap-3'>
            <button className='w-full bg-darkviolet text-white  p-2 text-sm hover:bg-darkviolet/80' 
            onClick={() => setFilteredItems({...filteredItems, isSubmit:true})}>Filter</button>
            <button className='w-full border border-red-400 text-red-400 hover:bg-red-400/20  p-2 text-sm' onClick={() => setShowFilter(false)}>Back</button>
          </div>
        </div>
      </div>
    </div>
  )
}
