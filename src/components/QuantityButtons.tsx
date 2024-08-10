import { IconButton } from "./Button";
import AddIcon from "@mui/icons-material/AddCircle";
import RemoveIcon from "@mui/icons-material/RemoveCircle";
import { FC } from "react";

interface QuantityButtonProps {
  quantity: number;
  handleQuantityChange: (value: number) => void;
}

const QuantityButton: FC<QuantityButtonProps> = function ({
  quantity,
  handleQuantityChange,
}) {
  return (
    <div className="flex items-center rounded-lg py-1">
      {quantity > 0 && (
        <IconButton onClick={() => handleQuantityChange(-1)}>
          <RemoveIcon fontSize="medium" />
        </IconButton>
      )}
      <input
        type="number"
        value={quantity}
        readOnly
        className="w-8 text-center bg-transparent outline-none"
      />
      <IconButton onClick={() => handleQuantityChange(1)}>
        <AddIcon fontSize="medium" />
      </IconButton>
    </div>
  );
};

export default QuantityButton;
