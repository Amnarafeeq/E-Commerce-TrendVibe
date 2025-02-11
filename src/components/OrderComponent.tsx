"use client";
import React, { useState } from "react";
import { MY_ORDERS_QUERYResult } from "../../sanity.types";
import { TableBody, TableCell, TableRow } from "./ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { format } from "date-fns";
import PriceFormatter from "./PriceFormatter";
import OrderDetailsDialog from "./OrderDetailsDialog";

const OrderComponent = ({ orders }: { orders: MY_ORDERS_QUERYResult }) => {
  const [selectedOrder, setSelectedOrder] = useState<
    MY_ORDERS_QUERYResult[number] | null
  >(null);
  return (
    <>
      <TableBody>
        <TooltipProvider>
          {orders.map((order) => (
            <Tooltip key={order.orderNumber}>
              <TooltipTrigger asChild>
                <TableRow
                  className="cursor-pointer hover:bg-gray-100 h-12 "
                  onClick={() => setSelectedOrder(order)}
                >
                  <TableCell className="font-medium">
                    {order.orderNumber?.slice(-10) ?? "N/A"}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {order.orderDate &&
                      format(new Date(order.orderDate), "dd/MM/yyyy")}
                  </TableCell>
                  <TableCell>{order.customerName}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {order.email}
                  </TableCell>
                  <TableCell className="font-medium ">
                    <PriceFormatter amount={order.totalPrice} />
                  </TableCell>
                  <TableCell>
                    {order.status && (
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${order.status === "paid" ? "bg-green-100 text-green-800 " : "bg-yellow-100 text-yellow-800"}`}
                      >
                        {order.status}
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {order.invoice && (
                      <p>{order.invoice ? order.invoice.number : "---"}</p>
                    )}
                  </TableCell>
                </TableRow>
              </TooltipTrigger>
              <TooltipContent className="bg-darkBackground text-textColor2 font-semibold rounded-xl px-3 py-2">
                Click to see order details
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </TableBody>
      <OrderDetailsDialog
        order={selectedOrder}
        isOpen={!!selectedOrder}
        onClose={() => setSelectedOrder(null)}
      />
    </>
  );
};

export default OrderComponent;
