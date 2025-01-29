"use client"
import React, { useEffect, useState } from 'react'
import { CATEGORIES_QUERYResult, Product } from '../../sanity.types'
import { Button } from './ui/button'
import { client } from '@/sanity/lib/client'
import { Loader2 } from 'lucide-react'
import { AnimatePresence } from 'motion/react'
import ProductCard from './ProductCard'
import NoProductAvailable from './NoProductAvailable'
import { motion } from 'motion/react'

interface Props{
    categories:CATEGORIES_QUERYResult
    slug:string
}
const CategoryProducts = ({categories,slug}:Props) => {
  const [currentSlug,setCurrentSlug] = useState(slug)
  const [products,setProducts] = useState([])
  const [loading,setLoading] = useState(false)
  const fetchProducts = async(categorySlug:string)=>{
    try{
         setLoading(true)
         const query= `*[_type == "product" && references(*[_type == "category" && slug.current == $categorySlug]._id)] | order(name asc)`
         const data = await client.fetch(query,{categorySlug})
           setProducts(data)
    }catch(error){
      console.error("Error fetching products",error)
    }finally{
      setLoading(false)
    }
  }
  useEffect(()=>{
    fetchProducts(currentSlug)
  },[currentSlug])
  return (
    <div className='py-5 flex flex-col md:flex-row items-start gap-5'>
       <div className='flex flex-col w-72  mx-auto md:min-w-40 border'>
      {categories.map((item)=>(
        <Button onClick={()=>setCurrentSlug(item.slug?.current as string)} key={item._id} className={`bg-transparent border-0 rounded-none text-darkBackground shadow-none hover:bg-darkBackground/80 hover:text-textColor2 font-semibold hoverEffect last:border-b-0 ${item.slug?.current === currentSlug && "bg-darkBackground text-textColor2 border-darkBackground"} `}>{item.title}</Button>
      ))}
       </div>
       <div className='w-full'>
       {loading ? (
           <div className='flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-full mt-10 '>
            <div className='flex items-center space-x-2 text-blue-400'>
            <Loader2 className='w-5 h-5 animate-spin'/> <span className='text-xl font-semibold'>Product is loading...</span>
            </div>
           </div>
        ):(
         <>
         {products.length ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8  w-full'>
                {products.map((product:Product)=>(
                    <AnimatePresence key={product._id}>
                      <motion.div layout initial ={{opacity:0.2}} animate={{opacity:1}} exit={{opacity:0}}>
                        <ProductCard product={product} />
                    </motion.div>
                    </AnimatePresence>
                ))}
            </div>
         ) : (
           <NoProductAvailable selectedTab={currentSlug} className='mt-0 w-full'/>
         ) }
         </>
        )}
       </div>
    </div>
  )
}

export default CategoryProducts