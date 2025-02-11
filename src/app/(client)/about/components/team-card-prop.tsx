import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
interface ITeamImage {
  img: string;
}
const TeamCardProp = ({ img }: ITeamImage) => {
  return (
    <>
      <Image height={100} width={100} src={img} alt="" className="w-full " />
      <div className="w-full h-[152px] flex flex-col justify-evenly  py-4 items-center">
        <h5 className="font-bold text-darkBackground">Username</h5>
        <h6 className="text-sm text-textColor1 font-bold ">Profession</h6>
        <div className="flex space-x-2 font-bold text-textColor2">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </>
  );
};

export default TeamCardProp;
