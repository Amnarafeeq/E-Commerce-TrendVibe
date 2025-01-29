import Image from "next/image";
import React from "react";

const AboutHomePage = () => {
  return (
    <div className=" w-full  mx-auto h-auto  md:h-[680px]   flex flex-col md:flex-row items-center justify-between px-5">
      <div className="w-auto  md:w-[599px] h-[321px]    flex-col justify-between max-sm:text-center">
        <h5 className="text-darkBackground font-bold">ABOUT COMPANY</h5>
        <h1 className="text-darkBackground text-[58px] font-bold ">ABOUT US</h1>
        <p className="text-textColor1 text-sm md:w-[376px]">
          We know how large objects will act, but things on a small scale
        </p>
        <div>
          <button className="bg-textColor2 text-white text-sm px-5 py-4 font-bold rounded-[5px] mt-4">
            Get Quote Now
          </button>
        </div>
      </div>

      <div className="w-full md:w-[600px] ">
        <Image
          width={300}
          height={400}
          src="/Images/background.png"
          alt=""
          className=" h-full w-full "
        />
      </div>
    </div>
  );
};

export default AboutHomePage;
