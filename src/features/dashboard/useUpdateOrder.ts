/** @format */

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { order as orderClass } from '../order/order';
import { Order } from '../../types/orderType';

const useUpdateOrder = () => {
	const queryClient = useQueryClient();

	const { mutate, isPending, isSuccess } = useMutation({
		mutationFn: ({ id, body }: { id: string; body: Partial<Order> }) =>
			orderClass.updateOrder(id, body),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['orders'] });
		},
	});

	return { updateOrder: mutate, updatingOrder: isPending, updated: isSuccess };
};

export { useUpdateOrder };
