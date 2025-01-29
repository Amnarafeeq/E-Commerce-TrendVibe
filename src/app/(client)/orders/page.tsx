// import { requiredUsers } from '@/hooks/requiredUser'
import Container from '@/components/Container'
import OrderComponent from '@/components/OrderComponent'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Table, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { getMyOrders } from '@/sanity/helpers/queries'
import { auth } from '@clerk/nextjs/server'
import { FileX } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

const OrdersPage = async() => {
    // await requiredUsers()
    const {userId} = await auth()
    if(!userId){
     return redirect("/")
      
    }
    const orders = await getMyOrders(userId)
  return (
    <Container className='py-10'>
      {orders && orders.length ? (
        <Card className='w-full'>
              <CardHeader >
                <CardTitle className='text-2xl md:text-3xl'> Order List</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className='w-full'>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className='w-auto'>Order Number</TableHead>
                        <TableHead className='hidden md:table-cell'>Date</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead className='hidden md:table-cell'>Email</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className='hidden md:table-cell'>Invoice Number</TableHead>
                      </TableRow>
                    </TableHeader>
                    <OrderComponent orders={orders}/>
                    <ScrollBar orientation='horizontal'/>
                  </Table>
                </ScrollArea>
              </CardContent>
      </Card>): (<div className='flex flex-col items-center justify-center py-5 md:py-10 px-4'>
        <FileX className='h-24 w-24 text-textColor2 mb-4'/>
        <h2>No orders found</h2>
        <p className='mt-2 text-sm text-textColor1 text-center max-w-md '>It looks like you haven&apos;t placed any orders yet. Start shopping to see your order here!</p>
        <Button className='mt-6 bg-darkBackground/90 hover:bg-darkBackground text-textColor2 rounded-xl'>
          <Link href="/">Browse Products</Link>
        </Button>
      </div>) }
    </Container>
  )
}

export default OrdersPage