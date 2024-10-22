import { useMutation, useQueryClient } from "@tanstack/react-query";
import { order as orderClass } from "../order/order";
import { Order } from "../../types/orderType";
import toast from "react-hot-toast";

const useUpdateOrder = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: ({ id, body }: { id: string; body: Partial<Order> }) =>
      orderClass.updateOrder(id, body),
    onSuccess: () => {
      toast.success("Order updated successfully");
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
    onError: (error) => {
      console.log(error.message);
      toast.error("An error occurred, please try again");
    },
  });

  return { updateOrder: mutate, updatingOrder: isPending, updated: isSuccess };
};

export { useUpdateOrder };
