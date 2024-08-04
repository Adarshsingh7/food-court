/** @format */

import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './AppLayout';
import Hero from './pages/Hero';

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
			{
				path: '/',
				element: <Hero />,
			},
		],
	},
]);

const App: FC = function () {
	return <RouterProvider router={router} />;
};

export default App;
