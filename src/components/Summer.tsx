// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
//   } from "@/components/ui/carousel";
  import React from "react";
  import Image from "next/image";
  
  const Summer = () => {
    return (
        <div className="w-full  md:h-[100vh] bg-greenBackground flex justify-between items-end ">
            <div className="w-full bg-yelow-600 h-auto  mx-auto lg:w-[1049px]  md:h-[600px] flex flex-col md:flex-row items-center justify-between pt-6 sm:gap-y-20  text-white">
              <div className=" h-auto bg--200 lg:w-[509px]  md:pl-7 md:h-[400px] flex  flex-col md:justify-between gap-y-3 sm:gap-y-5 mb-4  max-sm:text-center ">
                <h4 className="text-sm max-sm:text-center md:text-[20px]">
                  SUMMER 2020
                </h4>
                <h1 className="font-bold max-sm:text-center text-[34px] md:text-[56px]">
                  Vita Classic Product
                </h1>
                <p className="text-sm w-[250px] max-sm:text-center max-sm:mx-auto md:w-[341px]">
                  We know how large objects will act, We know how are objects
                  will act, We know
                </p>
                <div className="flex items-center max-sm:mx-auto space-x-3 md:justify-evenly font-bold sm:w-[295px]  ">
                  <h3 className="text-sm md:text-[24px] ">$16.48</h3>
                  <button className="py-2 sm:py-3 bg-buttonColor px-5 sm:px-8 rounded-[5px] text-sm ">
                    ADD TO CART
                  </button>
                </div>
              </div>
              <div className="w-full h-full pt-10 md:w-[509px] overflow-hidden flex justify-center items-center mx-auto">
                <Image
                  width={100}
                  height={100}
                  src="/Images/summer2.png"
                  alt=""
                  className="w-auto h-[300px] md:w-full md:h-full  overflow-hidden "
                />
              </div>
            </div> 
        </div>
      

       
      

    );
  };
  
  export default Summer;
  