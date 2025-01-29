import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  const footerLinks = [
    {
      h5: "Company Info",
      link1: "About Us",
      link2: "Carrier",
      link3: "We are hiring",
      link4: "Blog",
    },
    {
      h5: "legal",
      link1: "About Us",
      link2: "Carrier",
      link3: "We are hiring",
      link4: "Blog",
    },
    {
      h5: "Features",
      link1: "Business Marketing",
      link2: "User Analytic",
      link3: "Live Chat",
      link4: "Unlimited Support",
    },
    {
      h5: "Resources",
      link1: "IOS & Android",
      link2: "Watch a Demo",
      link3: "Customers",
      link4: "API",
    },
  ];
  return (
    <footer className="w-full  flex flex-col">
      <div className="w-full bg-[#fafafa] shadow-sm">
        <div className="max-w-[1050px]  flex md:justify-between md:items-center p-4 gap-y-2 md:mx-auto  max-sm:flex-col">
          <h3 className="font-bold text-[24px] text-darkBackground">TrendVibe</h3>
          <div className="flex space-x-4 text-2xl text-textColor2">
            <Facebook />
            <Instagram />
            <Twitter />
          </div>
        </div>
      </div>

      <div className="w-full  py-8 px-4">
        <div className="max-w-[1050px] mx-auto flex flex-wrap justify-between">
          {footerLinks.map((section, index) => (
            <div
              key={index}
              className="w-full sm:w-[152px] mb-4 sm:mb-0 flex flex-col text-sm"
            >
              <h5 className="text-[16px] font-bold mb-2">{section.h5}</h5>
              <ul className="space-y-2">
                <li>{section.link1}</li>
                <li>{section.link2}</li>
                <li>{section.link3}</li>
                <li>{section.link4}</li>
              </ul>
            </div>
          ))}
          <div className="w-full sm:w-[321px] flex flex-col space-y-2">
            <h5 className="text-[16px] font-bold mb-2">Get In Touch</h5>
            <div className="flex items-center text-sm ">
              <input
                type="email"
                placeholder="Enter your email"
                className=" px-1 py-3 w-auto text-textColor1 rounded-[5px] bg-[#E6E6E6] focus:outline-none"
              />
              <button className="px-3 py-3 bg-textColor2  text-white font-bold rounded-[5px]">
                Subscribe
              </button>
            </div>
            <p className="text-textColor1 text-[12px]">Lore ipsum dolor Amit</p>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#fafafa]">
        <div className="max-w-[1050px] mx-auto py-7 text-center px-11">
          <h6 className="font-bold text-textColor1 ">
            Made With Love By Finland All Rights Reserved
          </h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
