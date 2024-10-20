/** @format */

import { FC } from "react";
import QuantityButton from "./QuantityButtons";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Badge } from "@mui/material";
import { MenuItem } from "../types/menuType";
import { totalAddedQuantity } from "../slice/cartSlice";

interface ProductListProps {
  item: MenuItem;
}

const ProductList: FC<ProductListProps> = function ({ item }) {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartItem = cartItems.find(
    (cartItem) => cartItem.itemId === item.itemId,
  );
  const totalItemQuantity =
    item.stock - useSelector(totalAddedQuantity(cartItem?.itemId || 0));

  const badgeContent =
    totalItemQuantity > 10
      ? ""
      : totalItemQuantity > 5
        ? "FEW LEFT"
        : totalItemQuantity === 0
          ? "OUT OF STOCK"
          : `${totalItemQuantity} LEFT`;

  const badgeColor =
    totalItemQuantity > 10
      ? "default"
      : totalItemQuantity > 5
        ? "warning"
        : `error`;

  return (
    <Badge
      badgeContent={badgeContent}
      color={badgeColor}
      // sx={{ color: '000' }}
    >
      <div className="max-w-sm overflow-hidden rounded shadow-lg">
        <img
          // className='w-full'
          className="h-[200px] w-[300px] rounded object-cover "
          src={item.image}
          alt={item.name}
        />
        <div className="px-6 py-4">
          <div className="mb-2 md:text-base line-clamp-1 text-sm font-bold capitalize">
            {item.name}
          </div>
          <p className="md:text-md text-xs line-clamp-2 text-gray-700">
            {item.description}
          </p>
          {/* <ButtonMinimal>Outlined</ButtonMinimal> */}
          <div className="flex justify-between w-full">
            <div className="mt-6">
              <span className="ml-2 text-sm font-semibold text-gray-800 sm:text-base md:text-lg lg:text-xl">
                ₹{item.price}
              </span>
            </div>
            {cartItem ? (
              <QuantityButton
                quantity={cartItem.quantity}
                itemId={item.itemId}
              />
            ) : (
              <QuantityButton quantity={0} itemId={item.itemId} />
            )}
          </div>
        </div>
      </div>
    </Badge>
  );
};

export default ProductList;
