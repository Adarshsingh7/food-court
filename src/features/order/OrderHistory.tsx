import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BackdropLoader from "../../components/BackdropLoader";
import { order } from "../order/order";
import ErrorPage from "../../pages/ErrorPage";
import NoData from "../../ui/NoData";
import {
  appendLocalEntry,
  getAllLocalEntries,
} from "../../utils/manageLocalEntry";
import { Order } from "../../types/orderType";
import { formatDate } from "../../utils/dateManager";
import toast from "react-hot-toast";

interface SelectProps {
  label: string;
  onSelect?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  id: string;
  options: { value: string | number; label: string }[];
}

interface OrderDetailProps {
  label: string;
  value: number | string;
  link?: string;
}
interface ButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: "button" | "submit" | "reset";
  className: string;
  href?: string;
}

const Select: React.FC<SelectProps> = ({ label, id, options, onSelect }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="sr-only mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <select
        id={id}
        className="block w-full min-w-[8rem] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
        onChange={onSelect}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

const OrderDetail: React.FC<OrderDetailProps> = ({ label, value, link }) => (
  <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
    <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
      {label}:
    </dt>
    <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
      {link ? (
        <a href={link} className="hover:underline">
          {value}
        </a>
      ) : (
        value
      )}
    </dd>
  </dl>
);

const Button: React.FC<ButtonProps> = ({
  label,
  type = "button",
  className,
  onClick,
  href,
}) =>
  href ? (
    <Link to={href} className={className}>
      {label}
    </Link>
  ) : (
    <button type={type} className={className} onClick={onClick}>
      {label}
    </button>
  );

export default function History() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [orderStatus, setOrderStatus] = useState<string>("");
  const [history, setHistory] = useState(1);
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["orders"],
    queryFn: order.getAllOrders,
  });

  const { mutate: duplicateOrder } = useMutation({
    mutationFn: (currentOrder: Order) =>
      order.createOrder({
        ...currentOrder,
        _id: undefined,
        status: "new",
        paymentStatus: "pending",
        createdAt: undefined,
      }),
    onSuccess: (data) => {
      appendLocalEntry(data._id);
      toast.success("Order duplicated successfully");
      refetch();
    },
  });

  useEffect(() => {
    if (data) {
      const prevOrders = getAllLocalEntries(history);
      const filteredOrders = data
        .filter((o) => prevOrders.includes(o._id))
        .filter((o) => (orderStatus ? o.status === orderStatus : true));
      setOrders(filteredOrders);
    }
  }, [data, history, orderStatus]);

  if (isLoading) return <BackdropLoader />;
  if (error) return <ErrorPage message="An error occurred. Please try again" />;

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16 min-h-screen">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-5xl">
          <div className="gap-4 sm:flex sm:items-center sm:justify-between">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              My orders
            </h2>
            <div className="mt-6 gap-4 space-y-4 sm:mt-0 sm:flex sm:items-center sm:justify-end sm:space-y-0">
              <Select
                label="Select order type"
                id="order-type"
                onSelect={(e) => setOrderStatus(e.target.value)}
                options={[
                  { value: "", label: "All orders" },
                  { value: "new", label: "New orders" },
                  { value: "preparing", label: "Preparing Orders" },
                  { value: "completed", label: "Completed Orders" },
                  { value: "cancelled", label: "Cancelled Orders" },
                ]}
              />
              <span className="inline-block text-gray-500 dark:text-gray-400">
                {" "}
                from{" "}
              </span>
              <Select
                label="Select duration"
                id="duration"
                onSelect={(e) => setHistory(+e.target.value)}
                options={[
                  { value: 1, label: "today" },
                  { value: 2, label: "last 2 days" },
                  { value: 3, label: "last 3 days" },
                  { value: 4, label: "last 4 days" },
                  { value: 7, label: "this week" },
                ]}
              />
            </div>
          </div>
          <div className="mt-6 flow-root sm:mt-8">
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {!orders.length && <NoData message="No orders found" />}
              {orders.map((order, index) => (
                <div
                  key={index}
                  className="flex flex-wrap items-center gap-y-4 py-6"
                >
                  <OrderDetail
                    label="Order ID"
                    value={order._id.slice(-10)}
                    link="#"
                  />
                  <OrderDetail
                    label="Date"
                    value={formatDate(order.createdAt)}
                  />
                  <OrderDetail label="Price" value={order.totalAmount + ""} />
                  <OrderDetail label="Status" value={order.status} />
                  <div className="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4">
                    <Button
                      label="Order again"
                      onClick={() => duplicateOrder(order)}
                      className="w-full rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 lg:w-auto"
                    />
                    <Button
                      label="View details"
                      href={`/order/${order._id}`}
                      className="w-full inline-flex justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 lg:w-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
