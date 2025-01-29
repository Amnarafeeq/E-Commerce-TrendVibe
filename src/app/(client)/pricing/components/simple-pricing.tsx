import Link from "next/link";
import React from "react";
import { IoEllipse } from "react-icons/io5";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const SimplePricing = () => {
  return (
    <div className="lg:w-[870px] md:h-[390px] mx-auto flex flex-col items-center justify-evenly space-y-3 max-sm:p-4">
      <div className="text-center  md:w-[427px] md:h-[180px] flex flex-col justify-center items-center font-bold space-y-4">
        <h5 className="text-textColor1">PRICING</h5>
        <h1 className="text-[40px] md:text-[50px] text-darkBackground">
          Simple Pricing
        </h1>

        <Link href="" className="flex items-center text-darkBackground">
          Home <MdOutlineArrowForwardIos className="text-textColor1 text-xl" />
          <span className="text-textColor1">Pricing</span>{" "}
        </Link>
      </div>
      <div className="md:w-[600px] md:h-[170px] flex items-center flex-col justify-between font-bold max-md:mx-4 space-y-4">
        <h2>Pricing</h2>
        <p className="text-sm max-sm:px-4 md:w-[469px] bg-white text-center ">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        <div className="w-[311px] h-[44px] flex justify-between items-center">
          <h5>Monthly</h5>
          <div className="border-2 border-textColor2 w-[55px] h-[29px] rounded-full">
            <IoEllipse className="text-2xl ml-1 border-black text-textColor1" />
          </div>
          <h5>Yearly</h5>
          <h6 className="px-2 sm:px-4 py-3 text-sm rounded-full text-textColor2 bg-[#B2E3FF]">
            Save 25%
          </h6>
        </div>
      </div>
    </div>
  );
};

export default SimplePricing;
