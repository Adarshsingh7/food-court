/** @format */

import { FC } from 'react';
import QuantityButton from './QuantityButtons';
import { itemType } from '../types/cartType';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { getCurrentQuantity } from '../slice/productSlice';
import { Badge } from '@mui/material';

interface ProductListProps {
	item: itemType;
}

const ProductList: FC<ProductListProps> = function ({ item }) {
	const cartItems = useSelector((state: RootState) => state.cart.items);
	const cartItem = cartItems.find((cartItem) => cartItem.itemId === item.id);
	const currentPorductCount = useSelector(getCurrentQuantity(item.id));

	const badgeContent =
		currentPorductCount > 10
			? ''
			: currentPorductCount > 5
			? 'FEW LEFT'
			: currentPorductCount === 0
			? 'OUT OF STOCK'
			: `${currentPorductCount} LEFT`;

	const badgeColor =
		currentPorductCount > 10
			? 'default'
			: currentPorductCount > 5
			? 'warning'
			: `error`;

	return (
		<Badge
			badgeContent={badgeContent}
			color={badgeColor}
			// sx={{ color: '000' }}
		>
			<div className='mb-1 flex rounded-lg border border-gray-200 bg-white p-2 shadow-md'>
				<img
					src={item.src}
					alt={item.productName}
					className='h-full w-32 rounded object-cover md:w-1/3 lg:w-1/4'
				/>
				<div className='ml-4 flex w-full flex-col justify-between'>
					<div>
						<h3 className='text-sm font-semibold text-gray-800 sm:text-base md:text-lg lg:text-xl capitalize'>
							{item.productName}
						</h3>
						<p className='text-[10px] text-gray-600 sm:text-xs md:text-base lg:text-lg'>
							{item.description}
						</p>
					</div>
					<div className='mt-2 flex items-center'>
						<div className='flex justify-between w-full'>
							<div className='mt-6'>
								<span className='ml-2 text-sm font-semibold text-gray-800 sm:text-base md:text-lg lg:text-xl'>
									₹{item.price}
								</span>
							</div>
							{cartItem ? (
								<QuantityButton
									quantity={cartItem.quantity}
									itemId={item.id}
								/>
							) : (
								<QuantityButton
									quantity={0}
									itemId={item.id}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		</Badge>
	);
};

export default ProductList;
