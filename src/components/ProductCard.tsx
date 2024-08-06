/** @format */

import { FC, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Button from "./Button";

const ProductCard: FC = function () {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (amount: number) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-auto">
      <img
        className="w-full"
        src="https://images.herzindagi.info/image/2021/Sep/chaii-samosa.jpg"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4 flex flex-col gap-4">
        <div className="font-bold text-xl underline">Hot Fresh Samosa</div>
        <p className="text-gray-700 text-base line-clamp-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
        <span>
          <div className="flex items-center justify-between p-2">
            <p className="text-2xl font-bold">₹50</p>
            <div className={`flex items-center rounded-lg px-3 py-1 `}>
              <button
                className={`text-gray-700 dark:text-gray-400 focus:outline-none`}
                onClick={() => handleQuantityChange(-1)}
              >
                <RemoveCircleIcon />
              </button>
              <input
                type="number"
                value={quantity}
                readOnly
                className="w-12 mx-2 text-center bg-transparent outline-none"
              />
              <button
                className={`text-gray-700 dark:text-gray-400 focus:outline-none`}
                onClick={() => handleQuantityChange(1)}
              >
                <AddCircleIcon />
              </button>
            </div>
            <Button>Add</Button>
          </div>
        </span>
      </div>
      {/* <div className='px-6 pt-4 pb-2'>
				<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
					#photography
				</span>
				<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
					#travel
				</span>
				<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
					#winter
				</span>
			</div> */}
    </div>
  );
};

export default ProductCard;
