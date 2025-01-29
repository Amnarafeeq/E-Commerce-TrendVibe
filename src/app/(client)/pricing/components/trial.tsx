import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

const Trial = () => {
  return (
    <div className="lg:w-[1050px] h-[602px] mx-auto flex justify-center items-center p-5 ">
      <div className="w-full md:w-[607px] md:h-[282px] flex flex-col justify-between gap-y-6 items-center  ">
        <h2 className="text-[40px] text-darkBackground font-bold text-center">
          Start your 14 days free trial
        </h2>
        <p className="text-sm  md:w-[441px] text-center text-textColor1 font-normal">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <button className="bg-textColor2 py-4 px-7 text-sm text-white rounded-[7px] font-bold ">
          Try it free now
        </button>
        <div className="w-[242px] h-[50px] flex justify-evenly items-center text-[25px]">
          <FaTwitter className="text-[#55ACEE]" />
          <FaFacebook className="text-[#395185]" />
          <FaInstagram />
          <IoLogoLinkedin className="text-[#0A66C2]" />
        </div>
      </div>
    </div>
  );
};

export default Trial;
