import Image from 'next/image'
import React from 'react'
import shoplogo from "@/app/assets/shoplogo.png";

interface CustomLogoProps {
  withBrandname?:boolean,
  size?:number,
  color?: string
}

export default function Logo({withBrandname, size, color}:CustomLogoProps) {
  const defaultSize = size ? size :40
  return (
  
       <div className="flex gap-2 w-full items-center justify-center">
              <Image
                src={shoplogo}
                alt="shoplogo"
                width={defaultSize}
                height={defaultSize}
                className="rounded-lg"
              />
              {
                withBrandname &&(
                  <div className={`font-extrabold ${color ? color : "text-darkviolet"}  text-xl`}>
                  Lazpeefy
                </div>
                )
              }
             
            </div>

  )
}
