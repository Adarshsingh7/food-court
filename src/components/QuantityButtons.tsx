import { Button, IconButton, SmallButton } from "./Button";
import AddIcon from "@mui/icons-material/AddCircle";
import RemoveIcon from "@mui/icons-material/RemoveCircle";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store";
import { addItemToCart, removeItemFromCart } from "../slice/cartSlice.ts";
import { getCurrentQuantity } from "../slice/productSlice.ts";

interface QuantityButtonProps {
  quantity: number;
  itemId: number;
}

const QuantityButton: FC<QuantityButtonProps> = function ({
  quantity,
  itemId,
}) {
  const currentProductCount = useSelector(getCurrentQuantity(itemId));
  const dispatch: AppDispatch = useDispatch();

  function handleQuantityChange(amount: number) {
    if (amount === 1) {
      dispatch(addItemToCart(itemId));
    }
    if (amount === -1) {
      dispatch(removeItemFromCart(itemId));
    }
  }

  return (
    <div className="flex items-end rounded-lg py-1">
      {quantity > 0 && (
        <IconButton onClick={() => handleQuantityChange(-1)}>
          <RemoveIcon fontSize="medium" />
        </IconButton>
      )}
      {quantity === 0 ? (
        <SmallButton onClick={() => handleQuantityChange(1)} color="#8BC34A">
          Add to cart
        </SmallButton>
      ) : (
        <>
          <input
            type="number"
            value={quantity}
            readOnly
            className="w-8 text-center bg-transparent outline-none"
          />
          <IconButton
            onClick={() => handleQuantityChange(1)}
            disabled={currentProductCount === 0}
          >
            <AddIcon fontSize="medium" />
          </IconButton>
        </>
      )}
    </div>
  );
};

export default QuantityButton;
