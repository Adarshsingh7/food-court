/** @format */

import { FC } from "react";
import { itemType } from "../types/cartType";
import { useSelector } from "react-redux";
import { RootState } from "../store.ts";
import QuantityButton from "./QuantityButtons.tsx";

interface ProductCardProps {
  item: itemType;
}

const ProductCard: FC<ProductCardProps> = function ({ item }) {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartItem = cartItems.find((cartItem) => cartItem.itemId === item.id);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="h-40 object-cover md:h-56 w-full lg:h-64"
        src={item.src}
        alt={item.productName}
      />
      <div className="sm:px-6 py-4 flex flex-col gap-2 text-gray-700">
        <div className="font-bold md:text-xl text-sm capitalize">
          {item.productName}
        </div>
        <span>
          <div className="flex justify-between items-start">
            <p className="md:text-xl text-sm font-bold">
              {item.discount ? (
                <>
                  <span className="line-through sm:text-sm text:xs text-gray-500 mx-1">
                    ₹{item.price}
                  </span>
                  <span>
                    ₹{item.price - (item.price * item.discount) / 100} /
                    <span className="text-xs sm:text-sm font-medium">
                      {item.unit}
                    </span>
                  </span>
                </>
              ) : (
                <span className="sm:text-md text:sm text-gray-500 mx-1">
                  ₹{item.price}
                </span>
              )}
            </p>
            {cartItem ? (
              <QuantityButton quantity={cartItem.quantity} itemId={item.id} />
            ) : (
              <QuantityButton quantity={0} itemId={item.id} />
            )}
          </div>
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
