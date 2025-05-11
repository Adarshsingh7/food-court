import { MenuItem } from "./menuType";

// this is the type for each of the item or product displayed in the system
export interface itemType {
  name: string;
  image: string;
  id: number;
  unit:
    | "piece"
    | "plate"
    | "kg"
    | "litre"
    | "dozen"
    | "pack"
    | "box"
    | "bottle"
    | "can"
    | "bag"
    | "sachet";
  description: string;
  price: number;
  productType: "food" | "vegetable" | "fruit";
  tags: string[];
  quantity: number;
  discount?: number;
}

export interface CartItemType {
  item: MenuItem;
  itemId: number;
  quantity: number;
}

export interface CartType {
  items: CartItemType[];
  amount: number;
}

export interface OrderItem {
  price: number;
  name: string;
  quantity: number;
  unit: string;
}

export interface Order {
  id: number | string;
  address: string;
  phone: number;
  status: string;
  customerName: string;
  orderItem: OrderItem[];
}
