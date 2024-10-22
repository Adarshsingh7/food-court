import { useMutation, useQueryClient } from "@tanstack/react-query";
import { menu } from "../menuFeatures/menuFeatures";
import toast from "react-hot-toast";

const useDeleteMenuItem = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (id: string) => menu.deleteMenu(id),

    onSuccess: () => {
      toast.success("Menu item deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["menuItem"] });
    },
    onError: (error) => {
      console.log(error.message);
      toast.error("An error occurred, please try again");
    },
  });

  return { deleteMenuItem: mutate, deleting: isPending, deleted: isSuccess };
};

export { useDeleteMenuItem };
