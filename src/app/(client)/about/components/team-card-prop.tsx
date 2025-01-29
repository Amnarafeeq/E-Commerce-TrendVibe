import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
interface ITeamImage{
    img: string
}
const TeamCardProp = ({img}:ITeamImage) => {
  return (
    <>
      < >
                <Image height={100} width={100} src={img} alt="" className='w-full '/>
                <div className='w-full h-[152px] flex flex-col justify-evenly  py-4 items-center'>
                    <h5 className='font-bold text-darkBackground'>Username</h5>
                    <h6 className='text-sm text-textColor1 font-bold '>Profession</h6>
                    <div className='flex space-x-2 font-bold text-textColor2'>
                    
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                    </div>
                   
                  
                </div> 
               {/* <div className="w-full max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
  <img src={img} alt="" className="w-full object-cover" />
  <div className="w-full h-[188px] flex flex-col justify-evenly items-center bg-red-400 p-4">
    <h5 className="font-bold text-base md:text-lg lg:text-xl text-center">
      Graphic Design
    </h5>
    <h6 className="text-sm md:text-base text-textColor1 font-bold text-center">
      English Department
    </h6>
    <div className="flex space-x-2 font-bold">
      <h6 className="text-[#BDBDBD] text-sm md:text-base line-through">$16.48</h6>
      <h6 className="text-[#23856D] text-sm md:text-base">$6.48</h6>
    </div>
    <div className="w-[85px] h-[16px] flex justify-between">
      <FaCircle className="text-[#23A6F0]" />
      <FaCircle className="text-[#23856D]" />
      <FaCircle className="text-[#E77C40]" />
      <FaCircle className="text-[#252B42]" />
    </div>
  </div>
</div> */}


            </>
     
    
    </>
  )
}

export default TeamCardProp