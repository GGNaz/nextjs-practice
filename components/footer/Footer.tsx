import React from 'react'
import Logo from '../logo/Logo'

export default function Footer() {
  return (
    <div className=' w-full bg-darkviolet/50 flex flex-col  justify-center items-center h-72'>
      <div className='max-w-3xl md:max-w-4xl lg:max-w-7xl w-full flex   px-5 '>
        <div className='flex flex-col gap-5 w-full'>
            <div className='flex flex-row justify-between'>

       
            <Logo withBrandname={true} color='text-white' />
            <div className='flex flex-row gap-1'>
              <input type="text" placeholder='Your email' className='rounded-lg text-sm px-2 h-10 focus:outline-none' />
              <button className='bg-brandviolet border text-white border-white text-sm px-2 rounded-lg '>Subscribe</button>
            </div>
            </div>
            <div className='flex flex-row justify-between  text-white w-full text-sm'>
            <div>
            © <span>2023 Lazpeefy. All rights reserved.</span>
            </div>
            <div className='flex flex-row gap-5'>
              <div>
                Terms
              </div>
              <div>
                Privacy
              </div>
              <div>
                Cookies
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  )
}
