import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice.ts";
import productSlice from "./slice/productSlice.ts";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
