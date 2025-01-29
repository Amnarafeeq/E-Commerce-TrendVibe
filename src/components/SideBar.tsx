import { X } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { headerData } from '../../constants'
// import { usePathname } from 'next/navigation'
interface Props{
    isOpen:boolean
    onClose: ()=> void
}

const SideBar = ({isOpen,onClose}:Props) => {
const pathname = usePathname()
    
  return (
    <div className={`fixed inset-y-0 left-0 z-50 bg-black/50 shadow-xl hoverEffect w-full ${isOpen ? "translate-x-0":"-translate-x-full"}`}>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4, delay:0.3}} className='min-w-72 max-w-96 bg-white h-full p-10 border-r border-r-black flex flex-col gap-6'>
            <div className='flex items-center justify-between'>
                <h2 className='text-2xl font-bold text-darkBackground'>TrendVibe</h2>
                <button className='hover:text-red-500 hoverEffect' onClick={onClose}><X  /></button>
            </div>
              <div className='flex flex-col gap-4 text-base font-semibold tracking-wide'>
      {headerData.map((item,index)=> {
        return(
          <Link onClick={onClose} href={item.href} key={index} className={`text-textColor1 hover:text-textColor2 hoverEffect ${pathname === item.href && "text-darkBackground"}  `}>
            {item.title}
            <span className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-darkBackground hoverEffect group-hover:w-1/2 group-hover:left-0 `} />
            <span className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-darkBackground hoverEffect group-hover:w-1/2 group-hover:right-0 `} />
            </Link>
        )
      })}
    </div>
    {/* <CategoriesForMobile/> */}

        </motion.div>
    </div>
  )
}

export default SideBar