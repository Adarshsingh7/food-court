/** @format */

import { FC, useState } from "react";
import AddIcon from '@mui/icons-material/AddCircle';
import RemoveIcon from "@mui/icons-material/RemoveCircle";
import { IconButton } from "./Button";

const ProductCard: FC = function () {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (amount: number) => {
    setQuantity((prevQuantity) => Math.max(0, prevQuantity + amount));
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="h-40 object-cover md:h-56 w-full lg:h-64"
        // src="https://images.herzindagi.info/image/2021/Sep/chaii-samosa.jpg"
        src='/idli.jpg'
        alt="Hot Fresh Samosa"
      />
      <div className="sm:px-6 px-2 py-4 flex flex-col gap-2 text-gray-700">
        <div className="font-bold md:text-xl text-sm">Hot Fresh Samosa</div>
        {/* <p className="text-gray-700 text-base line-clamp-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p> */}
        <span>
          <div className="flex items-center justify-between p-2">
            <p className="md:text-xl text-sm font-bold">
              <span>₹40</span>
              <span className="line-through sm:text-sm text:xs text-gray-500 mx-1">₹50</span>
            </p>
            <div className="flex items-center rounded-lg px-3 py-1">
              {quantity > 0 && <IconButton onClick={() => handleQuantityChange(-1)}>
                <RemoveIcon fontSize="medium" />
              </IconButton>}
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
            {/* <Button>Add</Button> */}
          </div>
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
