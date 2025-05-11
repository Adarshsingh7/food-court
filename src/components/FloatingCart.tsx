import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShoppingBag, ChevronUp, ChevronDown } from "lucide-react";

import { RootState, AppDispatch } from "../store.ts";
// import { CartItemType } from "../types/cartType.ts";
import QuantityButton from "./QuantityButtons.tsx";
import { removeItem } from "../slice/cartSlice.ts";
import { useNavigate } from "react-router-dom";

const FloatingCartTab = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const cart = useSelector((state: RootState) => state.cart.items);
  const totalAmount = useSelector((state: RootState) => state.cart.amount);
  const dispatch: AppDispatch = useDispatch();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const navigate = useNavigate();

  // Show the tab only if there are items in the cart
  useEffect(() => {
    if (cart.length === 0) {
      setIsExpanded(false);
    }
  }, [cart.length]);

  const toggleExpand = () => {
    setIsAnimating(true);
    setIsExpanded(!isExpanded);
    setTimeout(() => setIsAnimating(false), 300);
  };

  // const handleViewFullCart = () => {
  //   setIsExpanded(false);
  //   setOpen(true);
  // };

  const handleCheckout = () => {
    setIsExpanded(false);
    // Navigate to order page - you would implement navigation in your app
    // window.location.href = "order";
    navigate("order");
  };

  const handleRemoveItemFromCart = (itemId: number) => {
    dispatch(removeItem(itemId));
  };

  if (cart.length === 0) return null;

  return (
    <div className="fixed bottom-4 left-0 right-0 mx-auto w-full max-w-md px-4 z-50">
      <div
        className={`bg-indigo-600 text-white rounded-lg shadow-lg transform transition-all duration-300 ${
          isAnimating ? "scale-105" : "scale-100"
        }`}
      >
        {/* Collapsed view */}
        <div
          className="flex items-center justify-between p-4 cursor-pointer"
          onClick={toggleExpand}
        >
          <div className="flex items-center space-x-3">
            <div className="relative">
              <ShoppingBag size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </div>
            <span className="font-medium">Your Cart</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="font-bold">₹{totalAmount.toFixed(2)}</span>
            {isExpanded ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
          </div>
        </div>

        {/* Expanded view */}
        {isExpanded && (
          <div className="border-t border-indigo-500 p-4 animate-fadeIn">
            <div className="max-h-64 overflow-y-auto mb-4">
              {cart.length > 0 ? (
                cart.map((cartItem, idx) => (
                  <li
                    key={idx}
                    className="flex py-3 border-b border-indigo-500 last:border-0"
                  >
                    {/* Cart item image */}
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-indigo-300">
                      <img
                        alt={cartItem.item.name}
                        src={cartItem.item.image}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    {/* Cart item details */}
                    <div className="ml-3 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-white">
                          <h3>
                            <p>
                              <span className="line-clamp-1 capitalize">
                                {cartItem.item.name}
                              </span>{" "}
                              X {cartItem.quantity}
                            </p>
                          </h3>
                          <p className="ml-4">
                            ₹{cartItem.item.price * cartItem.quantity}
                          </p>
                        </div>
                      </div>

                      {/* Quantity controls - using your existing QuantityButton component */}
                      <div>
                        <div className="flex justify-between text-base font-medium text-indigo-200">
                          <h3>
                            <p>CHANGE</p>
                          </h3>
                          <QuantityButton
                            quantity={cartItem.quantity}
                            itemId={cartItem.itemId}
                          />
                        </div>
                      </div>

                      {/* Remove button */}
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-indigo-200">
                          Qty {cartItem.quantity}
                        </p>
                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-indigo-200 hover:text-white"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRemoveItemFromCart(cartItem.item.itemId);
                            }}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <div className="text-center py-4 text-indigo-200">
                  Your cart is empty
                </div>
              )}
            </div>

            {/* Subtotal section */}
            <div className="flex justify-between items-center font-bold text-lg border-t border-indigo-500 pt-4 mb-4">
              <p>Subtotal</p>
              <p>₹{totalAmount.toFixed(2)}</p>
            </div>

            <p className="mt-0.5 text-sm text-indigo-200 mb-4">
              Shipping and taxes calculated at checkout.
            </p>

            {/* Action buttons */}
            <div className="space-y-3">
              <button
                onClick={handleCheckout}
                className="w-full bg-white text-indigo-600 font-medium py-3 rounded-md hover:bg-indigo-50 transition-colors text-center"
              >
                Checkout
              </button>

              <div className="mt-3 flex justify-center text-center text-sm text-indigo-200">
                <p>
                  or{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setIsExpanded(false);
                    }}
                    className="font-medium text-indigo-200 hover:text-white"
                  >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingCartTab;
