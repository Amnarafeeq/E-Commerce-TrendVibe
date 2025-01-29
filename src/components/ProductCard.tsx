import React from 'react'
import { Product } from '../../sanity.types'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import PriceView from './PriceView'
import AddToCartButton from './AddToCartButton'

const ProductCard = ({product}:{product:Product}) => {
  return (
    <div className='group text-sm rounded-lg overflow-hidden h-[80vh] flex flex-col  bg-white '>
      <div className='bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-200 overflow-hidden relative'>
        {
          product.images && <Link href={`/product/${product.slug?.current}`}>
          <Image 
          src={urlFor(product.images[0]).url()}
           alt='' 
           width={500} 
           height={500}
           className={`w-full h-72 object-contain overflow-hidden group-hover:scale-105 hoverEffect ${product.stock !==0 && "group-hover:scale-105"} `}
           />
          </Link>
        }
        {product.stock===0 &&(
        <div className='absolute top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center'>
          <p className='text-white font-semibold text-center'>Out Of Stock</p>
        </div>

        )}
      </div>
      <div className='py-3 px-2 flex flex-col gap-2 sm:gap-4  border border-t-0 rounded-lg rounded-tl-none rounded-tr-none '>
        <h2 className='font-bold line-clamp-1'>{product.name} </h2>
        <p className='line-clamp-1'>{product.intro}</p>
        <PriceView className='sm:text-lg' price={product.price} discount={product.discount} />
        <AddToCartButton product={product} />
      </div>
    </div>
  )
}

export default ProductCard