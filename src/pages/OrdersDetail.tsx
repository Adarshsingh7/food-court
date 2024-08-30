import OrderDetailList from "../components/OrderDetailList";
import { Order } from "../types/cartType";

const FAKE_ORDERLISTP: Order[] = [
  {
    id: 1,
    address: "133.32 abc, xyz",
    phone: 9231263831,
    customerName: "John Doe",
    status: 'Ordered',
    orderItem: [
      {
        productName: "South Indian Idly",
        price: 20,
        unit: "plate",
        quantity: 2,
      },
    ],
  },
  {
    id: 2,
    address: "245.12 pqr, lmn",
    phone: 8234578891,
    customerName: "Jane Smith",
    status: 'Shiped',

    orderItem: [
      {
        productName: "Paneer Butter Masala",
        price: 150,
        unit: "plate",
        quantity: 1,
      },
      {
        productName: "Garlic Naan",
        price: 30,
        unit: "piece",
        quantity: 4,
      },
    ],
  },
  {
    id: 3,
    address: "984.45 stu, opq",
    phone: 9876543210,
    customerName: "Robert Brown",
    status: 'Cancled',
    orderItem: [
      {
        productName: "Veg Biryani",
        price: 120,
        unit: "plate",
        quantity: 3,
      },
    ],
  },
  {
    id: 4,
    address: "321.65 mno, xyz",
    phone: 8123456789,
    customerName: "Emily Davis",
    status: 'Delievered',
    orderItem: [
      {
        productName: "Masala Dosa",
        price: 50,
        unit: "plate",
        quantity: 2,
      },
      {
        productName: "Sambar Vada",
        price: 35,
        unit: "piece",
        quantity: 3,
      },
    ],
  },
];

function OrdersDetail() {
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-5xl">
          <div className="gap-4 sm:flex sm:items-center sm:justify-between">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Orders Detail</h2>
          </div>
          <div className="mt-6 flow-root sm:mt-8">
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {FAKE_ORDERLISTP.map(order => <OrderDetailList key={order.id} order={order} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrdersDetail;
