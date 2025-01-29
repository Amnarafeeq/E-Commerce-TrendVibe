"use client"
import { AlignLeft } from 'lucide-react'
import React, { useState } from 'react'
import SideBar from './SideBar'


const MobileMenu = () => {
  const [isSideBarOpen,setIsSideBarOpen] = useState(false)
  return (
    <>
      <button onClick={()=>setIsSideBarOpen(!isSideBarOpen)}>
     <AlignLeft className='hover:text-darkBackground  hoverEffect md:hidden '/>
      </button>
      <div className='md:hidden'>
      <SideBar  isOpen={isSideBarOpen} onClose={()=>setIsSideBarOpen(false)}/>
     </div>
      


    </>
  )
}

export default MobileMenu