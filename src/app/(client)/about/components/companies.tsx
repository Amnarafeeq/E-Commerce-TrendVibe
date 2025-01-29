import React from "react";
import {
  FaHooli,
  FaLyft,
  FaPiedPiperHat,
  FaStripe,
  FaAws,
  FaRedditAlien,
} from "react-icons/fa";

const Companies = () => {
  return (
    <>
      <div className="lg:w-[1050px]  md:h-[479px] bg-[#fafafa] mx-auto flex justify-evenly items-center flex-col max-sm:px-6">
        <div className="w-full md:w-[864px] md:h-[120px] text-center ">
          <h2 className="text-[40px] text-darkBackground font-bold">
            Big Companies Are Here
          </h2>
          <p className=" lg:w-[547px] text-textColor1 text-sm mx-auto">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <div className="w-full md:h-[175px] bg-[#fafafa] mx-auto text-textColor1 flex justify-around max-md:mx-0 max-md:py-4 max-md:flex-col items-center text-[90px] ">
          <FaHooli />
          <FaLyft />
          <FaPiedPiperHat />
          <FaStripe />
          <FaAws />
          <FaRedditAlien />
        </div>
      </div>
    </>
  );
};

export default Companies;
