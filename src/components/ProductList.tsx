/** @format */

import { FC, useState } from "react";
import QuantityButton from "./QuantityButtons";
import { itemType } from "../types/cartType";
import { addItemToCart, removeItemFromCart } from "../slice/cartSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";

interface ProductListProps {
  item: itemType;
}

const ProductList: FC<ProductListProps> = ({ item }) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch: AppDispatch = useDispatch();

  const handleQuantityChange = (amount: number) => {
    setQuantity((prevQuantity) => Math.max(0, prevQuantity + amount));
    if (amount === 1) {
      dispatch(addItemToCart(item.id));
    } else if (amount === -1) {
      dispatch(removeItemFromCart(item.id));
    }
  };
  return (
    <div className={`flex flex-col p-4 rounded-lg shadow-md bg-white `}>
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
          <QuantityButton
            quantity={quantity}
            handleQuantityChange={handleQuantityChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
