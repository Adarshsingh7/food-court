/** @format */

import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { useQuery } from '@tanstack/react-query';
import { MenuItem } from './types/menuType';
import { fetchMenuItems } from './features/menuFeatures/menuFeatures';
import { Backdrop, CircularProgress } from '@mui/material';
import ErrorPage from './pages/ErrorPage';

const AppLayout: FC = function () {
	const { error, isLoading } = useQuery<MenuItem>({
		queryKey: ['menuItem'],
		queryFn: fetchMenuItems,
		retry: 2,
		retryDelay: 1000,
	});

	if (isLoading)
		return (
			<Backdrop
				sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
				open={true}
			>
				<CircularProgress color='inherit' />
			</Backdrop>
		);
	if (error instanceof Error)
		return (
			<div>
				<ErrorPage message={error.message} />
			</div>
		);
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default AppLayout;
