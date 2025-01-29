import React from 'react'
import { IoIosCheckmarkCircle } from 'react-icons/io'

const productUpdates = [
    "Unlimited product updates",
    "Unlimited product updates",
    "Unlimited product updates",
    "1GB  Cloud storage",
    "Email and community support",
  ];

interface IPricingCard {
    text1:string,
    text2:string,

}

const PCardProp = ({text1,text2}:IPricingCard) => {
  return (
    <>
       <h3 className='text-[24px] font-bold '>{text1}</h3> 
       <h5 className='w-[160px] text-center  font-bold'>Organize across all 
       apps by hand</h5>
       <div className='w-[130px] h-[56px]  flex justify-evenly text-textColor2'>
         <h2 className='text-[30px] font-bold'>{text2}</h2>
         <span>
         <h3 className='text-[24px] font-bold'>$</h3>
         <h6 className='text-sm'>Per Month</h6>
         </span>
        
       </div>
       <div className='w-[247px] h-[236px] flex flex-col justify-evenly'>
        {/* <div >
        <IoIosCheckmarkCircle />
        <h6>Unlimited product updates</h6>
        </div>
        <div>
        <IoIosCheckmarkCircle />
        <h6>Unlimited product updates</h6>
        </div>
        <div>
        <IoIosCheckmarkCircle />
        <h6>Unlimited product updates</h6>
        </div>
        <div>
        <IoIosCheckmarkCircle />
        <h6>Unlimited product updates</h6>
        </div>
        <div>
        <IoIosCheckmarkCircle />
        <h6>Unlimited product updates</h6>
        </div> */}
        {productUpdates.map((update, index) => (
      <div key={index} className="feature-item flex items-center gap-x-2">
        <IoIosCheckmarkCircle 
        className={`text-[40px] ${index === 3 || index === 4 ? "text-[#BDBDBD]" : "text-buttonColor"}`} 
        />
        <h6 className='text-sm font-bold'>{update}</h6>
      </div>
    ))}


       </div>
      <button className='w-[246px] h-[52px] bg-textColor2 text-white text-sm font-bold rounded-[6px]'>Try for free</button>

    </>
  )
}

export default PCardProp