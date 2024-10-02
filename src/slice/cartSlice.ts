/** @format */

import { createSlice, PayloadAction, ThunkAction } from '@reduxjs/toolkit';
import { CartType, CartItemType } from '../types/cartType';
import { RootState } from '../store.ts';
import { MenuItem } from '../types/menuType.ts';

const initialState: CartType = {
	items: [],
	amount: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<CartItemType>) => {
			state.items.push(action.payload);
			state.amount = state.items.reduce(
				(acc, item) => item.quantity * item.item.price + acc,
				0
			);
		},
		removeItem: (state, action: PayloadAction<number>) => {
			// const itemInCart = state.items.find((el) => el.itemId === action.payload);
			// if (itemInCart) {
			// 	state.amount -= itemInCart.quantity * itemInCart.item.price;
			// }
			state.items = state.items.filter((item) => {
				return item.itemId !== action.payload;
			});
			state.amount = state.items.reduce(
				(acc, item) => item.quantity * item.item.price + acc,
				0
			);
		},
		incrementQuantity: (state, action: PayloadAction<number>) => {
			const item = state.items.find((item) => item.itemId === action.payload);
			if (item) {
				state.amount += item.item.price;
				item.quantity += 1;
			}
		},
		decrementQuantity: (state, action: PayloadAction<number>) => {
			const item = state.items.find((item) => item.itemId === action.payload);
			if (item) {
				state.amount -= item.item.price;
				item.quantity -= 1;
			}
		},
	},
});

export const addItemToCart = (
	itemId: number,
	product: MenuItem
): ThunkAction<
	void,
	RootState,
	unknown,
	PayloadAction<CartItemType | number>
> => {
	return (dispatch, getState) => {
		const { cart } = getState();
		const existingItem = cart.items.find((item) => item.itemId === itemId);
		if (existingItem) {
			dispatch(cartSlice.actions.incrementQuantity(itemId));
		} else if (product) {
			dispatch(
				cartSlice.actions.addItem({ item: product, itemId, quantity: 1 })
			);
		}
	};
};

export const removeItemFromCart = (
	itemId: number
): ThunkAction<void, RootState, unknown, PayloadAction<number>> => {
	return function (dispatch, getState) {
		const { cart } = getState();
		const existingItem = cart.items.find((item) => item.itemId === itemId);
		if (existingItem && existingItem.quantity > 1) {
			dispatch(cartSlice.actions.decrementQuantity(itemId));
		} else {
			dispatch(cartSlice.actions.removeItem(itemId));
		}
	};
};

export const totalAddedQuantity = (itemId: number) => (store: RootState) => {
	const product = store.cart.items.find((item) => item.itemId === itemId);

	if (product) {
		return product.quantity;
	} else return 0;
};

export const { removeItem } = cartSlice.actions;

export default cartSlice.reducer;
