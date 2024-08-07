import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cartState, itemType } from "../types/cartType";

const initialState: cartState = {
  items: [],
  amount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<itemType>) {
      const newItem = action.payload;
      newItem.quantity = newItem.quantity || 1;
      newItem.totalPrice = newItem.price * newItem.quantity;
      state.items.push(newItem);
    },
  },
});

export const { addItem } = cartSlice.actions;
