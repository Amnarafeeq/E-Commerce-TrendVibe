import Image from "next/image";
import React from "react";

const Video = () => {
  return (
    <div className="w-full lg:w-[1050px] h-auto lg:h-[764px]  mx-auto flex justify-center items-center max-md:p-9">
      <Image src="/Images/Video card.png" width={989} height={540} alt="" />
    </div>
  );
};

export default Video;
