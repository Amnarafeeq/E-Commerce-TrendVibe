import React from 'react'
import HeaderMenu from './HeaderMenu'
import Container from './Container'
// import { headerData } from '../../constants'
import Link from 'next/link'
import MobileMenu from './MobileMenu'
import SearchBar from './SearchBar'
import CartIcon from './CartIcon'
import { auth, currentUser } from '@clerk/nextjs/server'
import { ClerkLoaded, SignedIn, SignInButton, UserButton } from '@clerk/nextjs'
import { ListOrdered } from 'lucide-react'
import { getAllCategories, getMyOrders } from '@/sanity/helpers/queries'

const Header = async() => {
  const users = await currentUser()
  const {userId} = await auth()
  const categories = await getAllCategories()
  let orders = null
  if(userId){
      orders = await getMyOrders(userId)
  }
  return (
    <header className=' sticky top-0 z-50 bg-lightBackground shadow-lg border-b border-b-gray-300 py-5'>
       <Container className='flex justify-between items-center  gap-7'>
      
    <div className='flex items-center ml-3 gap-2'>
      <MobileMenu/>
    <h2 className='text-xl sm:text-[24px] font-bold text-darkBackground'>TrendVibe</h2>

    </div>
    <HeaderMenu categories={categories}/>

        <div className='w-auto md:w-1/4 flex items-center justify-end gap-2 sm:gap-5'>
          <SearchBar/>
          <CartIcon/>

         <ClerkLoaded>
          <SignedIn>
 <Link href="/orders" className='group relative'>
        <ListOrdered className='w-6 sm:w-8 h-6 text-textColor2 group-hover:text-darkBackground hoverEffect'/>
        <span className='absolute -top-1 -right-1 bg-darkBackground text-textColor2 h-4 w-4 rounded-full text-xs font-semibold flex items-center justify-center'>{orders?.length ? orders.length : 0}</span>
    </Link>
    <UserButton/>
          </SignedIn>
         {!users && (
              <SignInButton mode='modal'>
          <button className='text-sm font-semibold text-textColor2 '>Login</button>

              </SignInButton>
            )
          }
         </ClerkLoaded>
        </div>
       </Container>
       
    </header>
  )
}

export default Header