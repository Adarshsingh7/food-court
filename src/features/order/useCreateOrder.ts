import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Order } from "../../types/orderType";
import { order } from "./order";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { emptyCart } from "../../slice/cartSlice";
import { useNavigate } from "react-router-dom";

const useCreateOrder = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mutate, isSuccess, isPending } = useMutation({
    mutationFn: (data: Partial<Order>) => order.createOrder(data),
    onSuccess: (data) => {
      console.log("data", data);
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
