"use client";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import useCartStore from "../../store";

const CartIcon = () => {
  const { items } = useCartStore();
  return (
    <Link href="/cart" className="group relative">
      <ShoppingCartIcon className="w-6 sm:w-8 h-6 text-textColor2 group-hover:text-darkBackground hoverEffect" />
      <span className="absolute -top-1 left-3 sm:left-5  bg-darkBackground text-textColor2 h-4 w-4 rounded-full text-xs font-semibold flex items-center justify-center">
        {items.length ? items.length : 0}
      </span>
    </Link>
  );
};

export default CartIcon;
