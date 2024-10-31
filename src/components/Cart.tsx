import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { AppDispatch, RootState } from "../store.ts";
import { CartItemType } from "../types/cartType.ts";
import QuantityButton from "./QuantityButtons.tsx";
import { removeItem } from "../slice/cartSlice.ts";
import { Link } from "react-router-dom";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

interface CartTotalProps {
  setOpen: (event: boolean) => void;
}

interface CartItemProps {
  cartItem: CartItemType;
  idx: number;
}

const Cart: FC<Props> = function ({ open, setOpen }) {
  const cart = useSelector((state: RootState) => state.cart.items);

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">
                      Shopping cart
                    </DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="-my-6 divide-y divide-gray-200"
                      >
                        {cart.length === 0 && (
                          <p className="text-gray-500">
                            Add some product first...
                          </p>
                        )}
                        {cart.map((cartItem, idx) => (
                          <CartItem key={idx} cartItem={cartItem} idx={idx} />
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <CartTotal setOpen={setOpen} />
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

const CartItem: FC<CartItemProps> = function ({ cartItem }) {
  const item = cartItem.item;
  const dispatch: AppDispatch = useDispatch();

  const handleRemoveItemFromCart = function () {
    dispatch(removeItem(item.itemId));
  };

  useEffect(() => {
    if (cartItem.quantity <= 0) {
      dispatch(removeItem(item.itemId));
    }
  }, [cartItem.quantity, dispatch, item.itemId]);

  return (
    <li key={item.itemId} className="flex py-6">
      {/*cart item me product ki image wala div*/}
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          alt={item.name}
          src={item.image}
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/*other portion of the cart containg the main content and the pricing of the div*/}
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-800">
            <h3>
              <p>
                <span className="line-clamp-1 capitalize">{item.name}</span> X{" "}
                {cartItem.quantity}
              </p>
            </h3>
            <p className="ml-4">₹{item.price * cartItem.quantity}</p>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-base font-medium text-gray-500">
            <h3>
              <p>CHANGE</p>
            </h3>
            <QuantityButton
              quantity={cartItem.quantity}
              itemId={cartItem.itemId}
            />
          </div>
        </div>

        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty {cartItem.quantity}</p>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={handleRemoveItemFromCart}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

const CartTotal: FC<CartTotalProps> = function ({ setOpen }) {
  const totalAmount = useSelector((state: RootState) => state.cart.amount);
  return (
    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
      <div className="flex justify-between text-base font-medium text-gray-900">
        <p>Subtotal</p>
        <p>₹{totalAmount.toFixed(2)}</p>
      </div>
      <p className="mt-0.5 text-sm text-gray-500">
        Shipping and taxes calculated at checkout.
      </p>
      <div className="mt-6">
        <Link
          to="/order"
          onClick={() => setOpen(false)}
          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
        >
          Checkout
        </Link>
      </div>
      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
        <p>
          or{" "}
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Continue Shopping
            <span aria-hidden="true"> &rarr;</span>
          </button>
        </p>
      </div>
    </div>
  );
};

export default Cart;
