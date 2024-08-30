import { FC } from "react";

const OrderDetails = () => {
  return (
    <>
      <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
        {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
        <div className="flex justify-start item-start space-y-2 flex-col">
          <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
            Order #13432
          </h1>
          <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">
            21st Mart 2021 at 10:34 PM
          </p>
        </div>
        <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
          <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8 basis-2/3">
            <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
              <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
                Customer’s Cart
              </p>
              <div className="flex flex-col gap-5">
                <ProductDetails />
                <ProductDetails />
              </div>
            </div>
            <div className="flex justify-center flex-col md:flex-row items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
              <OrderSummary />
              <ShippingDetails />
            </div>
          </div>
          <div className="basis-2/6">
            <OrderTimeline />
          </div>
        </div>
      </div>
    </>
  );
};

const OrderTimeline: FC = () => {
  return (
    <div className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm h-full flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold text-gray-900">Order history</h3>
        <ol className="relative ms-3 border-s border-gray-200">
          <li className="mb-10 ms-6">
            <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
              <svg
                className="h-4 w-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                />
              </svg>
            </span>
            <h4 className="mb-0.5 text-base font-semibold text-gray-900">
              Estimated delivery in 24 Nov 2023
            </h4>
            <p className="text-sm font-normal text-gray-500">
              Products delivered
            </p>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
              <svg
                className="h-4 w-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                />
              </svg>
            </span>
            <h4 className="mb-0.5 text-base font-semibold text-gray-900">
              Today
            </h4>
            <p className="text-sm font-normal text-gray-500">
              Products being delivered
            </p>
          </li>
          <li className="text-primary-700 mb-10 ms-6">
            <span className="bg-primary-100 absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full ring-8 ring-white">
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 11.917 9.724 16.5 19 7.5"
                />
              </svg>
            </span>
            <h4 className="mb-0.5 font-semibold">23 Nov 2023, 15:15</h4>
            <p className="text-sm">Products in the courier's warehouse</p>
          </li>
          <li className="text-primary-700 mb-10 ms-6">
            <span className="bg-primary-100 absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full ring-8 ring-white">
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 11.917 9.724 16.5 19 7.5"
                />
              </svg>
            </span>
            <h4 className="mb-0.5 text-base font-semibold">
              22 Nov 2023, 12:27
            </h4>
            <p className="text-sm">
              Products delivered to the courier - DHL Express
            </p>
          </li>
          <li className="text-primary-700 mb-10 ms-6">
            <span className="bg-primary-100 absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full ring-8 ring-white">
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 11.917 9.724 16.5 19 7.5"
                />
              </svg>
            </span>
            <h4 className="mb-0.5 font-semibold">19 Nov 2023, 10:47</h4>
            <p className="text-sm">Payment accepted - VISA Credit Card</p>
          </li>
          <li className="text-primary-700 ms-6">
            <span className="bg-primary-100 absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full ring-8 ring-white">
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 11.917 9.724 16.5 19 7.5"
                />
              </svg>
            </span>
            <div>
              <h4 className="mb-0.5 font-semibold">19 Nov 2023, 10:45</h4>
              <a href="#" className="text-sm font-medium hover:underline">
                Order placed - Receipt #647563
              </a>
            </div>
          </li>
        </ol>
      </div>
      <div className="gap-4 sm:flex sm:items-center">
        <button
          type="button"
          className="hover:text-primary-700 w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100"
        >
          Cancel the order
        </button>
        <a
          href="#"
          className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 mt-4 flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4 sm:mt-0"
        >
          Order details
        </a>
      </div>
    </div>
  );
};

const ProductDetails: FC = () => {
  return (
    <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
      <div className="pb-4 md:pb-8 w-full md:w-40">
        <img
          className="w-full hidden md:block"
          src="https://i.ibb.co/84qQR4p/Rectangle-10.png"
          alt="dress"
        />
        <img
          className="w-full md:hidden"
          src="https://i.ibb.co/L039qbN/Rectangle-10.png"
          alt="dress"
        />
      </div>
      <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
        <div className="w-full flex flex-col justify-start items-start space-y-8">
          <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
            Premium Quaility Dress
          </h3>
          <div className="flex justify-start items-start flex-col space-y-2">
            <p className="text-sm dark:text-white leading-none text-gray-800">
              <span className="dark:text-gray-400 text-gray-300">Style: </span>{" "}
              Italic Minimal Design
            </p>
            <p className="text-sm dark:text-white leading-none text-gray-800">
              <span className="dark:text-gray-400 text-gray-300">Size: </span>{" "}
              Small
            </p>
            <p className="text-sm dark:text-white leading-none text-gray-800">
              <span className="dark:text-gray-400 text-gray-300">Color: </span>{" "}
              Light Blue
            </p>
          </div>
        </div>
        <div className="flex justify-between space-x-8 items-start w-full">
          <p className="text-base dark:text-white xl:text-lg leading-6">
            $36.00 <span className="text-red-300 line-through"> $45.00</span>
          </p>
          <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">
            01
          </p>
          <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
            $36.00
          </p>
        </div>
      </div>
    </div>
  );
};

const OrderSummary: FC = () => {
  return (
    <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
      <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
        Summary
      </h3>
      <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
        <div className="flex justify-between w-full">
          <p className="text-base dark:text-white leading-4 text-gray-800">
            Subtotal
          </p>
          <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
            $56.00
          </p>
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="text-base dark:text-white leading-4 text-gray-800">
            Discount{" "}
            <span className="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-gray-800 leading-3 text-gray-800">
              STUDENT
            </span>
          </p>
          <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
            -$28.00 (50%)
          </p>
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="text-base dark:text-white leading-4 text-gray-800">
            Shipping
          </p>
          <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
            $8.00
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">
          Total
        </p>
        <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">
          $36.00
        </p>
      </div>
    </div>
  );
};

const ShippingDetails: FC = () => {
  return (
    <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
      <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
        Shipping
      </h3>
      <div className="flex justify-between items-start w-full">
        <div className="flex justify-center items-center space-x-4">
          <div className="w-8 h-8">
            <img
              className="w-full h-full"
              alt="logo"
              src="https://i.ibb.co/L8KSdNQ/image-3.png"
            />
          </div>
          <div className="flex flex-col justify-start items-center">
            <p className="text-lg leading-6 dark:text-white font-semibold text-gray-800">
              DPD Delivery
              <br />
              <span className="font-normal">Delivery with 24 Hours</span>
            </p>
          </div>
        </div>
        <p className="text-lg font-semibold leading-6 dark:text-white text-gray-800">
          $8.00
        </p>
      </div>
      <div className="w-full flex justify-center items-center">
        <button className="hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">
          View Carrier Details
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;
