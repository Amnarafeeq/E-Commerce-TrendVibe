import React from "react";
import PCardProp from "./pricing-card-prop";
import {
  FaHooli,
  FaLyft,
  FaPiedPiperHat,
  FaStripe,
  FaAws,
  FaRedditAlien,
} from "react-icons/fa";

const cardData = [
  { text1: "FREE", text2: "0" },
  { text1: "PREMIUM", text2: "50" },
  { text1: "ENTERPRISE", text2: "100" },
];

const PricingCard = () => {
  return (
    <>
      <div className="h-auto  lg:w-[985px] lg:h-[704px] mt-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center relative max-md:p-4 gap-y-4">
        {cardData.map((data, index) => (
          <div
            key={index}
            className={`w-full lg:w-[327px]   border-[1px] border-textColor2 rounded-[8px] flex flex-col items-center   ${
              index === 1
                ? "h-[704px] bg-darkBackground text-white gap-y-9 py-7"
                : "h-[664px] justify-evenly "
            } `}
          >
            <PCardProp text1={data.text1} text2={data.text2} />
          </div>
        ))}

        <div className="max-lg:hidden  lg:w-[1050px] h-[340px] bg-[#fafafa] flex flex-col justify-center gap-y-4 absolute  bottom-0 ">
          <h4 className="text-center font-medium text-[20px]">
            Trusted By Over 4000 Big Companies
          </h4>
          <div className="w-full md:h-[175px] bg-[#fafafa] mx-auto text-textColor1 flex justify-between max-md:mx-0 max-md:py-4 max-md:flex-col items-center text-[90px] ">
            <FaHooli />
            <FaLyft />
            <FaPiedPiperHat />
            <FaStripe />
            <FaAws />
            <FaRedditAlien />
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingCard;
