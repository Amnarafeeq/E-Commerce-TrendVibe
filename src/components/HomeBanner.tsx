import React from 'react'

const HomeBanner = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center gap-5'>
            <h2 className='text-3xl md:text-4xl uppercase font-bold text-center text-darkBackground'>Best Clothing Collection</h2>
            <p className='text-sm text-center text-textColor1 font-medium max-w-[480px]'>Find everything you need to look and feel your best, and shop the latest men&apos;s fashion and lifestyle products.</p>
        </div>
    </div>
  )
}

export default HomeBanner