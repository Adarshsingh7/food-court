// this is the type for each of the item or product displayed in the system
export interface itemType {
  productName: string;
  src: string;
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
  item: itemType;
  itemId: number;
  quantity: number;
}

export interface CartType {
  items: CartItemType[];
  amount: number;
}

export interface OrderItem {
  price: number;
  productName: string;
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
