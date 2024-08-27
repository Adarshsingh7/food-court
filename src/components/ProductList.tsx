/** @format */

import { FC } from "react";
import QuantityButton from "./QuantityButtons";
import { itemType } from "../types/cartType";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { getCurrentQuantity } from "../slice/productSlice";

interface ProductListProps {
  item: itemType;
}

export const ProductList: FC<ProductListProps> = ({ item }) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartItem = cartItems.find((cartItem) => cartItem.itemId === item.id);

  return (
    <div className={`flex flex-col p-4 rounded-lg shadow-md bg-white`}>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0 text-gray-700">
          <img
            src={item.src}
            alt={item.productName}
            className="w-24 h-24 object-cover rounded-lg"
          />
          <div className="ml-4">
            <h3 className="text-lg font-semibold capitalize">
              {item.productName}
            </h3>
            <p
              className={`text-sm text-gray-700 dark:text-gray-400 lineClamp-1`}
            >
              {item.description}
            </p>
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
          </div>
        </div>
        <div className="flex items-center">
          {cartItem ? (
            <QuantityButton quantity={cartItem.quantity} itemId={item.id} />
          ) : (
            <QuantityButton quantity={0} itemId={item.id} />
          )}
        </div>
      </div>
    </div>
  );
};

const ProductList2: FC<ProductListProps> = function ({ item }) {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartItem = cartItems.find((cartItem) => cartItem.itemId === item.id);
  const currentPorductCount = useSelector(getCurrentQuantity(item.id))
  console.log(currentPorductCount)
  return (
    <div className="mb-1 flex rounded-lg border border-gray-200 bg-white p-2 shadow-md">
      <img
        src={item.src}
        alt={item.productName}
        className="h-full w-32 rounded object-cover md:w-1/3 lg:w-1/4"
      />
      <div className="ml-4 flex w-full flex-col justify-between">
        <div>
          <h3 className="text-sm font-semibold text-gray-800 sm:text-base md:text-lg lg:text-xl capitalize">
            {item.productName}
          </h3>
          <p className="text-[10px] text-gray-600 sm:text-xs md:text-base lg:text-lg">
            {item.description}
          </p>
        </div>
        <div className="mt-2 flex items-center">
          <div className="flex justify-between w-full">
            <div>
              <span className="rounded-full bg-yellow px-1 py-0.5 text-[8px] text-yellow-900 md:text-sm lg:text-base">
                {currentPorductCount === 0 ? 'SOLD OUT' : `${item.quantity} left`}
              </span>
              <span className="ml-2 text-sm font-semibold text-gray-800 sm:text-base md:text-lg lg:text-xl">
                ₹{item.price}
              </span>
            </div>
            {cartItem ? (
              <QuantityButton quantity={cartItem.quantity} itemId={item.id} />
            ) : (
              <QuantityButton quantity={0} itemId={item.id} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList2;
