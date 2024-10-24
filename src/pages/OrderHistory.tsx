import React, { useState, useEffect } from "react";

// Define types for props
interface SelectProps {
  label: string;
  id: string;
  options: { value: string; label: string }[];
}

interface OrderDetailProps {
  label: string;
  value: string;
  link?: string;
}

interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  className: string;
  href?: string;
}

// Reusable Select component
const Select: React.FC<SelectProps> = ({ label, id, options }) => (
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
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

// Reusable OrderDetail component
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

// Reusable Button component
const Button: React.FC<ButtonProps> = ({
  label,
  type = "button",
  className,
  href,
}) =>
  href ? (
    <a href={href} className={className}>
      {label}
    </a>
  ) : (
    <button type={type} className={className}>
      {label}
    </button>
  );

export default function History() {
  const [orders, setOrders] = useState<any[]>([
    {
      id: "12345",
      date: "2023-01-01",
      price: "$100.00",
      status: "Confirmed",
    },
    {
      id: "67890",
      date: "2023-02-15",
      price: "$200.00",
      status: "In transit",
    },
    {
      id: "54321",
      date: "2023-03-10",
      price: "$150.00",
      status: "Cancelled",
    },
  ]);

  useEffect(() => {
    // Fetch data from API
    fetch("/api/orders")
      .then((response) => response.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
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
                options={[
                  { value: "", label: "All orders" },
                  { value: "pre-order", label: "Pre-order" },
                  { value: "transit", label: "In transit" },
                  { value: "confirmed", label: "Confirmed" },
                  { value: "cancelled", label: "Cancelled" },
                ]}
              />
              <span className="inline-block text-gray-500 dark:text-gray-400">
                {" "}
                from{" "}
              </span>
              <Select
                label="Select duration"
                id="duration"
                options={[
                  { value: "", label: "this week" },
                  { value: "this month", label: "this month" },
                  { value: "last 3 months", label: "the last 3 months" },
                  { value: "last 6 months", label: "the last 6 months" },
                  { value: "this year", label: "this year" },
                ]}
              />
            </div>
          </div>
          <div className="mt-6 flow-root sm:mt-8">
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {orders.map((order, index) => (
                <div
                  key={index}
                  className="flex flex-wrap items-center gap-y-4 py-6"
                >
                  <OrderDetail label="Order ID" value={order.id} link="#" />
                  <OrderDetail label="Date" value={order.date} />
                  <OrderDetail label="Price" value={order.price} />
                  <OrderDetail label="Status" value={order.status} />
                  <div className="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4">
                    <Button
                      label="Order again"
                      className="w-full rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 lg:w-auto"
                    />
                    <Button
                      label="View details"
                      href="#"
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
