import React from "react";
import TeamCardProp from "./team-card-prop";

const TeamImage = [
  "/Images/user-1.jpg",
  "/Images/user-2.jpg",
  "/Images/user-3.jpg",
];

const MeetTeam = () => {
  return (
    <>
      <div className="w-full max-lg:p-9 h-auto lg:w-[1050px] lg:h-[819px]  mx-auto flex flex-col justify-evenly items-center">
        <div className="w-full h-auto md:w-[607px] md:h-[100px]  text-center">
          <h2 className="text-[40px] font-bold text-darkBackground">
            Meet Our Team
          </h2>
          <p className="text-sm max-sm:px-8 md:w-[469px] mx-auto mb-4">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <div className="w-full lg:w-[1034px] lg:h-[383px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TeamImage.map((img, index) => {
            return (
              <div key={index} className="w-full lg:w-[316px] h-full">
                <TeamCardProp img={img} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MeetTeam;
