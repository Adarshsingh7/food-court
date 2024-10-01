/** @format */

import { useSelector } from 'react-redux';
import QuantityButton from '../components/QuantityButtons';
import { Star, Favorite } from '@mui/icons-material';
import { RootState } from '../store';
import { BiRupee } from 'react-icons/bi';

function ProductOverview() {
	const item = useSelector((state: RootState) => state.product[0]);

	return (
		<section className='py-8 bg-white md:py-16 antialiased'>
			<div className='max-w-screen-xl px-4 mx-auto 2xl:px-0'>
				<div className='lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16'>
					<div className='shrink-0 max-w-md lg:max-w-lg mx-auto'>
						<img
							className='w-full'
							src={item.src}
							alt={item.productName}
						/>
					</div>

					<div className='mt-6 sm:mt-8 lg:mt-0'>
						<h1 className='text-xl font-semibold text-gray-900 sm:text-2xl'>
							{item.productName}
						</h1>
						<div className='mt-4 flex items-center justify-between sm:gap-4 flex-col'>
							<p className='text-2xl font-extrabold text-gray-900 sm:text-3xl'>
								<span className='flex'>
									<BiRupee />
									{item.price}
								</span>
							</p>

							<div className='flex items-center gap-2 mt-2 sm:mt-0'>
								<div className='flex items-center gap-1'>
									{[...Array(5)].map((_, index) => (
										<Star
											key={index}
											className='w-4 h-4 text-yellow-300'
										/>
									))}
								</div>
								<p className='text-sm font-medium leading-none text-gray-500'>
									(5.0)
								</p>
								<a
									href='#'
									className='text-sm font-medium leading-none text-gray-900 underline hover:no-underline'
								>
									345 Reviews
								</a>
							</div>
						</div>

						<div className='mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8'>
							<a
								href='#'
								title='Add to favorites'
								className='flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100'
								role='button'
							>
								<Favorite className='w-5 h-5 -ms-2 me-2' />
								Add to favorites
							</a>

							<QuantityButton
								itemId={1}
								quantity={0}
							/>
							{/* <span>
								<ShoppingCart className='w-5 h-5 -ms-2 me-2' />
								<span>Add to cart</span>
							</span> *
							</QuantityButton> */}
						</div>

						<hr className='my-6 md:my-8 border-gray-200' />

						<p className='mb-6 text-gray-500'>
							Studio quality three mic array for crystal clear calls and voice
							recordings. Six-speaker sound system for a remarkably robust and
							high-quality audio experience. Up to 256GB of ultrafast SSD
							storage.
						</p>

						<p className='text-gray-500'>
							Two Thunderbolt USB 4 ports and up to two USB 3 ports. Ultrafast
							Wi-Fi 6 and Bluetooth 5.0 wireless. Color matched Magic Mouse with
							Magic Keyboard or Magic Keyboard with Touch ID.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProductOverview;
