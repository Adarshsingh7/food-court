import { FC } from "react";
import QuantityButton from "./QuantityButtons";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Badge } from "@mui/material";
import { MenuItem } from "../types/menuType";
import { totalAddedQuantity } from "../slice/cartSlice";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
        : "error";

  return (
    <Badge
      badgeContent={badgeContent}
      color={badgeColor}
      sx={{
        width: "100%",
        "& .MuiBadge-badge": {
          fontSize: { xs: "0.65rem", sm: "0.75rem" },
          fontWeight: "bold",
          padding: { xs: "0 4px", sm: "0 8px" },
        },
      }}
    >
      <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative aspect-[4/3] overflow-hidden">
          <LazyLoadImage
            className="absolute inset-0 w-full h-full object-cover"
            src={item.image}
            effect="opacity"
            placeholderSrc={item.name}
            alt={item.name}
          />
        </div>

        <div className="p-3 sm:p-4">
          <h3 className="text-sm sm:text-base font-medium text-gray-900 line-clamp-1">
            {item.name}
          </h3>

          <p className="mt-1 text-xs sm:text-sm text-gray-500 line-clamp-2">
            {item.description}
          </p>

          <div className="mt-3 flex items-center justify-between">
            <p className="text-base sm:text-lg font-semibold text-gray-900">
              ₹{item.price}
            </p>

            <div>
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
      </div>
    </Badge>
  );
};

export default ProductList;
