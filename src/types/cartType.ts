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
  discount?: number;
}

export interface CartItemType {
  item: itemType;
  quantity: number;
}

export interface CartType {
  items: CartItemType[];
  amount: number;
}
