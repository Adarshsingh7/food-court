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
  totalPrice?: number;
  quantity?: number;
  discount?: number;
}

export interface cartState {
  items: itemType[];
  amount: number;
}
