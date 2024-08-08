import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartType, CartItemType } from "../types/cartType";

const initialState: CartType = {
  items: [],
  amount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<CartItemType>) {
      state.items.push(action.payload);
      state.amount += action.payload.item.price * action.payload.quantity;
    },
  },
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
