import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MenuItem } from "../../types/menuType";
import { menu } from "../menuFeatures/menuFeatures";
import toast from "react-hot-toast";

const useUpdateMenuItem = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: ({ id, body }: { id: string; body: Partial<MenuItem> }) =>
      menu.updateMenu(id, body),
    onSuccess: () => {
      toast.success("Menu item updated successfully");
      queryClient.invalidateQueries({ queryKey: ["menuItem"] });
    },
    onError: (error) => {
      console.log(error.message);
      toast.error("An error occurred, please try again");
    },
  });

  return { updateMenuItem: mutate, updating: isPending, updated: isSuccess };
};

export { useUpdateMenuItem };
