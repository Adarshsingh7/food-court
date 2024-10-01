/** @format */

import { createSlice, PayloadAction, ThunkAction } from '@reduxjs/toolkit';
import { CartType, CartItemType } from '../types/cartType';
import { quantityInc, quantityDec } from './productSlice.ts';
import { RootState } from '../store.ts';

const initialState: CartType = {
	items: [],
	amount: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<CartItemType>) => {
			state.amount += action.payload.item.price * action.payload.quantity;
			state.items.push(action.payload);
		},
		removeItem: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter((item) => {
				if (item.itemId === action.payload) {
					const itemInCart = state.items.find(
						(el) => el.itemId === action.payload
					);
					if (!itemInCart) return;
					state.amount -= itemInCart.quantity * itemInCart.item.price;
				}
				return item.itemId !== action.payload;
			});
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
	itemId: number
): ThunkAction<
	void,
	RootState,
	unknown,
	PayloadAction<CartItemType | number>
> => {
	return (dispatch, getState) => {
		const { cart, product } = getState();
		const existingItem = cart.items.find((item) => item.itemId === itemId);
		const productItem = product.find((item) => item.id === itemId);
		if (existingItem) {
			dispatch(cartSlice.actions.incrementQuantity(itemId));
		} else if (productItem) {
			dispatch(
				cartSlice.actions.addItem({ item: productItem, itemId, quantity: 1 })
			);
		}
		dispatch(quantityInc(itemId));
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
		dispatch(quantityDec(itemId));
	};
};

export const { removeItem } = cartSlice.actions;

export default cartSlice.reducer;
