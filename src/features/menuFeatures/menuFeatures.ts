/** @format */

import axios from 'axios';

// Define the shape of the data

export const fetchMenuItems = async () => {
	const data = await axios.get('http://localhost:3000/api/v1/menus');

	return data?.data?.data?.data;
};
