import React from 'react'
import PriceFormatter from './PriceFormatter'
import { cn } from '@/lib/utils'

interface PriceViewProps {
    price: number |undefined
    discount: number | undefined
    className?: string
}

const PriceView = ({price,discount,className}:PriceViewProps) => {
  return (
    <div className='flex items-center gap-7'>
        <div className='flex items-center justify-between w-full'>
           <PriceFormatter amount={price} className={className}  />
           {price && discount && <PriceFormatter amount={price + (price * (discount / 100)) } className={cn("line-through font-medium text-greenBackground",className)}/>}
        </div>
    </div>
  )
}

export default PriceView