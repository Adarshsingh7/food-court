/** @format */

import { FC, useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Button } from '@headlessui/react';
// Shared Tailwind CSS classes
const textClasses = 'text-gray-700 dark:text-gray-400';
const buttonClasses = 'text-white px-4 py-2 rounded-md focus:outline-none';

const ProductList: FC = () => {
	const [quantity, setQuantity] = useState(1);

	const handleQuantityChange = (amount: number) => {
		setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
	};

	return (
		<div
			className={`flex flex-col p-4 rounded-lg shadow-md bg-white dark:bg-gray-800`}
		>
			<div className='flex flex-col md:flex-row items-center justify-between'>
				<div className='flex items-center mb-4 md:mb-0'>
					<img
						src='https://images.herzindagi.info/image/2021/Sep/chaii-samosa.jpg'
						alt='product-image'
						className='w-24 h-24 object-cover rounded-lg'
					/>
					<div className='ml-4'>
						<h3 className='text-lg font-semibold'>Product Name</h3>
						<p className={`text-sm ${textClasses}`}>
							Product Description Lorem ipsum dolor sit amet, consectetur
							adipiscing elit.
						</p>
					</div>
				</div>
				<div className='flex items-center'>
					<div className={`flex items-center rounded-lg px-3 py-1`}>
						<button
							className={`${textClasses} focus:outline-none`}
							onClick={() => handleQuantityChange(-1)}
						>
							<RemoveCircleIcon />
						</button>
						<input
							type='number'
							value={quantity}
							readOnly
							className='w-12 mx-2 text-center bg-transparent outline-none'
						/>
						<button
							className={`${textClasses} focus:outline-none`}
							onClick={() => handleQuantityChange(1)}
						>
							<AddCircleIcon />
						</button>
					</div>
					<Button
						className={`bg-blue-500 hover:bg-blue-600 ${buttonClasses} ml-4`}
					>
						Add to Cart
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ProductList;
