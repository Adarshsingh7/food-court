/** @format */

// interface Variant {
// 	name: string;
// 	price: number;
// 	stock: number;
// 	_id: {
// 		$oid: string;
// 	};
// }

// interface MenuItem {
// 	_id: string;
// 	name: string;
// 	description: string;
// 	price: number;
// 	category: string;
// 	availability: boolean;
// 	variants: Variant[];
// 	image: string;
// 	ingredients: string[];
// 	isSpecial: boolean;
// 	preparationTime: number;
// 	discount: number;
// 	stock: number;
// 	isAvailable: boolean;
// 	createdAt: {
// 		$date: string;
// 	};
// 	modifiedAt: {
// 		$date: string;
// 	};
// 	__v: number;
// }

interface Variant {
  name: string;
  price: number;
  stock: number;
  _id: {
    $oid: string;
  };
}

interface MenuItem {
  _id: string;
  name: string;
  itemId: number;
  description: string;
  price: number;
  category: string;
  availability: boolean;
  variants: Variant[];
  image: string;
  ingredients: string[];
  isSpecial: boolean;
  preparationTime: number;
  discount: number;
  stock: number;
  isAvailable: boolean;
  createdAt: {
    $date: string;
  };
  modifiedAt: {
    $date: string;
  };
  __v: number;
}

export type { MenuItem };
