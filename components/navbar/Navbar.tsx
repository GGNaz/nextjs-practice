import React from 'react'
import Logo from '../logo/Logo'
import { BsPlusLg, BsFilter,BsHeartFill,BsCart2  } from "react-icons/bs";
import Link from 'next/link';
export default function Navbar() {
  return (
    <div className='fixed z-50 top-0 left-0 px-5 py-2 w-full backdrop:blur-sm bg-gradient-to-b from-customblack/30 to-transparent'>
      <div className='flex flex-row justify-between'>
        <div> <Link href="/admin/home"><Logo withBrandname={true} color="text-white" /></Link></div>
        <div className='px-5'><Link href="/admin/cart"><BsCart2 className='text-white text-2xl' /></Link></div>
      </div>

    </div>
  )
}
