/** @format */

import { FC } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './AppLayout';
import Hero from './pages/Hero';
import Menu from './pages/Menu';
import { Provider } from 'react-redux';
import store from './store.ts';
import { action as orderAction } from './components/OrderFrom.tsx';
import OrdersDetail from './pages/OrdersDetail.tsx';
import AuthRoute from './components/AuthRoute.tsx';
import User from './pages/User.tsx';
import ManageUser from './pages/ManageUser.tsx';
import OrderDetails from './pages/OrderDetails.tsx';
import Login from './pages/Login.tsx';
import ProductOverview from './pages/productOverview.tsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			// staleTime: 60 * 1000,
			staleTime: 0,
		},
	},
});

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
			{
				path: '/',
				element: <Hero />,
			},
			{
				path: '/menu',
				children: [
					{ path: '', element: <Menu /> },
					{ path: '/menu/:id', element: <ProductOverview /> },
				],
			},
			{
				path: '/cart',
				element: <div>cart</div>,
			},
			{
				path: '/order',
				element: <OrderDetails />,
				action: orderAction,
			},
			{
				path: '/user',
				element: <User />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/allusers',
				element: (
					<AuthRoute roles={['admin']}>
						<ManageUser />
					</AuthRoute>
				),
			},
			{
				path: '/allorders',
				element: (
					<AuthRoute roles={['admin']}>
						<OrdersDetail />
					</AuthRoute>
				),
			},
			{
				path: '/order/:id',
				element: <OrderDetails />,
			},
		],
	},
]);

const App: FC = function () {
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</QueryClientProvider>
	);
};

export default App;
