import React from 'react'
import Logo from '../logo/Logo'

export default function Navbar() {
  return (
    <div className='fixed z-50 top-0 left-0 px-5 py-2 w-full backdrop:blur-sm bg-gradient-to-b from-darkviolet/30 to-transparent'>
      <div className='flex flex-row justify-between'>
        <div> <Logo withBrandname={true} color="text-white" /></div>
        <div>Login</div>
      </div>

    </div>
  )
}
