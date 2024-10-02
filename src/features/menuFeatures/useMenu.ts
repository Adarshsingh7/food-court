/** @format */

import { useQuery } from '@tanstack/react-query';
import { MenuItem } from '../../types/menuType';

export const useMenu = () => {
	const { data, isLoading, error } = useQuery<MenuItem[]>({
		queryKey: ['menuItem'],
	});
	return { data, isLoading, error };
};
