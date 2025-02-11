import { AlarmClock, ChevronRight, ImageIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

interface IFImage {
  img: string;
}
const FeaturedPostProp = ({ img }: IFImage) => {
  return (
    <>
      <div className="relative">
        <Image
          src={img}
          alt="no"
          width={348}
          height={300}
          className="w-full h-full"
        />
        <h6 className="absolute top-5 left-5 bg-red-600 py-1 px-3 text-sm font-bold text-white rounded-[5px]">
          NEW
        </h6>
      </div>

      <div className="w-full h-[310px] flex flex-col justify-around px-4 ">
        <div className="w-[159px] h-auto md:h-[16px] text-[12px] flex justify-between items-center text-textColor1 ">
          <h6 className="text-[#8EC2F2]">Google</h6>
          <h6>Trending</h6>
          <h6>New</h6>
        </div>
        <h4 className="text-[20px] ">Loudest à la Madison #1 (L&apos;integral)</h4>
        <p className="text-sm text-textColor1 ">
          We focus on ergonomics and meeting you where you work. It&apos;s only a
          keystroke away.
        </p>
        <div className="md:w-[298px] h-[46px]  flex justify-between">
          <div className="w-[98px] h-[16px]  flex justify-between items-center">
            <AlarmClock className="text-textColor2 text-sm" />
            <p className="text-[12px] text-textColor1 ">22 April 2021</p>
          </div>
          <div className="md:w-[105px] h-[16px]  flex md:justify-between items-center">
            <ImageIcon className="text-greenBackground text-sm" />
            <p className="text-[11px] text-textColor1  ">10 comments</p>
          </div>
        </div>
        <div className="w-[104px] h-[24px] flex   items-center justify-between ">
          <h6 className="text-xs font-bold text-textColor1">Learn More</h6>
          <ChevronRight className="text-xs text-textColor2 " />
        </div>
      </div>
    </>
  );
};

export default FeaturedPostProp;
