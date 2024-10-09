/** @format */

import { IconButton, SmallButton } from '../ui/Button.tsx';
import AddIcon from '@mui/icons-material/AddCircle';
import RemoveIcon from '@mui/icons-material/RemoveCircle';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../store';
import {
	addItemToCart,
	removeItemFromCart,
	totalAddedQuantity,
} from '../slice/cartSlice.ts';
import { useMenu } from '../features/menuFeatures/useMenu.ts';

interface QuantityButtonProps {
	quantity: number;
	itemId: number;
}

const QuantityButton: FC<QuantityButtonProps> = function ({
	quantity,
	itemId,
}) {
	const { data } = useMenu();
	const dispatch: AppDispatch = useDispatch();
	const currentProductCount = useSelector(totalAddedQuantity(itemId));
	const menuItemQuantity =
		data?.find((item) => item.itemId === itemId)?.stock || 0;
	const inStock = menuItemQuantity - currentProductCount;

	const product = data?.find((item) => item.itemId === itemId);

	function handleQuantityChange(amount: number) {
		if (!product) return;
		if (amount === 1) {
			dispatch(addItemToCart(itemId, product));
		}
		if (amount === -1) {
			dispatch(removeItemFromCart(itemId));
		}
	}

	return (
		<div className='flex items-end rounded-lg py-1'>
			{quantity > 0 && (
				<IconButton onClick={() => handleQuantityChange(-1)}>
					<RemoveIcon fontSize='medium' />
				</IconButton>
			)}
			{quantity === 0 ? (
				<SmallButton
					onClick={() => handleQuantityChange(1)}
					color='#8BC34A'
				>
					Add to cart
				</SmallButton>
			) : (
				<>
					<input
						type='number'
						value={quantity}
						readOnly
						className='w-8 text-center bg-transparent outline-none'
					/>
					<IconButton
						onClick={() => handleQuantityChange(1)}
						disabled={!inStock}
					>
						<AddIcon fontSize='medium' />
					</IconButton>
				</>
			)}
		</div>
	);
};

export default QuantityButton;
