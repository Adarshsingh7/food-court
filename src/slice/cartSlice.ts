import { createSlice, PayloadAction, ThunkAction } from "@reduxjs/toolkit";
import { CartType, CartItemType, itemType } from "../types/cartType";
import { RootState } from "../store.ts";

const initialState: CartType = {
  items: [],
  amount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItemType>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item) => item.itemId !== action.payload,
      );
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.itemId === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.itemId === action.payload);
      if (item) {
        item.quantity -= 1;
      }
    },
  },
});
export const addItemToCart = (
  itemId: number,
): ThunkAction<
  void,
  RootState,
  unknown,
  PayloadAction<CartItemType | number>
> => {
  return (dispatch, getState) => {
    const { cart, product } = getState();
    const existingItem = cart.items.find((item) => item.itemId === itemId);

    if (existingItem) {
      dispatch(cartSlice.actions.incrementQuantity(itemId));
      return;
    }
    const item = product.find(
      (productItem: itemType) => productItem.id === itemId,
    );
    if (item) {
      dispatch(cartSlice.actions.addItem({ item, itemId, quantity: 1 }));
    }
  };
};

export const removeItemFromCart = (
  itemId: number,
): ThunkAction<void, RootState, unknown, PayloadAction<number>> => {
  return function (dispatch, getState) {
    const { cart } = getState();
    const existingItem = cart.items.find((item) => item.itemId === itemId);
    if (existingItem) {
      dispatch(cartSlice.actions.decrementQuantity(itemId));
      return;
    }

    const isItemInCart = cart.items.find((item) => item.itemId === itemId);
    if (isItemInCart) {
      dispatch(cartSlice.actions.removeItem(itemId));
    }
  };
};

export default cartSlice.reducer;
