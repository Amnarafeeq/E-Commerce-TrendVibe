import Image from "next/image";
import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

const HomePage = () => {
  return (
    <div className=" w-full  mx-auto h-auto  md:h-[600px]   flex flex-col md:flex-row items-center max-sm:px-5 px-12 p-3 space-y-4">
      <div className="w-auto  md:w-[599px] md:h-[351px] flex   flex-col justify-center max-sm:text-center flex-1 max-sm:space-y-3">
        <h5 className="text-darkBackground font-bold">CONTACT US</h5>
        <h1 className="text-darkBackground text-[44px] md:text-[54px] font-bold md:w-[378px]">
          Get in touch today
        </h1>
        <p className="text-textColor1 text-[20px] md:w-[376px]">
          We know how large objects will act, but things on a small scale
        </p>
        <div className="md:text-[24px] font-bold">
          <h3>Phone ; +451 215 215 </h3>
          <h3>Fax : +451 215 215</h3>
        </div>

        <div className="md:w-[242px] md:h-[50px]  flex justify-evenly items-center text-[25px] text-black">
          <FaTwitter className="hover:text-[#55ACEE]" />
          <FaFacebook className="hover:text-[#395185]" />

          <FaInstagram className="hover:text-red-600" />
          <IoLogoLinkedin className="hover:text-[#0A66C2]" />
        </div>
      </div>

      <div className="w-full h-full flex-1 flex justify-center">
        <Image
          width={300}
          height={400}
          src="/Images/contact.png"
          alt=""
          className="w-auto h-full md:w-full "
        />
      </div>
    </div>
  );
};

export default HomePage;
