import React from "react";

const Costumers = () => {
  return (
    <div className="w-full h-auto lg:w-[1018px] lg:h-[188px] mx-auto my-6 flex flex-wrap justify-between items-center max-sm:flex-col">
      <div className="w-full h-auto lg:h-[104px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5 ">
        <div className="w-full lg:w-[238px] h-full flex justify-center items-center flex-col ">
          <h1 className="text-[58px] text-darkBackground font-bold">15K</h1>
          <h5 className="text-textColor1">Happy Customers</h5>
        </div>
        <div className=" flex justify-center items-center flex-col">
          <h1 className="text-[58px] text-darkBackground font-bold">150K</h1>
          <h5 className="text-textColor1">Monthly Visitors</h5>
        </div>
        <div className=" flex justify-center items-center flex-col ">
          <h1 className="text-[58px] text-darkBackground font-bold">15</h1>
          <h5 className="text-textColor1">Countries Worldwide</h5>
        </div>
        <div className=" flex justify-center items-center flex-col ">
          <h1 className="text-[58px] text-darkBackground font-bold">100+</h1>
          <h5 className="text-textColor1">Top Partners</h5>
        </div>
      </div>
    </div>
  );
};

export default Costumers;
