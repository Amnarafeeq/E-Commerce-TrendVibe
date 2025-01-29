import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { SignInButton, SignUpButton } from '@clerk/nextjs'
import { Button } from './ui/button'

const NotAccessToCart = () => {
  return (
    <div className='flex items-center justify-center py-12 md:py-32 bg-gray-100 p-4'>
        <Card className='w-full max-w-md'>
            <CardHeader className='space-y-4'>
                <h2 className='text-3xl text-textColor2 font-bold text-center'>TrendVibe</h2>
                <CardTitle className='text-2xl font-semibold text-center text-textColor1'>Welcome Back!</CardTitle>
            </CardHeader>
            <CardContent className='space-y-7'>
                <p className='text-center text-sm text-gray-500'>Log in to view your cart items and checkout. Don’t miss out on your favorite products!</p>
                <SignInButton mode='modal'>
                    <Button className='w-full bg-darkBackground text-textColor2 rounded-xl font-bold hoverEffect hover:bg-darkBackground hover:text-textColor1' variant="outline" size="lg" >
                        Sign in</Button>
                </SignInButton>
            </CardContent>
            <CardFooter className='flex flex-col space-y-2'>
                <div>
                   Don’t have an Account? 
                </div>
                <SignUpButton mode='modal'>
                <Button className='w-full text-textColor2 rounded-xl font-bold hoverEffect hover:border-darkBackground hover:text-darkBackground' variant="outline" size="lg" >
                        Create an Account
                    </Button>
                </SignUpButton>
            </CardFooter>
        </Card>
    </div>
  )
}

export default NotAccessToCart