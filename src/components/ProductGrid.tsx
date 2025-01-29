"use client"
import React, { useEffect, useState } from 'react'
import HomeTabBar from './HomeTabBar'
import { productType } from '../../constants'
import { client } from '@/sanity/lib/client'
import { Product } from '../../sanity.types'
import ProductCard from './ProductCard'
import NoProductAvailable from './NoProductAvailable'
import {motion, AnimatePresence } from "motion/react"
import { Loader2 } from 'lucide-react'
const ProductGrid = () => {
  const [selectedTab,setSelectedTab] = useState(productType[0].title || "")
  const [products,setProducts] =useState([])
  const [loading,setLoading] =useState(false)
  const query =`*[_type=="product" && variant == $variant ] | order(name asc) `
  const params = {variant:selectedTab.toLocaleLowerCase()}
  useEffect(()=>{
   const fetchData=async()=>{
    setLoading(true)
    try{
   const res = await client.fetch(query,params)
    setProducts(await res)   
    }
    catch(error){
        console.log("Product Fetching Error", error);
    }finally{
        setLoading(false)
    }
   }
   fetchData()
  },[selectedTab]) 
    return (
    <div className='product-grid mt-10 flex flex-col items-center '>
        <HomeTabBar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
        {loading ? (
           <div className='flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-full mt-10 '>
            <div className='flex items-center space-x-2 text-blue-400'>
            <Loader2 className='w-5 h-5 animate-spin'/> <span className='text-xl font-semibold'>Product is loading...</span>
            </div>
           </div>
        ):(
         <>
         {products.length ? (
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 mt-10 w-full  '>
                {products.map((product:Product)=>(
                    <AnimatePresence key={product._id}>
                      <motion.div layout initial ={{opacity:0.2}} animate={{opacity:1}} exit={{opacity:0}}>
                        <ProductCard product={product} />
                    </motion.div>
                    </AnimatePresence>
                ))}
            </div>
         ) : (
           <NoProductAvailable selectedTab={selectedTab}/>
         ) }
         </>
        )}
    </div>
  )
}

export default ProductGrid