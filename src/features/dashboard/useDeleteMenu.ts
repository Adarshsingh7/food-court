import { useMutation, useQueryClient } from "@tanstack/react-query";
import { menu } from "../menuFeatures/menuFeatures";

const useDeleteMenuItem = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (id: string) => menu.deleteMenu(id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["menuItem"] });
    },
  });

  return { deleteMenuItem: mutate, deleting: isPending, deleted: isSuccess };
};

export { useDeleteMenuItem };
