"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CATEGORIES_QUERYResult } from "../../sanity.types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const HeaderMenu = ({ categories }: { categories: CATEGORIES_QUERYResult }) => {
  const pathname = usePathname();
  return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-5 text-sm capitalize font-semibold">
      <Link
        className={`text-textColor1 hover:text-darkBackground hoverEffect relative group ${pathname === "/" && "text-darkBackground"}  `}
        href="/"
      >
        Home
        <span
          className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-darkBackground hoverEffect group-hover:w-1/2 group-hover:left-0 ${pathname === "/" && "w-1/2"}`}
        />
        <span
          className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-darkBackground hoverEffect group-hover:w-1/2 group-hover:right-0 ${pathname === "/" && "w-1/2"}`}
        />
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger className="text-textColor1 border-none focus:outline-none hover:text-darkBackground hoverEffect relative group flex items-center">
          Shop
          <span
            className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-darkBackground hoverEffect group-hover:w-1/2 group-hover:left-0 `}
          />
          <span
            className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-darkBackground hoverEffect group-hover:w-1/2 group-hover:right-0 `}
          />
          <ChevronDown className="ml-1 hover:rotate-180" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white  min-w-40  ">
          {categories.map((category, index) => (
            <DropdownMenuItem key={index} asChild>
              <Link
                href={`/category/${category.slug?.current}`}
                className={`text-textColor1 hoverEffect hover:bg-darkBackground hover:text-textColor2 relative group ${pathname === `/category/${category.slug?.current}` && "text-darkBackground"}  `}
              >
                {category.title}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <Link
        className={`text-textColor1 hover:text-darkBackground hoverEffect relative group ${pathname === "/about" && "text-darkBackground"}  `}
        href="/about"
      >
        About
        <span
          className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-darkBackground hoverEffect group-hover:w-1/2 group-hover:left-0 ${pathname === "/about" && "w-1/2"}`}
        />
        <span
          className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-darkBackground hoverEffect group-hover:w-1/2 group-hover:right-0 ${pathname === "/about" && "w-1/2"}`}
        />
      </Link>
      <Link
        className={`text-textColor1 hover:text-darkBackground hoverEffect relative group ${pathname === "/contact" && "text-darkBackground"}  `}
        href="/contact"
      >
        Contact
        <span
          className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-darkBackground hoverEffect group-hover:w-1/2 group-hover:left-0 ${pathname === "/contact" && "w-1/2"}`}
        />
        <span
          className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-darkBackground hoverEffect group-hover:w-1/2 group-hover:right-0 ${pathname === "/contact" && "w-1/2"}`}
        />
      </Link>
      <Link
        className={`text-textColor1 hover:text-darkBackground hoverEffect relative group ${pathname === "/pricing" && "text-darkBackground"}  `}
        href="/pricing"
      >
        Pricing
        <span
          className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-darkBackground hoverEffect group-hover:w-1/2 group-hover:left-0 ${pathname === "/pricing" && "w-1/2"}`}
        />
        <span
          className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-darkBackground hoverEffect group-hover:w-1/2 group-hover:right-0 ${pathname === "/pricing" && "w-1/2"}`}
        />
      </Link>
    </div>
  );
};

export default HeaderMenu;
