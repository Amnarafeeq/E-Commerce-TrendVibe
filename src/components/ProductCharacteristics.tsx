import React from "react";
import { Product } from "../../sanity.types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const ProductCharacteristics = ({ product }: { product: Product }) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>{product.name}:Characteristics</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-1">
          <p className="flex justify-between items-center">
            Brand: <span>Unknown</span>
          </p>
          <p className="flex justify-between items-center">
            Collection: <span>2024</span>
          </p>
          <p className="flex justify-between items-center">
            Type: <span>{product.variant}</span>
          </p>
          <p className="flex justify-between items-center">
            Stock: <span>{product.stock ? product.stock : "Out of Stock"}</span>
          </p>
          <p className="flex justify-between items-center">
            Variant:{" "}
            <span className=" max-sm:line-clamp-1">{product.intro}</span>
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductCharacteristics;
