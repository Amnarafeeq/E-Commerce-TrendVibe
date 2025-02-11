import React from "react";
import { productType } from "../../constants";
import { Repeat } from "lucide-react";
interface Props {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}

const HomeTabBar = ({ selectedTab, onTabSelect }: Props) => {
  return (
    <div className="flex items-center gap-1.5 text-sm font-semibold ">
      <div className="flex items-center justify-center flex-wrap gap-1.5">
        {productType.map((item) => (
          <button
            key={item.title}
            onClick={() => onTabSelect(item.title)}
            className={`border border-darkBackground  px-4 py-1.5 md:px-6 md:my-2 rounded-full hover:bg-darkBackground hover:text-textColor2 hoverEffect ${selectedTab == item.title && "bg-darkBackground text-textColor2"}`}
          >
            {item.title}
          </button>
        ))}
      </div>
      <button className="hidden sm:block">
        <Repeat />
      </button>
    </div>
  );
};

export default HomeTabBar;
