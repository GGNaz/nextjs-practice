"use client"
import Loading from '@/app/loading';
import Navbar from '@/components/navbar/Navbar'
import getUser from '@/utils/getUser';
import Image from 'next/image';
import React, {Dispatch, SetStateAction, useState} from 'react'
import { BsPlusLg, BsFilter,BsHeartFill,BsCart2  } from "react-icons/bs";
import useSWR from "swr";

interface FilterProps{
  sort_type?:string,
  sort_by?: string,
  isSubmit?:boolean
}

export default function Homepage() {
  const [ showFilter, setShowFilter ] = useState(false)

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


  return (
    <div className='h-full w-full flex flex-col bg-slate-100 overflow-y-scroll '>
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
        <div className='w-full my-10  flex flex-col gap-5 justify-center items-center h-full'>
         
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
                  ,title              } = data ?? {}
                  return (
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
              )
                          }) 
                        }
              </div>
            ):<div>Loading..</div>
          }
           <div className='flex flex-col  '>

      
            <div className='grid grid-cols-2 w-full'>
              <div className='bg-white'>
                asdasd
              </div>
              <div className='bg-white'>
                asdasd
              </div>
            </div>
            </div>

            </div>
    
       
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
