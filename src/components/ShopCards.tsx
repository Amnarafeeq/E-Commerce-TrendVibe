import Image from "next/image";
import React from "react";

const ShopCards = () => {
  return (
    <>
      {/* <div className="w-full max-w-screen-lg h-auto  lg:h-[770px] bg-[#fafafa] mx-auto flex flex-col justify-evenly items-center max-sm:p-5 max-lg:gap-y-6 max-lg:py-5">
        <div className="w-full h-auto text-center  md:w-[607px] md:h-[62px] space-y-2 ">
          <h4 className="text-sm text-textColor1 ">Featured Products</h4>
          <h3 className="text-lg text-darkBackground font-bold">
            BESTSELLER PRODUCTS
          </h3>
          <p className="text-xs text-textColor1">
            Problems trying to resolve the conflict between{" "}
          </p>
        </div>

        <div className="w-full  h-auto lg:h-[500px] flex justify-between flex-wrap gap-y-4">
          <div className="w-full h-auto md:w-[480px] md:h-[500px] relative">
            <Image
              width={480}
              height={100}
              src="/Images/shop-card1.png"
              alt=""
              className=" w-full "
            />
            <h5 className="absolute bottom-16 left-16 bg-white px-10 font-bold py-3">
              Men
            </h5>
          </div>
          <div className="w-full h-auto  md:w-[230px] md:h-[500px] relative">
            <Image
              width={480}
              height={100}
              src="/Images/shop-card2.png"
              alt=""
              className=" w-full "
            />
            <h5 className="absolute bottom-16 left-16 bg-white px-10 font-bold py-3">
              Women
            </h5>
          </div>
          <div className="w-full h-auto lg:w-[225px] lg:h-[480px] gap-y-4 flex flex-col flex-wrap justify-between">
            <div className="w-full h-auto lg:h-[232px] relative">
              <Image
                width={480}
                height={100}
                src="/Images/shop-card3.png"
                alt=""
                className=" w-full h-auto"
              />
              <h5 className="absolute bottom-5 left-4 bg-white px-6 font-bold py-3">
                ACCESSORIES
              </h5>
            </div>

            <div className="w-full h-auto lg:h-[232px] relative">
              <Image
                width={480}
                height={100}
                src="/Images/shop-card4.png"
                alt=""
                className=" w-full h-auto"
              />
              <h5 className="absolute bottom-5 left-7 bg-white px-10 font-bold py-3">
                KIDS
              </h5>
            </div>
          </div>
        </div>
      </div> */}
    <div className="w-full max-w-screen-lg h-auto lg:h-[770px] bg-[#fafafa] mx-auto flex flex-col justify-evenly items-center max-sm:p-5 max-lg:gap-y-6 max-lg:py-5">
  <div className="w-full h-auto text-center md:w-[607px] md:h-[62px] space-y-2">
    <h4 className="text-sm text-textColor1">Featured Products</h4>
    <h3 className="text-lg text-darkBackground font-bold">
      BESTSELLER PRODUCTS
    </h3>
    <p className="text-xs text-textColor1">
      Problems trying to resolve the conflict between{" "}
    </p>
  </div>

  <div className="w-full h-auto lg:h-[500px] flex justify-between flex-wrap gap-y-4">
    <div className="w-full h-auto md:w-[480px] md:h-[500px] relative">
      <Image
        width={480}
        height={500}
        src="/Images/shop-card1.png"
        alt=""
        className="w-full h-full object-cover"
      />
      <h5 className="absolute bottom-16 left-16 bg-white px-10 font-bold py-3">
        Men
      </h5>
    </div>
    <div className="w-full h-auto md:w-[230px] md:h-[500px] relative">
      <Image
        width={230}
        height={500}
        src="/Images/shop-card2.png"
        alt=""
        className="w-full h-full object-cover"
      />
      <h5 className="absolute bottom-16 left-16 bg-white px-10 font-bold py-3">
        Women
      </h5>
    </div>
    <div className="w-full h-auto lg:w-[225px] lg:h-[480px] gap-y-4 flex flex-col flex-wrap justify-between">
      <div className="w-full h-auto lg:h-[232px] relative">
        <Image
          width={225}
          height={232}
          src="/Images/shop-card3.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <h5 className="absolute bottom-5 left-4 bg-white px-6 font-bold py-3">
          ACCESSORIES
        </h5>
      </div>

      <div className="w-full h-auto lg:h-[232px] relative">
        <Image
          width={225}
          height={232}
          src="/Images/shop-card4.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <h5 className="absolute bottom-5 left-7 bg-white px-10 font-bold py-3">
          KIDS
        </h5>
      </div>
    </div>
  </div>
</div>


    </>
  );
};

export default ShopCards;
