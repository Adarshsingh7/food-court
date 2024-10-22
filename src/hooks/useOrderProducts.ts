import { useQuery } from "@tanstack/react-query";
import { MenuItem } from "../types/menuType";
import { Order } from "../types/orderType";

const useOrderProducts = (
  orderId: string | undefined,
): { products: MenuItem[] } => {
  const { data: orderData } = useQuery<Order[]>({ queryKey: ["orders"] });
  const { data: menuData } = useQuery<MenuItem[]>({ queryKey: ["menuItem"] });
  const matchedOrder = orderData?.find((order) => order._id === orderId);
  if (!orderData || !menuData || !matchedOrder) return { products: [] };
  const products = menuData.filter((data) => {
    const matchedProduct = matchedOrder.items.find(
      (item) => item.menuItem === data._id,
    );
    if (matchedProduct) return true;
    else return false;
  });
  return { products };
};

export { useOrderProducts };
