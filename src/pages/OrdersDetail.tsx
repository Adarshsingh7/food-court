import OrderDetailList from "../components/OrderDetailList";
import { Order } from "../types/cartType";

const FAKE_ORDERLISTP: Order[] = [
  {
    id: 1,
    address: "133.32 abc, xyz",
    phone: 9231263831,
    customerName: "John Doe",
    orderItem: [
      {
        item: {
          id: 1,
          productName: "South Indian Idly",
          price: 20,
          src: "/idli.jpg",
          description: "South Indian idly",
          discount: 10,
          quantity: 15,
          unit: "plate",
          productType: "food",
          tags: ["south indian", "breakfast"],
        },
        quantity: 2,
      },
    ],
  },
  {
    id: 2,
    address: "245.12 pqr, lmn",
    phone: 8234578891,
    customerName: "Jane Smith",
    orderItem: [
      {
        item: {
          id: 2,
          productName: "Paneer Butter Masala",
          price: 150,
          src: "/paneer-butter-masala.jpg",
          description: "Delicious paneer butter masala",
          discount: 15,
          quantity: 10,
          unit: "plate",
          productType: "food",
          tags: ["indian", "vegetarian"],
        },
        quantity: 1,
      },
      {
        item: {
          id: 3,
          productName: "Garlic Naan",
          price: 30,
          src: "/garlic-naan.jpg",
          description: "Soft garlic naan",
          discount: 0,
          quantity: 50,
          unit: "piece",
          productType: "food",
          tags: ["indian", "bread"],
        },
        quantity: 4,
      },
    ],
  },
  {
    id: 3,
    address: "984.45 stu, opq",
    phone: 9876543210,
    customerName: "Robert Brown",
    orderItem: [
      {
        item: {
          id: 4,
          productName: "Veg Biryani",
          price: 120,
          src: "/veg-biryani.jpg",
          description: "Spicy and flavorful veg biryani",
          discount: 5,
          quantity: 20,
          unit: "plate",
          productType: "food",
          tags: ["indian", "rice", "vegetarian"],
        },
        quantity: 3,
      },
    ],
  },
  {
    id: 4,
    address: "321.65 mno, xyz",
    phone: 8123456789,
    customerName: "Emily Davis",
    orderItem: [
      {
        item: {
          id: 5,
          productName: "Masala Dosa",
          price: 50,
          src: "/masala-dosa.jpg",
          description: "Crispy masala dosa with potato filling",
          discount: 10,
          quantity: 30,
          unit: "plate",
          productType: "food",
          tags: ["south indian", "breakfast"],
        },
        quantity: 2,
      },
      {
        item: {
          id: 6,
          productName: "Sambar Vada",
          price: 35,
          src: "/sambar-vada.jpg",
          description: "Vada served with sambar",
          discount: 5,
          quantity: 40,
          unit: "piece",
          productType: "food",
          tags: ["south indian", "snack"],
        },
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
              {FAKE_ORDERLISTP.map(order => <OrderDetailList order={order}/>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrdersDetail;
