import { useState } from "react";
import { Button } from "./Button";
import { Order, OrderItem } from "../types/cartType";

const OrderDetailList = ({ order }: { order: Order }) => {
    const [isOpen, setIsOpen] = useState(false);
    const totalAmount = order.orderItem.reduce(
        (acc, curr) => acc + curr.quantity * curr.price,
        0,
    );

    return (
        <span className="py-3 space-y-1">
            <div className="flex flex-wrap items-center gap-y-4 py-6">
                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                    <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Order ID:</dt>
                    <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                        <a href="#" className="hover:underline">#{order.id}</a>
                    </dd>
                </dl>

                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                    <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Customer Name:</dt>
                    <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">{order.customerName}</dd>
                </dl>

                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                    <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Total Price:</dt>
                    <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">₹{totalAmount}</dd>
                </dl>

                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                    <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Phone Number:</dt>
                    <dd className="me-2 mt-1.5 inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                        {order.phone}
                    </dd>
                </dl>
                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                    <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Address:</dt>
                    <dd className="me-2 mt-1.5 inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                        {order.address}
                    </dd>
                </dl>
                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                    <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Status:</dt>
                    <dd className="me-2 mt-1.5 inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                        {order.status}
                    </dd>
                </dl>

                <div className="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4">
                    <Button onClick={() => setIsOpen(open => !open)}>View details</Button>
                </div>
            </div>
            {isOpen && (
                <ul>
                    {order.orderItem.map((orderItem, idx) => (
                        <SingleOrderList key={idx} orderItem={orderItem} />
                    ))}
                    <span className="mx-12">Update Status:</span>

                    {/* After adding backend order stated is mutated by react query mutation function which called here onChange event */}

                    <select className="px-3 py-2 rounded-lg" disabled={order.status === 'Delievered'} onChange={() => {}}>
                        <option value="Shiped" selected={order.status === 'Shiped'}>Shiped</option>
                        <option value="Delievered" selected={order.status === 'Delievered'}>Delievered</option>
                        <option value="Cancled" selected={order.status === 'Cancled'}>Cancled</option>
                        <option value="Ordered" selected={order.status === 'Ordered'}>Ordered</option>
                    </select>
                </ul>
            )}
        </span>
    );
};

//after making backed end some refactoring has to be done in orderType 

const SingleOrderList = ({ orderItem }: { orderItem: OrderItem }) => {
    return (
        <>
            <li className="py-3 space-y-1 border-b-2 mb-4 ">
                <div className="flex items-center justify-between text-sm gap-4">
                    <p>
                        <span className="font-bold">{orderItem.quantity}&times;</span>{" "}
                        {orderItem.productName}
                    </p>
                    <p className="font-bold">
                        ₹ {orderItem.price * orderItem.quantity}
                    </p>
                </div>
            </li>
        </>
    );
};

export default OrderDetailList;
