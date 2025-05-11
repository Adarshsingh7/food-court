/** @format */
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store";
import {
  addItemToCart,
  removeItemFromCart,
  totalAddedQuantity,
} from "../slice/cartSlice.ts";
import { useMenu } from "../features/menuFeatures/useMenu.ts";

interface QuantityButtonProps {
  quantity: number;
  itemId: number;
}

const QuantityButton: FC<QuantityButtonProps> = function ({
  quantity,
  itemId,
}) {
  const { data } = useMenu();
  const dispatch: AppDispatch = useDispatch();
  const currentProductCount = useSelector(totalAddedQuantity(itemId));
  const menuItemQuantity =
    data?.find((item) => item.itemId === itemId)?.stock || 0;
  const inStock = menuItemQuantity - currentProductCount;
  const product = data?.find((item) => item.itemId === itemId);

  function handleQuantityChange(amount: number) {
    if (!product) return;
    if (amount === 1) {
      dispatch(addItemToCart(itemId, product));
    }
    if (amount === -1) {
      dispatch(removeItemFromCart(itemId));
    }
  }

  // Modern circular design while keeping original functionality
  return (
    <div className="flex items-center justify-end">
      {quantity > 0 ? (
        <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">
          <button
            onClick={() => handleQuantityChange(-1)}
            className="w-7 h-7 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600"
          >
            <span className="text-sm font-bold">-</span>
          </button>

          {/* <input
            type="number"
            value={quantity}
            readOnly
            className="w-7 text-center text-sm font-medium bg-transparent outline-none"
          /> */}
          <span className="w-7 text-center text-sm font-medium bg-transparent outline-none">
            {quantity}
          </span>

          <button
            onClick={() => handleQuantityChange(1)}
            className={`w-7 h-7 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 ${!inStock ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={!inStock}
          >
            <span className="text-sm font-bold">+</span>
          </button>
        </div>
      ) : (
        <button
          onClick={() => handleQuantityChange(1)}
          className="px-3 py-1.5 text-xs font-medium text-white bg-[#8BC34A] rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1"
        >
          Add to cart
        </button>
      )}
    </div>
  );
};

export default QuantityButton;
