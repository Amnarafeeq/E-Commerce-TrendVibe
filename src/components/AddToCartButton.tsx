"use client"
import React from 'react'
import { Product } from '../../sanity.types'
import { cn } from '@/lib/utils'
import QuantityButtons from './QuantityButtons'
import PriceFormatter from './PriceFormatter'
import useCartStore from '../../store'
import toast from 'react-hot-toast'

interface Props {
  product: Product
  className?: string
}

const AddToCartButton = ({ product, className }: Props) => {
  const {addItem,getItemCount} = useCartStore()
  const itemCount = getItemCount(product._id)
  const isOutOfStock = product.stock === 0
  // const itemCount = 0

 

  return (
    <div className="w-full h-12 flex items-center">
      {itemCount ? (
        <div className="w-full text-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Quantity</span>
            <QuantityButtons product={product} />
          </div>
          <div className="flex items-center justify-between border-t pt-1">
            <span className="text-xs font-semibold">Subtotal</span>
            <PriceFormatter amount={product.price ? product.price * itemCount : 0} />
          </div>
        </div>
      ) : (
        <button
          disabled={isOutOfStock}
          onClick={() => {addItem(product)
          toast.success(`${product.name?.substring(0,12)}... added to cart`)  
            
          }}
          className={cn(
            'w-full py-1 bg-transparent text-darkBackground shadow-none border border-darkBackground font-semibold tracking-wide hover:bg-greenBackground hover:text-white hoverEffect  text-sm md:text-lg ',
            className
          )}
        >
          Add to cart
        </button>
      )}

    
    </div>
  )
}

export default AddToCartButton




// import React from 'react'
// import { Product } from '../../sanity.types'
// import { cn } from '@/lib/utils'
// import QuantityButtons from './QuantityButtons'
// import PriceFormatter from './PriceFormatter'

// interface Props{
//     product:Product
//     className?:string
// }

// const AddToCartButton = ({product,className}:Props) => {
//     const isOutOfStock=product.stock===0
//     const itemCount = 0
//     return (
//     <div className='w-full'>
//             {itemCount?(
//                 <div className='w-full text-sm'>
//                     <div className='flex items-center justify-between'>
//                         <span className='text-xs text-muted-foreground'>Quantity</span>
//                         <QuantityButtons product={product}/>
//                     </div>
//                     <div className='flex items-center justify-between border-t pt-1'>
//                         <span className='text-xs font-semibold'>Subtotal</span>
//                         <PriceFormatter amount={product.price ? product.price*itemCount:0}/>
//                     </div>
//                 </div>
//             ):(
//         <button disabled={isOutOfStock} className={cn("w-full py-1.5 bg-transparent text-darkBackground shadow-none border border-darkBackground font-semibold tracking-wide hover:bg-darkBackground hover:text-textColor2 hoverEffect ", className)} >Add to cart</button>

//             )}
//      </div>
//   )
// }

// export default AddToCartButton