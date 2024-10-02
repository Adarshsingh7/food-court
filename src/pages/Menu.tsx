/** @format */

import { useState, FC } from 'react';
import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Menu,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import {
	ChevronDownIcon,
	FunnelIcon,
	MinusIcon,
	PlusIcon,
	Squares2X2Icon,
} from '@heroicons/react/20/solid';
import ProductList from '../components/ProductList';
import Pagination from '../components/Pagination';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { MenuItem } from '../types/menuType';

function classNames(...classes: (string | false | null | undefined)[]): string {
	return classes.filter(Boolean).join(' ');
}

// Type for individual sort option
type SortOption = {
	name: string;
	href: string;
	current: boolean;
};

// Type for individual sub-category
type SubCategory = {
	name: string;
	href: string;
};

// Type for filter option
type FilterOption = {
	value: string;
	label: string;
	checked: boolean;
};

// Type for filter
type Filter = {
	id: string;
	name: string;
	options: FilterOption[];
};

// Data definitions
const sortOptions: SortOption[] = [
	{ name: 'Most Popular', href: '#', current: true },
	{ name: 'Best Rating', href: '#', current: false },
	{ name: 'Newest', href: '#', current: false },
	{ name: 'Price: Low to High', href: '#', current: false },
	{ name: 'Price: High to Low', href: '#', current: false },
];

const subCategories: SubCategory[] = [
	{ name: 'Pizza', href: '#' },
	{ name: 'Burgers', href: '#' },
	{ name: 'Sushi', href: '#' },
	{ name: 'Desserts', href: '#' },
	{ name: 'Drinks', href: '#' },
];

const filters: Filter[] = [
	{
		id: 'cuisine',
		name: 'Cuisine',
		options: [
			{ value: 'italian', label: 'Italian', checked: false },
			{ value: 'american', label: 'American', checked: false },
			{ value: 'japanese', label: 'Japanese', checked: true },
			{ value: 'mexican', label: 'Mexican', checked: false },
			{ value: 'indian', label: 'Indian', checked: false },
			{ value: 'chinese', label: 'Chinese', checked: false },
		],
	},
	{
		id: 'dietary',
		name: 'Dietary Options',
		options: [
			{ value: 'vegetarian', label: 'Vegetarian', checked: false },
			{ value: 'vegan', label: 'Vegan', checked: false },
			{ value: 'gluten-free', label: 'Gluten-Free', checked: true },
			{ value: 'halal', label: 'Halal', checked: false },
			{ value: 'kosher', label: 'Kosher', checked: false },
		],
	},
	{
		id: 'portion',
		name: 'Portion Size',
		options: [
			{ value: 'small', label: 'Small', checked: false },
			{ value: 'medium', label: 'Medium', checked: false },
			{ value: 'large', label: 'Large', checked: true },
			{ value: 'family', label: 'Family Size', checked: false },
		],
	},
];

interface MobileFilterDialogProps {
	mobileFiltersOpen: boolean;
	setMobileFiltersOpen: (state: boolean) => void;
}

interface CategoryListProps {
	categories: SubCategory[];
}

interface FilterSectionProps {
	section: Filter;
}

// MobileFilterDialog Component
const MobileFilterDialog: FC<MobileFilterDialogProps> = function ({
	mobileFiltersOpen,
	setMobileFiltersOpen,
}) {
	return (
		<Dialog
			open={mobileFiltersOpen}
			onClose={setMobileFiltersOpen}
			className='relative z-40 lg:hidden'
		>
			<DialogBackdrop
				transition
				className='fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0'
			/>
			<div className='fixed inset-0 z-40 flex'>
				<DialogPanel
					transition
					className='relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full'
				>
					<div className='flex items-center justify-between px-4'>
						<h2 className='text-lg font-medium text-gray-900'>Filters</h2>
						<button
							type='button'
							onClick={() => setMobileFiltersOpen(false)}
							className='-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400'
						>
							<span className='sr-only'>Close menu</span>
							<XMarkIcon
								aria-hidden='true'
								className='h-6 w-6'
							/>
						</button>
					</div>
					<form className='mt-4 border-t border-gray-200'>
						<CategoryList categories={subCategories} />
						{filters.map((section) => (
							<FilterSection
								key={section.id}
								section={section}
							/>
						))}
					</form>
				</DialogPanel>
			</div>
		</Dialog>
	);
};

// CategoryList Component
const CategoryList: FC<CategoryListProps> = function ({ categories }) {
	return (
		<>
			<h3 className='sr-only'>Categories</h3>
			<ul
				role='list'
				className='px-2 py-3 font-medium text-gray-900'
			>
				{categories.map((category) => (
					<li key={category.name}>
						<a
							href={category.href}
							className='block px-2 py-3'
						>
							{category.name}
						</a>
					</li>
				))}
			</ul>
		</>
	);
};

// FilterSection Component
const FilterSection: FC<FilterSectionProps> = function ({ section }) {
	return (
		<Disclosure
			as='div'
			className='border-t border-gray-200 px-4 py-6'
		>
			<h3 className='-mx-2 -my-3 flow-root'>
				<DisclosureButton className='group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500'>
					<span className='font-medium text-gray-900'>{section.name}</span>
					<span className='ml-6 flex items-center'>
						<PlusIcon
							aria-hidden='true'
							className='h-5 w-5 group-data-[open]:hidden'
						/>
						<MinusIcon
							aria-hidden='true'
							className='h-5 w-5 [.group:not([data-open])_&]:hidden'
						/>
					</span>
				</DisclosureButton>
			</h3>
			<DisclosurePanel className='pt-6'>
				<div className='space-y-6'>
					{section.options.map((option, optionIdx) => (
						<div
							key={option.value}
							className='flex items-center'
						>
							<input
								defaultValue={option.value}
								defaultChecked={option.checked}
								id={`filter-${section.id}-${optionIdx}`}
								name={`${section.id}[]`}
								type='checkbox'
								className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
							/>
							<label
								htmlFor={`filter-${section.id}-${optionIdx}`}
								className='ml-3 min-w-0 flex-1 text-gray-500'
							>
								{option.label}
							</label>
						</div>
					))}
				</div>
			</DisclosurePanel>
		</Disclosure>
	);
};

// SortMenu Component
function SortMenu() {
	return (
		<Menu
			as='div'
			className='relative inline-block text-left'
		>
			<div>
				<Menu.Button className='group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900'>
					Sort
					<ChevronDownIcon
						aria-hidden='true'
						className='-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
					/>
				</Menu.Button>
			</div>
			<Menu.Items
				as='div'
				className='absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-transform duration-100 ease-out transform data-[closed]:scale-95 data-[closed]:opacity-0 data-[open]:scale-100 data-[open]:opacity-100'
			>
				<div className='py-1'>
					{sortOptions.map((option) => (
						<Menu.Item key={option.name}>
							{({ active }) => (
								<a
									href={option.href}
									className={classNames(
										option.current
											? 'font-medium text-gray-900'
											: 'text-gray-500',
										active ? 'bg-gray-100' : '',
										'block px-4 py-2 text-sm'
									)}
								>
									{option.name}
								</a>
							)}
						</Menu.Item>
					))}
				</div>
			</Menu.Items>
		</Menu>
	);
}

// ProductGrid Component
function ProductGrid() {
	const { data, error, isLoading } = useQuery<MenuItem[]>({
		queryKey: ['menuItem'],
	});
	if (isLoading) return <div>Loading...</div>;
	if (error instanceof Error) return <div>Error: {error.message}</div>;
	if (!data) return <div>No data found</div>;
	return (
		<div className='grid md:grid-cols-3 grid-cols-2 gap-2'>
			{data.map((product) => (
				<ProductList
					item={product}
					key={product.itemId}
				/>
			))}
		</div>
	);
}

function Search() {
	return (
		<div className='max-w-4xl mx-auto'>
			<div className='relative flex items-center w-full h-12 rounded-lg shadow-md focus-within:shadow-lg bg-white overflow-hidden'>
				<div className='grid place-items-center h-full w-12 text-gray-300'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
						/>
					</svg>
				</div>

				<input
					className='h-full w-full outline-none text-sm text-gray-700 pr-2'
					type='text'
					autoComplete='off'
					id='search'
					placeholder='Search something..'
				/>
			</div>
		</div>
	);
}

// Main Component
export default function MenuList() {
	const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
	const cartItem = useSelector((state: RootState) => state.cart.items);

	return (
		<div
			className='sm:px-32 sm:py-10'
			id='menu'
		>
			<MobileFilterDialog
				mobileFiltersOpen={mobileFiltersOpen}
				setMobileFiltersOpen={setMobileFiltersOpen}
			/>
			<main className='mx-auto max-w-7xl px-4 sm:py-6 sm:px-6 lg:px-8 bg-white rounded-3xl'>
				{/* search input */}
				<div className='flex flex-col gap-5 my-5'>
					<div className='flex'>
						<Search />
						<span className='w-32'>
							{cartItem.length !== 0 && (
								<Link to='/order'>
									<Button color='#8BC34A'>Order Now</Button>
								</Link>
							)}
						</span>
					</div>
					<div className='flex items-baseline justify-between border-b border-gray-200'>
						<div className='flex items-center'>
							<SortMenu />
							<button
								type='button'
								className='-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7'
							>
								<span className='sr-only'>View grid</span>
								<Squares2X2Icon
									aria-hidden='true'
									className='h-5 w-5'
								/>
							</button>
							<button
								type='button'
								onClick={() => setMobileFiltersOpen(true)}
								className='-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden'
							>
								<span className='sr-only'>Filters</span>
								<FunnelIcon
									aria-hidden='true'
									className='h-5 w-5'
								/>
							</button>
						</div>
					</div>
				</div>
				<section aria-labelledby='products-heading'>
					<h2
						id='products-heading'
						className='sr-only'
					>
						Products
					</h2>
					<div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4'>
						<form className='hidden lg:block'>
							<CategoryList categories={subCategories} />
							{filters.map((section) => (
								<FilterSection
									key={section.id}
									section={section}
								/>
							))}
						</form>
						<div className='lg:col-span-3'>
							<ProductGrid />
						</div>
					</div>
					{/* Centering Pagination */}
					<div className='flex justify-center mt-8'>
						<Pagination />
					</div>
				</section>
			</main>
		</div>
	);
}
