/** @format */

import { useQuery } from '@tanstack/react-query';
import { FC, useState } from 'react';
import { MenuItem } from '../../types/menuType';
import FeaturedTable from '../../components/FeaturedTable';
import { Button } from '@mui/material';
import Modal from '../../components/Modal';

const filterMenu = (menuItems: MenuItem[]) =>
	menuItems.map((menuItem) => ({
		ID: menuItem.itemId,
		name: menuItem.name,
		price: menuItem.price,
		category: menuItem.category,
		stock: menuItem.stock,
	}));

const MenuControl: FC = () => {
	const [editModalOpen, setEditModalOpen] = useState(false);
	const { data } = useQuery<MenuItem[]>({ queryKey: ['menuItem'] });

	if (!data) return null;
	return (
		<div className='mb-10'>
			<Modal
				open={editModalOpen}
				handleClose={() => setEditModalOpen(false)}
			>
				<EditMenuModal />
			</Modal>
			<div className='flex justify-between mb-5'>
				<h1 className='text-3xl font-bold'>Menu</h1>
				<Button
					variant='outlined'
					onClick={() => setEditModalOpen(true)}
				>
					New
				</Button>
			</div>
			<div>
				<FeaturedTable
					data={filterMenu(data)}
					fields={['ID', 'name', 'price', 'category', 'stock', 'Actions']}
					action={() => {}}
				/>
			</div>
		</div>
	);
};

const EditMenuModal: FC = () => {
	return <div>Edit Mode</div>;
};

export default MenuControl;
