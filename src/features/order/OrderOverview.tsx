/** @format */

import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import {
	HiCake,
	HiCheckBadge,
	HiMiniShoppingBag,
	HiMiniTruck,
} from 'react-icons/hi2';
import { useParams } from 'react-router-dom';
import { order } from './order';
import NoData from '../../ui/NoData';
import BackdropLoader from '../../components/BackdropLoader';
import { Order, OrderItem } from '../../types/orderType';
import { MenuItem } from '../../types/menuType';

function OrderOverview() {
	const { id } = useParams();
	const { isLoading, data, error } = useQuery<Order>({
		queryKey: ['orders'],
		queryFn: () => order.getOrder(id || '0'),
	});
	if (isLoading) return <BackdropLoader />;
	if (!id || error || !data) return <NoData />;
	return (
		<section className='bg-white py-8 antialiased dark:bg-gray-900 md:py-16'>
			<div className='mx-auto max-w-screen-xl px-4 2xl:px-0'>
				<h2 className='text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl'>
					Take screenshot or save order id #{data._id}
				</h2>
				<div className='mt-6 sm:mt-8 lg:flex lg:gap-8'>
					<div className='w-full divide-y divide-gray-200 overflow-hidden rounded-lg border border-gray-200 dark:divide-gray-700 dark:border-gray-700 lg:max-w-xl xl:max-w-2xl'>
						{data.items.map((item, idx) => (
							<OrderList
								key={idx}
								item={item}
							/>
						))}

						<BillBreakdown order={data} />
					</div>
					<OrderHistory order={data} />
				</div>
			</div>
		</section>
	);
}

const OrderList: FC<{ item: OrderItem }> = ({ item }) => {
	const { data } = useQuery<MenuItem[]>({ queryKey: ['menuItem'] });
	const product = data?.find((p) => p._id === item.menuItem);
	if (!product) return null;
	return (
		<div className='space-y-4 p-6'>
			<div className='flex items-center gap-6'>
				<span className='h-14 w-14 shrink-0'>
					<img
						className='h-full w-full dark:hidden'
						src={product.image}
						alt={product.name}
					/>
					<img
						className='hidden h-full w-full dark:block'
						src={product.image}
						alt={product.name}
					/>
				</span>
				<span className='min-w-0 flex-1 font-medium text-gray-900 hover:underline dark:text-white uppercase'>
					{product.name}
				</span>
			</div>
			<div className='flex items-center justify-between gap-4'>
				<p className='text-sm font-normal text-gray-500 dark:text-gray-400'>
					<span className='font-medium text-gray-900 dark:text-white'>
						Product ID:
					</span>{' '}
					{item._id}
				</p>
				<div className='flex items-center justify-end gap-4'>
					<p className='text-base font-normal text-gray-900 dark:text-white'>
						x{item.quantity}
					</p>
					<p className='text-xl font-bold leading-tight text-gray-900 dark:text-white'>
						₹{(item.price * item.quantity).toFixed(2)}
					</p>
				</div>
			</div>
		</div>
	);
};

const BillBreakdown: FC<{ order: Order }> = ({ order }) => {
	console.log(order);
	return (
		<div className='space-y-4 bg-gray-50 p-6 dark:bg-gray-800'>
			<div className='space-y-2'>
				<dl className='flex items-center justify-between gap-4'>
					<dt className='font-normal text-gray-500 dark:text-gray-400'>
						Original price
					</dt>
					<dd className='font-medium text-gray-900 dark:text-white'>
						₹{order.totalAmount.toFixed(2)}
					</dd>
				</dl>
				<dl className='flex items-center justify-between gap-4'>
					<dt className='font-normal text-gray-500 dark:text-gray-400'>
						discount
					</dt>
					<dd className='text-base font-medium text-green-500'>-₹0.00</dd>
				</dl>
				<dl className='flex items-center justify-between gap-4'>
					<dt className='font-normal text-gray-500 dark:text-gray-400'>
						Deleviery & Service Charge
					</dt>
					<dd className='font-medium text-gray-900 dark:text-white'>₹0.00</dd>
				</dl>
			</div>
			<dl className='flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700'>
				<dt className='text-lg font-bold text-gray-900 dark:text-white'>
					Total
				</dt>
				<dd className='text-lg font-bold text-gray-900 dark:text-white'>
					₹{order.totalAmount.toFixed(2)}
				</dd>
			</dl>
		</div>
	);
};

const OrderHistory: FC<{ order: Order }> = ({ order }) => {
	const { data: menuItems } = useQuery<MenuItem[]>({ queryKey: ['menuItem'] });
	if (!menuItems) return null;
	const matchedProducts = menuItems.filter((item) =>
		order.items.find((o) => o.menuItem === item._id)
	);

	const preprationTime =
		matchedProducts.reduce((prev, curr) => prev + curr.preparationTime, 0) /
		matchedProducts.length;

	console.log(matchedProducts);
	const history = [
		{
			Icon: HiMiniShoppingBag,
			title: 'Order placed',
			description: order.createdAt
				? new Date(order.createdAt).toLocaleString()
				: 'Date not available',
			completed: order.status !== 'cancelled',
		},
		{
			Icon: HiCheckBadge,
			title: 'Order Accepted',
			description: 'order accepted please wait patiently',
			completed: order.status === 'preparing',
		},
		{
			Icon: HiCheckBadge,
			title: 'Order Preparing',
			description: `would take ${(
				preprationTime +
				preprationTime * 0.2
			).toFixed(0)} minutes after accepted`,
			completed: order.status === 'preparing',
		},
		{
			Icon: HiCake,
			title: 'Order dinned in',
			description: 'please give a review to us',
			completed: order.status === 'completed',
		},
		{
			Icon: HiMiniTruck,
			title: 'Payment Successfull',
			description: `payment is ${order.paymentStatus}`,
			completed: order.paymentStatus === 'paid',
		},
	];
	return (
		<div className='mt-6 grow sm:mt-8 lg:mt-0'>
			<div className='space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800'>
				<h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
					Order history
				</h3>
				<ol className='relative ms-3 border-s border-gray-200 dark:border-gray-700'>
					{history.map((item, index) => (
						<HistoryList
							key={index}
							{...item}
							Icon={item.Icon}
							title={item.title}
							description={item.description}
							completed={item.completed}
						/>
					))}
				</ol>
				<div className='gap-4 sm:flex sm:items-center'>
					<button
						type='button'
						className='w-full rounded-lg  border border-gray-200 bg-white px-5  py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700'
					>
						Cancel the order
					</button>
					<a
						href='#'
						className='mt-4 flex w-full items-center justify-center rounded-lg bg-primary-700  px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mt-0'
					>
						Order details
					</a>
				</div>
			</div>
		</div>
	);
};

const HistoryList: FC<{
	Icon: FC;
	title: string;
	description: string;
	completed: boolean;
}> = ({ Icon, title, description, completed }) => {
	return (
		<li className={`ms-6 mb-10 ${completed ? 'text-[#178c2e]' : ''}`}>
			<span className='absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 ring-8 ring-white'>
				<Icon />
			</span>
			<div>
				<h4 className='mb-0.5 font-semibold'>{title}</h4>
				<span className='text-sm font-medium hover:underline'>
					{description}
				</span>
			</div>
		</li>
	);
};

export default OrderOverview;
