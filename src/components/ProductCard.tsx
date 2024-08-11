/** @format */

import { FC, useEffect, useState } from "react";
import { itemType } from "../types/cartType";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../slice/cartSlice.ts";
import { AppDispatch, RootState } from "../store.ts";
import QuantityButton from "./QuantityButtons.tsx";

interface ProductCardProps {
  item: itemType;
}

const ProductCard: FC<ProductCardProps> = function ({ item }) {
  const [quantity, setQuantity] = useState(0);
  const dispatch: AppDispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleQuantityChange = (amount: number) => {
    setQuantity((prevQuantity) => Math.max(0, prevQuantity + amount));
    if (amount === 1) {
      dispatch(addItemToCart(item.id));
    } else if (amount === -1) {
      dispatch(removeItemFromCart(item.id));
    }
  };

  useEffect(() => {
    const cartItem = cartItems.find((cartItem) => cartItem.itemId === item.id);
    if (!cartItem) setQuantity(0);
    if (cartItem) {
      setQuantity(cartItem.quantity);
    }
  }, [cartItems, item.id]);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="h-40 object-cover md:h-56 w-full lg:h-64"
        // src="https://images.herzindagi.info/image/2021/Sep/chaii-samosa.jpg"
        src={item.src}
        alt={item.productName}
      />
      <div className="sm:px-6 py-4 flex flex-col gap-2 text-gray-700">
        <div className="font-bold md:text-xl text-sm capitalize">
          {item.productName}
        </div>
        {/* <p className="text-gray-700 text-base line-clamp-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p> */}
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
            <QuantityButton
              quantity={quantity}
              handleQuantityChange={handleQuantityChange}
            />
            {/* <Button>Add</Button> */}
          </div>
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
