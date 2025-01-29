import React from "react";
import FeaturedPostsProp from "./FeaturedPostProp";

const featuredPosts = [
  { id: 1, img: "/Images/f-post1.png" },
  { id: 2, img: "/Images/f-post2.png" },
  { id: 3, img: "/Images/f-post3.png" },
];
const FeaturedPosts = () => {
  return (
    <div className="w-full h-auto lg:w-[1050px]  lg:h-[1044px]  flex flex-col justify-evenly mx-auto max-lg:p-6 ">
      <div className="w-full h-auto  lg:w-[692px] lg:h-[134px] mx-auto  text-center flex flex-col justify-between ">
        <h4 className="text-sm text-textColor2">Practice Advice</h4>
        <h3 className="text-[40px] text-darkBackground font-bold">
          Featured Posts
        </h3>
        <p className="text-sm text-textColor1 w-[463px] mx-auto max-md:w-auto">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>

      <div className="w-full h-auto  lg:h-[606px]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4 rounded-[5px] px-2 mt-5">
        {featuredPosts.map((post) => (
          <div key={post.id} className="w-full hover:scale-95 transition duration-300 hover:cursor-pointer lg:w-[328px] h-full  shadow-lg ">
            <FeaturedPostsProp img={post.img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
