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

export interface ResponseType {
  status: string;
  error: boolean; 
  message: string;
  $id: string;
  $collectionId: string;
  $databaseId: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
}

export interface LoginResposeType {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  factors: string[];
  provider: string;
  userId: string;
  expire: string;
  ip: string;
  secret: string;
  cleintName: string;
  osCode: string;
  deviceName: string;
  providerUid: string;
  status?: string
}

export interface UserType {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  name: string;
  email: string;
  status: boolean;
  emailVerification: boolean;
  phoneVerification: boolean;
  phone: string;
}



// {
//   "$id": "66d386bf00339b3158b7",
//   "$createdAt": "2024-08-31T11:43:40.535+00:00",
//   "$updatedAt": "2024-08-31T11:43:40.535+00:00",
//   "name": "test",
//   "registration": "2024-08-31T11:43:40.533+00:00",
//   "status": true,
//   "labels": [],
//   "passwordUpdate": "2024-08-31T11:43:40.533+00:00",
//   "email": "test@gmail.com",
//   "phone": "",
//   "emailVerification": false,
//   "phoneVerification": false,
//   "mfa": false,
//   "prefs": {},
//   "targets": [
//       {
//           "$id": "66d301ec91f8a8d9dfbe",
//           "$createdAt": "2024-08-31T11:43:40.597+00:00",
//           "$updatedAt": "2024-08-31T11:43:40.597+00:00",
//           "name": "",
//           "userId": "66d386bf00339b3158b7",
//           "providerId": null,
//           "providerType": "email",
//           "identifier": "test@gmail.com"
//       }
//   ],
//   "accessedAt": "2024-08-31T11:43:40.533+00:00"
// }
