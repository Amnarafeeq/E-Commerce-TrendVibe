import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative flex items-center xl:mt-5 max-h-[100vh]">
      <Image
        src="/Images/hero-img.jpg"
        alt=""
        width={600}
        height={400}
        className=" w-full h-full max-sm:h-[100vh] object-cover"
      />

      <div className="w-auto bg--300  max-sm:text-center absolute ml-4 md:ml-20 h-auto bg--600 md:w-[599px] md:h-[300px] bg-cyan- text-white font-bold flex flex-col justify-between max-sm:space-y-5">
        <h5>SUMMER 2020</h5>
        <h1 className="md:text-[58px]">NEW COLLECTION</h1>
        <p className=" md:text-[20px] w-[376px] font-medium max-sm:w-[200px]">
          We know how large objects will act, but things on a small scale.
        </p>
        <div>
          <button className="bg-buttonColor font-bold hover:bg-green-700 px-6  py-3 rounded-[5px]">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
