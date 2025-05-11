import { useQuery } from "@tanstack/react-query";
import { MenuItem } from "../../types/menuType";
import { menu } from "./menuFeatures";

export const useMenu = () => {
  const { data, isLoading, error } = useQuery<MenuItem[]>({
    queryKey: ["menuItem"],
    queryFn: menu.getAllMenu,
  });
  return { data, isLoading, error };
};
