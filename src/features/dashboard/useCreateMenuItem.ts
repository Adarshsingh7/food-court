import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MenuItem } from "../../types/menuType";
import { menu } from "../menuFeatures/menuFeatures";
import toast from "react-hot-toast";

const useCreateMenuItem = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (body: Partial<MenuItem>) => menu.createMenu(body),
    onSuccess: () => {
      toast.success("Menu item created successfully");
      queryClient.invalidateQueries({ queryKey: ["menuItem"] });
    },
    onError: (error) => {
      console.log(error.message);
      toast.error("An error occurred, please try again");
    },
  });

  return { createMenuItem: mutate, creating: isPending, created: isSuccess };
};

export { useCreateMenuItem };
