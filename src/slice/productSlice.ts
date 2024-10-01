/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { itemType } from '../types/cartType';

const foodItem: itemType[] = [
	{
		id: 1,
		productName: 'south indian idly',
		price: 20,
		src: '/idli.jpg',
		description: 'south indian idly',
		discount: 10,
		quantity: 15,
		unit: 'plate',
		productType: 'food',
		tags: ['south indian', 'breakfast'],
	},
	{
		id: 2,
		productName: 'south indian dosa',
		price: 100,
		src: '/dosa.webp',
		description: 'south indian dosa',
		discount: 10,
		quantity: 15,
		unit: 'piece',
		productType: 'food',
		tags: ['south indian', 'breakfast'],
	},
	{
		id: 3,
		productName: 'fast food combo',
		price: 150,
		src: '/fast-food.jpg',
		description: 'get all fast food items in one combo ',
		discount: 10,
		quantity: 15,
		unit: 'pack',
		productType: 'food',
		tags: ['fast food', 'combo'],
	},
	{
		id: 4,
		productName: 'veg role',
		price: 40,
		src: '/role.webp',
		description: 'the best veg role in the market',
		discount: 15,
		quantity: 15,
		unit: 'piece',
		productType: 'food',
		tags: ['veg', 'role', 'snacks'],
	},
];

const productSlice = createSlice({
	name: 'product',
	initialState: foodItem,
	reducers: {
		quantityInc(state, action) {
			const product = state.find((item) => item.id === action.payload);
			if (product && product.quantity > 0) product.quantity -= 1;
		},
		quantityDec(state, action) {
			const product = state.find((item) => item.id === action.payload);
			if (product) product.quantity += 1;
		},
	},
});

export const { quantityInc, quantityDec } = productSlice.actions;
export default productSlice.reducer;

export const getCurrentQuantity =
	(id: number) => (store: { product: itemType[] }) =>
		store.product.find((item: itemType) => item.id === id)?.quantity ?? 0;
