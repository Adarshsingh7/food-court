import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MenuItem } from "../../types/menuType";
import { menu } from "../menuFeatures/menuFeatures";

const useUpdateMenuItem = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: ({ id, body }: { id: string; body: Partial<MenuItem> }) =>
      menu.updateMenu(id, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["menuItem"] });
    },
  });

  return { updateMenuItem: mutate, updating: isPending, updated: isSuccess };
};

export { useUpdateMenuItem };
