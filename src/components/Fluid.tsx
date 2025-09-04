import Image from "next/image";
import React from "react";

const Fluid = () => {
  return (
    <div className="w-full h-auto md:h-[682px] flex mx-auto md:flex-row flex-col-reverse justify-evenly items-center p-7">
      <div className="w-auto md:w-[704px] h-full  flex  justify-center items-center ">
        <div>
          <Image
            src="/Images/fluid.png"
            alt=""
            width={600}
            height={600}
            className="w-full h-auto md:h-full md:w-[600px]"
          />
        </div>
      </div>
      <div className="w-auto mx-auto md:w-[573px] h-auto md:h-[326px] flex flex-col md:justify-between items-center text-center  gap-y-4 sm:gap-y-7 ">
        <h4 className="text-[#BDBDBD] font-bold">SUMMER 2022</h4>
        <h1 className="text-[30px] md:text-[40px] font-bold   md:w-[387px] text-darkBackground">
          Part of the Neural Universe
        </h1>
        <div className="w-auto  md:w-[369px] text-center h-auto md:h-[60px]  leading-8 text-[20px] text-textColor1">
          <p>
            We know how large objects will act, but things on a small scale.
          </p>
        </div>
        
          <div className="md:w-[339px]  md:h-[52px] flex justify-center gap-y-2 max-sm:mx-auto max-sm:flex-col md:justify-between items-center ">
          <button className="  text-sm font-bold max-sm:py-2 px-8 bg-buttonColor hover:border-2 hover:border-buttonColor hover:bg-white text-white hover:text-buttonColor hoverEffect h-full rounded-[5px] ">
            BUY NOW
          </button>
          <button className=" text-sm font-bold max-sm:py-2 px-7 max-sm:mb-6 sm:px-12 bg-white hover:bg-buttonColor h-full overflow-hidden border-2  border-buttonColor text-buttonColor hoverEffect hover:text-white rounded-[5px]">
            READ MORE
          </button>
        </div>

      </div>
    </div>
  );
};

export default Fluid;
