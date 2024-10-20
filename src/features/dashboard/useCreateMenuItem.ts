import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MenuItem } from "../../types/menuType";
import { menu } from "../menuFeatures/menuFeatures";

const useCreateMenuItem = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (body: Partial<MenuItem>) => menu.createMenu(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["menuItem"] });
    },
  });

  return { createMenuItem: mutate, creating: isPending, created: isSuccess };
};

export { useCreateMenuItem };
