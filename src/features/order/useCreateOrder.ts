import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Order } from "../../types/orderType";
import { order } from "./order";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { emptyCart } from "../../slice/cartSlice";
import { useNavigate } from "react-router-dom";
import { appendLocalEntry } from "../../utils/manageLocalEntry";

const useCreateOrder = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mutate, isSuccess, isPending } = useMutation({
    mutationFn: (data: Partial<Order>) => order.createOrder(data),
    onSuccess: (data) => {
      appendLocalEntry(data._id);
      dispatch(emptyCart());
      navigate(`/order/${data._id}`);
      toast.success("Order created successfully");
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
    onError: (error) => {
      console.log(error.message);
      toast.error("An error occurred, please try again");
    },
  });

  return { orderItem: mutate, ordered: isSuccess, ordering: isPending };
};

export { useCreateOrder };
