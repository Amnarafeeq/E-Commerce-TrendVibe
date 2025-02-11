"use client";
import { Loader2, Search, X } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { client } from "@/sanity/lib/client";
import { Product } from "../../sanity.types";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import PriceView from "./PriceView";
import AddToCartButton from "./AddToCartButton";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const fetchProducts = useCallback(async () => {
    if (!search) {
      setProducts([]);
      return;
    }
    setLoading(true);
    try {
      const query = `*[_type == "product" && name match $search] | order(name asc)`;
      const params = { search: `${search}*` };
      const response = await client.fetch(query, params);
      setProducts(response);
    } catch (e) {
      console.log("Error fetching products ", e);
    } finally {
      setLoading(false);
    }
  }, [search]);
  useEffect(() => {
    const debounce = setTimeout(() => {
      fetchProducts();
    }, 300);
    return () => clearTimeout(debounce);
  }, [search, fetchProducts]);
  return (
    <Dialog open={showSearch} onOpenChange={() => setShowSearch(!showSearch)}>
      <DialogTrigger onClick={() => setShowSearch(!showSearch)}>
        <Search className="w-5 sm:w-6 text-textColor2 hover:text-darkBackground hoverEffect" />
      </DialogTrigger>
      <DialogContent className="max-w-5xl min-h-[90vh]  max-h-[90vh] bg-white flex flex-col overflow-hidden">
        <DialogHeader>
          <DialogTitle className="mb-1">Product Searchbar</DialogTitle>
          <form className="relative" onSubmit={(e) => e.preventDefault()}>
            <Input
              placeholder="Search your product here.. "
              className="flex-1 rounded-md py-5"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <X
                onClick={() => setSearch("")}
                className="w-4 h-4 absolute top-3 right-11 hover:text-red-600 hoverEffect"
              />
            )}
            <button
              type="submit"
              className={`absolute right-0 top-0 text-textColor2 bg-darkBackground w-10 h-full flex items-center justify-center rounded-tr-md rounded-br-md hover:bg-darkBackground hover:text-textColor1 hoverEffect ${search ? "bg-darkBackground text-white" : "bg-darkBackground text-textColor2"}`}
              onClick={() => setLoading(true)}
            >
              <Search className="w-5 h-5" />
            </button>
          </form>
        </DialogHeader>
        <div className="w-full h-full overflow-y-scroll border border-darkBackground rounded-md">
          {loading ? (
            <p className="flex items-center px-6 py-10 gap-1 text-center text-yellow-600">
              <Loader2 className="w-5 h-5 animate-spin" /> Searching on progress
            </p>
          ) : products.length ? (
            products.map((product: Product) => (
              <div
                key={product._id}
                className="bg-white overflow-hidden border-b last:border-b-0 "
              >
                <div className="flex items-center p-1">
                  <Link
                    href={`/product/${product.slug?.current}`}
                    className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 border border-darkBackground rounded-md overflow-hidden group"
                    onClick={() => setShowSearch(false)}
                  >
                    {product.images && (
                      <Image
                        width={200}
                        height={200}
                        src={urlFor(product.images[0]).url()}
                        alt="product image"
                        className="object-cover w-full h-full group-hover:scale-110 hoverEffect"
                      />
                    )}
                  </Link>
                  <div className="px-4 py-2 flex-grow">
                    <Link
                      href={`/product/${product.slug?.current}`}
                      onClick={() => setShowSearch(false)}
                      className="cursor-pointer"
                    >
                      <h3 className="text-sm md:text-lg font-semibold text-darkBackground line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-sm text-textColor1 line-clamp-1">
                        {product.intro}
                      </p>
                    </Link>
                    <PriceView
                      price={product.price}
                      discount={product.discount}
                      className="md:text-lg"
                    />
                  </div>
                  <div className="w-60 mt-1">
                    <AddToCartButton product={product} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10 font-semibold tracking-wide">
              {search ? (
                <p>
                  Nothing match with the keyword{" "}
                  <span className="text-red-500 underline">{search}</span>.
                  Please try something else.{" "}
                </p>
              ) : (
                <p className="text-green-600 flex items-center justify-center gap-1">
                  <Search className="w-5 h-5" /> Search and explore your
                  products from TrendVibe{" "}
                </p>
              )}{" "}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchBar;
