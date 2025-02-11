"use client";
import { ShoppingCart } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const EmptyCart = () => {
  return (
    <div className="py-10 md:py-20 bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full space-y-8"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="w-48 h-48 mx-auto"
        >
          <Image
            src="/Images/EmptyCart.png"
            alt=""
            width={300}
            height={300}
            className="drop-shadow-lg object-contain"
          />
          <motion.div
            animate={{ x: [0, -10, 10, 0], y: [0, -5, 5, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="absolute -top-4 -right-4 bg-blue-500 rounded-full p-2"
          >
            <ShoppingCart size={24} className="text-white" />
          </motion.div>
        </motion.div>
        <div className="text-center space-y-4">
          <h3 className="text-3xl font-bold text-darkBackground">
            Your cart is feeling lonely
          </h3>
          <p className="text-textColor1">
            It look like you haven&apos;t added anything to your cart yet.
            let&apos;s change and find some amazing products for you!{" "}
          </p>
        </div>
        <Link
          href="/"
          className="block bg-darkBackground/10 border text-darkBackground border-textColor2/50 text-center py-2.5 rounded-full text-sm font-semibold tracking-wide hover:border-darkBackground hover:bg-darkBackground hover:text-textColor2 hoverEffect"
        >
          Discover Products
        </Link>
      </motion.div>
    </div>
  );
};

export default EmptyCart;
