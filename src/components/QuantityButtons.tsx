import React from 'react'
import { Product } from '../../sanity.types'
import {  Minus, Plus } from 'lucide-react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import useCartStore from '../../store'
import toast from 'react-hot-toast'

interface Props{
    product:Product
    className?:string
}

const  QuantityButtons = ({product,className}:Props) => {
  const {addItem,getItemCount,removeItem} = useCartStore()
  const itemCount = getItemCount(product._id)
  const isOutOfStock = product.stock === 0
  const handleRemoveProduct = () => {
       removeItem(product._id)
       if(itemCount > 1){
        toast.success("Quantity decreased successfully")
       }else
        {
          toast.success(`${product.name?.substring(0,12)}... removed from cart
          `)}
  }
    // const itemCount = 2
  return (
    <div className={cn("flex items-center gap-1 text-base pb-1",className)}>
        <Button onClick={handleRemoveProduct} disabled={itemCount === 0 || isOutOfStock } variant="outline" size="icon" className='w-6 h-6' >
            <Minus size={20}/>
        </Button>
        <span className='font-semibold w-8 text-center text-darkBackground'>{itemCount}</span>
        <Button 
            onClick={() => {addItem(product)
              toast.success(`${product.name?.substring(0,12)}... added to cart`)  
                
              }}
        variant="outline" size="icon" className='w-6 h-6'>
            <Plus size={20}/>
        </Button>
    </div>
  )
}

export default QuantityButtons