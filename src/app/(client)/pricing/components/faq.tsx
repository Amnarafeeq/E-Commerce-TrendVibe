import React from "react";
import { RiArrowRightWideLine } from "react-icons/ri";

const content = [
  {
    title: "the quick fox jumps over the lazy dog",
    text: `Met minim Mollie non desert Alamo est sit cliquey dolor 
      do met sent. RELIT official consequent door ENIM RELIT Mollie. 
      Excitation venial consequent sent nostrum met.`,
  },
  {
    title: "the quick fox jumps over the lazy dog",
    text: `Met minim Mollie non desert Alamo est sit cliquey dolor 
        do met sent. RELIT official consequent door ENIM RELIT Mollie. 
        Excitation venial consequent sent nostrum met.`,
  },
  {
    title: "the quick fox jumps over the lazy dog",
    text: `Met minim Mollie non desert Alamo est sit cliquey dolor 
        do met sent. RELIT official consequent door ENIM RELIT Mollie. 
        Excitation venial consequent sent nostrum met.`,
  },
  {
    title: "the quick fox jumps over the lazy dog",
    text: `Met minim Mollie non desert Alamo est sit cliquey dolor 
          do met sent. RELIT official consequent door ENIM RELIT Mollie. 
          Excitation venial consequent sent nostrum met.`,
  },
  {
    title: "the quick fox jumps over the lazy dog",
    text: `Met minim Mollie non desert Alamo est sit cliquey dolor 
          do met sent. RELIT official consequent door ENIM RELIT Mollie. 
          Excitation venial consequent sent nostrum met.`,
  },
  {
    title: "the quick fox jumps over the lazy dog",
    text: `Met minim Mollie non desert Alamo est sit cliquey dolor 
            do met sent. RELIT official consequent door ENIM RELIT Mollie. 
            Excitation venial consequent sent nostrum met.`,
  },
  {
    title: "the quick fox jumps over the lazy dog",
    text: `Met minim Mollie non desert Alamo est sit cliquey dolor 
            do met sent. RELIT official consequent door ENIM RELIT Mollie. 
            Excitation venial consequent sent nostrum met.`,
  },
  {
    title: "the quick fox jumps over the lazy dog",
    text: `Met minim Mollie non desert Alamo est sit cliquey dolor 
              do met sent. RELIT official consequent door ENIM RELIT Mollie. 
              Excitation venial consequent sent nostrum met.`,
  },
];

const FQuestions = () => {
  return (
    <div className="w-full h-auto lg:w-[1050px] lg:h-[1037px]  mx-auto flex justify-evenly flex-col p-7 gap-y-6">
      <div className="w-full lg:h-[120px] flex flex-col items-center justify-center ">
        <h2 className="text-[25px] md:text-[40px] text-darkBackground font-bold">
          Pricing FAQs
        </h2>
        <h4 className="text-sm md:text-[20px] text-textColor1  md:w-[552px] text-center">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics
        </h4>
      </div>

      <div className="w-full h-auto flex flex-wrap gap-y-5 justify-between">
        {content.map((text, index) => {
          return (
            <div
              key={index}
              className="w-full lg:w-[491px] max-lg:items-center md:h-[159px]  p-6 flex justify-between flex-col space-y-4"
            >
              <span className="flex items-center space-x-2">
                <RiArrowRightWideLine className="text-2xl text-textColor2" />
                <h6 className="font-bold">{text.title}</h6>
              </span>
              <p className="text-sm text-textColor1 w-full md:w-[424px] ">
                {text.text}
              </p>
            </div>
          );
        })}
      </div>

      <h4 className="text-center text-textColor1 text-[20px]">
        Haven’t got your answer? Contact our support
      </h4>
    </div>
  );
};

export default FQuestions;
