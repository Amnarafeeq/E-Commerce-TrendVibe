"use client"
import Loading from '@/components/Loading'
import React, { useEffect, useState } from 'react'
import useCartStore from '../../../../store'
import { useAuth, useUser } from '@clerk/nextjs'
import Container from '@/components/Container'
import NotAccessToCart from '@/components/NotAccessToCart'
import EmptyCart from '@/components/EmptyCart'
import { Heart, ShoppingBag, Trash } from 'lucide-react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import toast from 'react-hot-toast'
import PriceFormatter from '@/components/PriceFormatter'
import QuantityButtons from '@/components/QuantityButtons'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { createCheckoutSession, MetaData } from '../../../../actions/createCheckoutSession'


const CartPage = () => {
    const [isClient, setIsClient] = useState(false)
    const [loading,setLoading] = useState(false)
    const {deleteCartProduct,getTotalPrice,getItemCount,getSubtotalPrice,resetCart,getGroupedItems} = useCartStore()
    const {user} = useUser()
    const {isSignedIn} = useAuth()
    useEffect(()=>{
        setIsClient(true)

    },[])

    const cartProducts = getGroupedItems()
    if (!isClient) {
        return <Loading/>
    }
    const handleDeleteProduct = (id:string)=>{
             deleteCartProduct(id)
             toast.success("Product deleted successfully")
    }
    const handleResetCart =()=>{
        const confirmed = window.confirm("Are you sure you want to reset the cart?")
        if (confirmed) {
            resetCart()
            toast.success("Cart reset successfully")
        }
    }
    const handleCheckout =async()=> {
      setLoading(true)
      try{
         const metadata:MetaData = {
             orderNumber:crypto.randomUUID(),
             customerName:user?.fullName ?? "Unknown",
             customerEmail:user?.emailAddresses[0].emailAddress || "unknown", 
             clerkUserId:user?.id ?? "Unknown",
         }
         const checkoutUrl = await createCheckoutSession(cartProducts,metadata)
         if(checkoutUrl){
            window.location.href = checkoutUrl
         }
      }catch(error){
        console.error("Error creating checkout session",error)
      }finally{
        setLoading(false)
      }

    }
  return (
    <div className='bg-gray-50 pb-52 md:pb-10' >
        {isSignedIn? (
    <Container className='' >
        {/* Add your children components here */}
        {cartProducts.length? (
            <> 
            <div className='flex items-center gap-2 py-5'>
                <ShoppingBag/>
                <h1 className='text-2xl font-semibold '>Shopping Cart</h1>
            </div>
           <div className='grid lg:grid-cols-3 md:gap-8'>
             {/* products */}
             <div className='lg:col-span-2 rounded-lg'>
                <div className='border bg-white rounded-md'>
                    {cartProducts.map(({product})=>{
                        const itemCount = getItemCount(product._id)
                       return(
                        <div key={product._id} className='border p-2.5 last:border-b-0 flex items-center justify-center'>
                            <div className='flex flex-1 items-center gap-2 h-36 md:h-44'>
                                {product.images && (
                                <Link href={`/product/${product.slug?.current}`} className='border p-0.5 md:p-1 mr-2 rounded-md overflow-hidden group '>
                                    <Image src={urlFor(product.images[0]).url()} width={500} height={500} alt='' className='w-32 md:w-40 h-32 md:h-40 object-cover group-hover:scale-105 overflow-hidden hoverEffect'/>
                                </Link>
                                )}
                                <div className='h-full flex flex-1 items-start flex-col justify-between py-1'>
                                    <div className='py-1.5'>
                                        <h3 className='font-semibold'>{product.name}</h3>
                                        <p className='text-sm text-textColor1'>{product.intro}</p>
                                        <p className='text-sm capitalize'>Variant: <span className='font-semibold'>{product.variant}</span> </p>
                                        <p className='text-sm capitalize'>Status: <span className='font-semibold'>{product.status}</span> </p>
                                    </div>
                                    <div className='text-gray-500 flex items-center gap-4'>
                                        <TooltipProvider >
                                                 <Tooltip>
                                                    <TooltipTrigger>
                                                        <Heart className='w-4 h-4 md:w-5 md:h-5 hover:text-red-600 hoverEffect'/>
                                                    </TooltipTrigger>
                                                        <TooltipContent className='font-bold bg-darkBackground text-textColor2 rounded-2xl'>
                                                           Add to Favorite 
                                                        </TooltipContent>
                                                 </Tooltip>
                                                 <Tooltip>
                                                    <TooltipTrigger>
                                                        <Trash onClick={()=>handleDeleteProduct(product._id)} className='w-4 h-4 md:w-5 md:h-5 hover:text-red-600 hoverEffect'/>
                                                    </TooltipTrigger>
                                                        <TooltipContent className='font-bold bg-darkBackground text-textColor2 rounded-2xl'>
                                                           Delete Product 
                                                        </TooltipContent>
                                                 </Tooltip>
                                        </TooltipProvider>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start justify-between h-36 md:h-44 p-0.5 md:p-1'>
                                    <PriceFormatter amount={(product.price as number)* itemCount } className='font-bold text-lg' />
                                    <QuantityButtons product={product}/>
                                </div>
                            </div>
                        </div>
                       ) 
                    })}
                    <Button onClick={handleResetCart} className='m-5 font-semibold bg-red-600 text-white hover:bg-red-700 hoverEffect ' variant="destructive" >Reset Cart</Button>
                </div>
             </div>
            {/* summary */}
            <div className='lg:col-span-1'>
                <div className='hidden md:inline-block w-full bg-white p-6 rounded-lg border'>
                    <h2 className='text-xl font-semibold mb-4'>Order Summary</h2>
                    <div className='space-y-4'>
                        <div className='flex justify-between'>
                            <span>Subtotal</span>
                            <PriceFormatter amount={getSubtotalPrice()}/>
                        </div>
                        <div>
                            <span>Discount</span>
                            <PriceFormatter amount={getSubtotalPrice() - getTotalPrice() } />
                        </div>
                        <Separator/>
                        <div className='flex justify-between'>
                            <span>Total</span>
                            <PriceFormatter amount={getTotalPrice()} className='text-lg font-bold' />
                        </div>
                        <Button disabled={loading} onClick={handleCheckout} className='w-full rounded-full font-semibold tracking-wide bg-darkBackground/90 hover:bg-darkBackground text-textColor2' size="lg">Proceed to Checkout</Button>
                        <Link href="" className='flex items-center justify-center py-2 border border-darkBackground/50 rounded-full border-textColor2  hover:bg-darkBackground hoverEffect'>
                           <Image src="/Images/paymentlogo.png" alt='' width={100} height={100} />
                        </Link>
                    </div>
                </div>
            </div>
            {/* orders for mobile view */}
            <div className='block md:hidden fixed bottom-0 left-0 w-full bg-white pt-2'>
                <div className='p-4 rounded-lg border mx-4'>
                <h2 className='text-xl font-semibold mb-4'>Order Summary</h2>
                    <div className='space-y-4'>
                        <div className='flex justify-between'>
                            <span>Subtotal</span>
                            <PriceFormatter amount={getSubtotalPrice()}/>
                        </div>
                        <div>
                            <span>Discount</span>
                            <PriceFormatter amount={getSubtotalPrice() - getTotalPrice() } />
                        </div>
                        <Separator/>
                        <div className='flex justify-between'>
                            <span>Total</span>
                            <PriceFormatter amount={getTotalPrice()} className='text-lg font-bold' />
                        </div>
                        <Button className='w-full rounded-full font-semibold tracking-wide bg-darkBackground/90 hover:bg-darkBackground text-textColor2' size="lg">Proceed to Checkout</Button>
                        <Link href="" className='flex items-center justify-center py-2 border border-darkBackground/50 rounded-full border-textColor2  hover:bg-darkBackground hoverEffect'>
                           <Image src="/Images/paymentlogo.png" alt='' width={100} height={100} />
                        </Link>
                    </div> 
                </div>
            </div>
           </div>
        </>
        ):(    
            <EmptyCart/>)}
    </Container>
    ) :  (
    <NotAccessToCart/>
    )}
     </div>
  )
}

export default CartPage