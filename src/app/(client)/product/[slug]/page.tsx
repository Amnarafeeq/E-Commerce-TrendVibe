import AddToCartButton from '@/components/AddToCartButton'
import Container from '@/components/Container'
import ImageView from '@/components/ImageView'
import PriceView from '@/components/PriceView'
import ProductCharacteristics from '@/components/ProductCharacteristics'
import ReviewComponent from '@/components/ReviewComponent'
import { getProductBySlug } from '@/sanity/helpers/queries'
import { BoxIcon, FileQuestion, Heart, Share, Truck } from 'lucide-react'
import { notFound } from 'next/navigation'

const SingleProductPage = async({params}:{params:Promise<{slug:string}>}) => {
  const {slug} = await params
  const product = await getProductBySlug(slug)
  if(!product){
    return notFound()
  }
  
  return (
   
        <Container  className='py-10 flex flex-col md:flex-row gap-10'>
            {
              product.images && <ImageView images={product.images}/>
            }
            <div className='w-full md:w-1/2 flex flex-col gap-5'>
            <div>
            <h2 className='text-3xl  md:text-4xl font-bold mb-2'>{product.name}</h2>
            <PriceView price={product.price} discount={product.discount} className='text-lg font-bold' />
            </div>
            {product.stock && <p className='bg-green-100 w-24 text-center text-green-600 text-sm py-2.5 font-semibold rounded-lg'>In Stock</p> }
            <p className='text-sm text-gray-600 tracking-wide'>{product.description }</p>
            <div className='flex items-center gap-2.5 lg:gap-5'>
              <AddToCartButton product={product} className='bg-darkBackground/80 text-white px-3 hover:bg-darkBackground hoverEffect'/>
              <button className='border-2 border-darkBackground/30 text-textColor1 px-2.5 py-1.5 hover:text-textColor2 hover:bg-darkBackground hoverEffect'>
                <Heart className='w-5 h-5'/>
              </button>
            </div>
            <ProductCharacteristics product={product}/>
            <div className='flex flex-wrap items-center justify-between gap-2.5 border-b border-b-gray-200 py-5 -mt-2'>
              <div className='flex items-center gap-2 text-sm text-black hover:text-textColor2 hoverEffect'>
                <BoxIcon className='w-5 h-5'/>
                <p>Compare color</p>
              </div>
              <div className='flex items-center gap-2 text-sm text-black hover:text-textColor2 hoverEffect'>
                <FileQuestion className='w-5 h-5'/>
                <p>Ask a question</p>
              </div>
              <div className='flex items-center gap-2 text-sm text-black hover:text-textColor2 hoverEffect'>
                <Truck className='w-5 h-5'/>
                <p>Delivery & Return</p>
              </div>
              <div className='flex items-center gap-2 text-sm text-black hover:text-textColor2 hoverEffect'>
                <Share className='w-5 h-5'/>
                <p>Share</p>
              </div>
            </div>
            <div className='flex items-center flex-wrap gap-5'>
              <div className='border border-darkBackground text-center hover:border-textColor2 rounded-md hoverEffect'>
                <p className='text-base font-semibold text-darkBackground'>Free Shipping</p>
                <p className='text-sm text-textColor1'>Free shipping over order $200</p>
              </div>
              <div className='border border-darkBackground text-center hover:border-textColor2 rounded-md hoverEffect'>
                <p className='text-base font-semibold text-darkBackground'>Flexible Payment</p>
                <p className='text-sm text-textColor1'>Pay with Multiple Credit Cards</p>
              </div>
            </div>
            {/* <div className='flex items-center flex-wrap gap-5'>
              <div className='border border-darkBackground text-center hover:border-textColor2 rounded-md hoverEffect'>
                <p className='text-base font-semibold text-darkBackground'>Flexible Payment</p>
                <p className='text-sm text-textColor1'>Pay with Multiple Credit Cards</p>
              </div>
            </div> */}
         <ReviewComponent/>

          
            </div>
            
            
        </Container>
   
  )
}

export default SingleProductPage