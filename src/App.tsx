/** @format */

import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './AppLayout';
import Hero from './pages/Hero';
import Menu from './pages/Menu';
import { Provider } from 'react-redux';
import store from './store.ts';
import Order from './pages/Order.tsx';
import { action as orderAction } from './components/OrderFrom.tsx';
import OrdersDetail from './pages/OrdersDetail.tsx';
import AuthRoute from './components/AuthRoute.tsx';
import User from './pages/User.tsx';
import ManageUser from './pages/ManageUser.tsx';
import OrderDetails from './pages/OrderDetails.tsx';
import Login from './pages/Login.tsx';
import ProductOverview from './pages/productOverview.tsx';

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
				element: <Order />,
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
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	);
};

export default App;
