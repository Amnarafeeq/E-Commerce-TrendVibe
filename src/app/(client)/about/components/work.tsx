import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <div className="w-full h-[637px]  flex max-md:px-4">
      <div className=" w-full md:w-[60%] h-full bg-[#2A7CC7] flex justify-center items-center max-sm:text-center max-sm:px-10">
        <div className="w-[500px] md:h-[238px]  space-y-5 text-white font-bold ">
          <h5>WORK WITH US</h5>
          <h1 className="text-[40px] ">Now Let’s grow Yours</h1>
          <p className="text-sm font-medium">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th{" "}
          </p>
          <button className="border-[1px]  border-white px-8 py-3 rounded-[5px]">
            Button
          </button>
        </div>
      </div>
      <div className="hidden md:block w-[40%] h-full">
        <Image
          src="/Images/img12.png"
          alt=""
          width={200}
          height={300}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Work;
