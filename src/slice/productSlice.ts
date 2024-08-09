import { createSlice } from "@reduxjs/toolkit";
import { itemType } from "../types/cartType";

const foodItem: itemType[] = [
  {
    id: 1,
    productName: "south indian idly",
    price: 20,
    src: "/idli.jpg",
    description: "south indian idly",
    discount: 10,
    unit: "plate",
    productType: "food",
    tags: ["south indian", "breakfast"],
  },
  {
    id: 2,
    productName: "south indian dosa",
    price: 100,
    src: "/dosa.webp",
    description: "south indian dosa",
    discount: 10,
    unit: "piece",
    productType: "food",
    tags: ["south indian", "breakfast"],
  },
  {
    id: 3,
    productName: "fast food combo",
    price: 150,
    src: "/fast-food.jpg",
    description: "get all fast food items in one combo ",
    discount: 10,
    unit: "pack",
    productType: "food",
    tags: ["fast food", "combo"],
  },
  {
    id: 4,
    productName: "veg role",
    price: 40,
    src: "/role.webp",
    description: "the best veg role in the market",
    discount: 15,
    unit: "piece",
    productType: "food",
    tags: ["veg", "role", "snacks"],
  },
];

const productSlice = createSlice({
  name: "product",
  initialState: foodItem,
  reducers: {},
});

export default productSlice.reducer;
