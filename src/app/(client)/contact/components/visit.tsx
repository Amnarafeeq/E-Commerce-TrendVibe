import React from "react";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { PiArrowBendRightDownLight } from "react-icons/pi";

const data = [
  {
    icon: <FiPhone />,
    emails: ["georgia.young@example.com", "georgia.young@ple.com"],
    title: "Get Support",
    buttonText: "Submit Request",
  },
  {
    icon: <FaLocationDot />,
    emails: ["georgia.young@example.com", "georgia.young@ple.com"],
    title: "Get Support",
    buttonText: "Submit Request",
  },
  {
    icon: <BsEnvelopeFill />,
    emails: ["georgia.young@example.com", "georgia.young@ple.com"],
    title: "Get Support",
    buttonText: "Submit Request",
  },
];

const Visit = () => {
  return (
    <>
      <div className="h-auto lg:w-[1050px] lg:h-[841px] bg-[#fafafa] mx-auto flex flex-col justify-evenly items-center">
        <div className="h-auto w-full lg:w-[633px] lg:h-[134px]  text-center">
          <h6 className="text-sm text-textColor1 font-bold">
            VISIT OUR OFFICE
          </h6>
          <h2 className="text-[40px] text-darkBackground font-bold ">
            We help small businesses with big ideas
          </h2>
        </div>
        <div className="w-full lg:w-[985px] lg:h-[403px]  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-between flex-wrap max-md:p-7 max-lg:p-10">
          {data.map((item, index) => (
            <div
              key={index}
              className={`w-full  lg:w-[327px]   flex flex-col md:mx-auto justify-evenly items-center text-center font-bold ${
                index === 1
                  ? "h-[400px] lg:h-[403px] text-white bg-darkBackground"
                  : "h-[400px] lg:h-[343px] text-[#252B42] "
              }`}
            >
              <div className="text-textColor2 text-6xl">{item.icon}</div>
              <div className="text-sm">
                {item.emails.map((email, i) => (
                  <h6 key={i}>{email}</h6>
                ))}
              </div>
              <h5>{item.title}</h5>
              <button className="text-sm border-2 border-textColor2 rounded-full py-3 px-6 text-textColor2">
                {item.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-[1050px] h-[348px]  mx-auto text-darkBackground flex flex-col items-center font-bold ">
        <PiArrowBendRightDownLight className="text-[58px] text-textColor2" />
        <div className="md:w-[607px] h-[188px]  mx-auto flex flex-col justify-evenly items-center">
          <h5>WE Can&apos;t WAIT TO MEET YOU</h5>
          <h1 className="text-[40px] md:text-[58px] ">Let’s Talk</h1>
          <button className="text-sm text-white bg-textColor2 px-6 py-3 rounded-[6px]">
            Try it now free
          </button>
        </div>
      </div>
    </>
  );
};

export default Visit;
