import { CartItemType } from "../types/cartType";

interface OrderItemProps {
    orderItem: CartItemType;
}

const OrderItem: React.FC<OrderItemProps> = ({ orderItem }) => {
    return (
        <li className="py-3 space-y-1">
            <div className="flex items-center justify-between text-sm gap-4">
                <p >
                    <span className="font-bold">{orderItem.quantity}&times;</span> {orderItem.item.productName}
                </p>
                <p className="font-bold">₹ {orderItem.item.price * orderItem.quantity}</p>
            </div>
        </li>
    )
}

export default OrderItem
