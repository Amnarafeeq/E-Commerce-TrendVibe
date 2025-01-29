import React from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import { Loader2 } from 'lucide-react'

const NoProductAvailable = ({selectedTab,className}:{selectedTab:string,className?:string}) => {
  return (
    <div className={cn("flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-full mt-10 ",className)}>
        <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
    <h2 className='text-2xl font-bold text-gray-800'>No Products Available</h2>
        </motion.div>
        <motion.p className='text-gray-600' initial={{ opacity: 0 }} animate={{ opacity:1}} transition={{delay:0.2 ,duration: 0.5 }}>
          We are sorry, but there are no products matching on the <span className="font-bold">{selectedTab}</span> category.
        </motion.p>
        <motion.div className='flex items-center text-blue-600  space-x-2 '  animate={{scale: [1, 1.1, 1]}} transition={{duration: 1.5, repeat: Infinity}}>
          <Loader2 className='w-4 h-4 animate-spin'/> <span>We are restocking shortly. </span>
        </motion.div>
        <motion.p className='text-sm text-gray-600'
          initial={{ opacity: 0 }}
          animate={{ opacity:1}}
          transition={{delay:0.4}}>
          Please check back later or explore our other categories.
        </motion.p>
    </div>
  )
}

export default NoProductAvailable