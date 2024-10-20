import { useQuery } from "@tanstack/react-query";
import { order } from "../order/order";
import BackdropLoader from "../../components/BackdropLoader";
import FeaturedTable from "../../components/FeaturedTable";
import NoData from "../../ui/NoData";
import { Order } from "../../types/orderType";
import Modal from "../../components/Modal";
import { useEffect, useState } from "react";
import { useOrderProducts } from "../../hooks/useOrderProducts";
import { MenuItem } from "../../types/menuType";
import { useUpdateOrder } from "./useUpdateOrder";

function filterOrders(data: Order[]) {
  return data.map((order) => ({
    id: order._id,
    payment: order.paymentStatus,
    email: order.recipientEmail,
    name: order.recipientName,
    contact: order.recipientPhoneNumber,
    status: order.status,
    totalAmount: order.totalAmount,
  }));
}

function DashboardOverview() {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [activeOrder, setActiveOrder] = useState<Order | null>(null);
  const { data, isLoading, error } = useQuery({
    queryKey: ["orders"],
    queryFn: order.getAllOrders,
  });

  function openOrderOverview(index: number) {
    if (data && data[index]) {
      setActiveOrder(data[index]);
      setEditModalOpen(true);
    }
  }

  if (isLoading) return <BackdropLoader />;
  if (!data?.length) return <NoData />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <Modal open={editModalOpen} handleClose={() => setEditModalOpen(false)}>
        <EditOrderModal
          order={activeOrder}
          onClose={() => setEditModalOpen(false)}
        />
      </Modal>
      <h1 className="text-3xl font-bold mb-5">Orders</h1>
      <div>
        <FeaturedTable
          data={filterOrders(data)}
          fields={[
            "OrderID",
            "paymentStatus",
            "recipientEmail",
            "recipientName",
            "recipientPhoneNumber",
            "status",
            "totalAmount",
            "Actions",
          ]}
          action={(item) => openOrderOverview(item)}
        />
      </div>
    </div>
  );
}

function EditOrderModal({
  order,
  onClose,
}: {
  order: Order | null;
  onClose: () => void;
}) {
  const { products }: { products: MenuItem[] } = useOrderProducts(order?._id);
  if (!products || !order) return null;
  return (
    <div className="flex flex-col gap-4 w-[80vw] h-[70vh] m-auto bg-gray-50 overflow-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-5">Ordered Products</h1>
        <div className="grid grid-cols-3 gap-4">
          {products.map((product, i) => (
            <ProductCard
              key={product._id}
              product={product}
              quantity={order.items[i].quantity}
            />
          ))}
        </div>
      </div>
      <OrderDetails order={order} onClose={onClose} />
    </div>
  );
}

function OrderDetails({
  order,
  onClose,
}: {
  order: Order;
  onClose: () => void;
}) {
  const { updateOrder, updatingOrder, updated } = useUpdateOrder();

  const handleUpdateOrderStatus = ({
    orderStatus,
    paymentStatus,
  }: {
    orderStatus: orderStatusType;
    paymentStatus: paymentStatusType;
  }) => {
    updateOrder({
      id: order._id,
      body: {
        status: orderStatus,
        paymentStatus,
      },
    });
  };

  useEffect(() => {
    if (updated) onClose();
  }, [updated, onClose]);

  if (updatingOrder) return <BackdropLoader />;
  if (!order) return null;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-5">Details</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h1 className="text-xl font-bold mb-5">Recipient Details</h1>
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-lg font-bold">Name</h1>
              <p>{order.recipientName}</p>
            </div>
            <div>
              <h1 className="text-lg font-bold">Email</h1>
              <p>{order.recipientEmail}</p>
            </div>
            <div>
              <h1 className="text-lg font-bold">Phone Number</h1>
              <p>{order.recipientPhoneNumber}</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-5">Order Details</h1>
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-lg font-bold">Payment Status</h1>
              <select
                value={order.paymentStatus}
                className="w-[200px] p-1 rounded-sm"
                onChange={(e) =>
                  handleUpdateOrderStatus({
                    orderStatus: order.status,
                    paymentStatus: e.target.value,
                  })
                }
              >
                {["pending", "paid", "failed"].map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <h1 className="text-lg font-bold">Order Status</h1>
              <select
                className="w-[200px] p-1 rounded-sm"
                value={order.status}
                onChange={(e) =>
                  handleUpdateOrderStatus({
                    orderStatus: e.target.value,
                    paymentStatus: order.paymentStatus,
                  })
                }
              >
                {["new", "preparing", "completed", "cancelled"].map(
                  (status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ),
                )}
              </select>
            </div>
            <div>
              <h1 className="text-lg font-bold">Total Amount</h1>
              <p>{order.totalAmount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({
  product,
  quantity,
}: {
  product: MenuItem;
  quantity: number;
}) {
  if (!product) return null;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <a href="#">
        <img
          className="rounded-t-lg object-cover w-full h-48"
          src={product.image}
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {product.name} X {quantity}
          </h5>
        </a>
      </div>
    </div>
  );
}

export default DashboardOverview;
