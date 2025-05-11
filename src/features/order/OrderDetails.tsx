import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import NoData from "../../ui/NoData";
import { CartItemType } from "../../types/cartType";
import QuantityButton from "../../components/QuantityButtons";
import { order } from "./order";
import { useForm } from "react-hook-form";
import { useCreateOrder } from "./useCreateOrder";
import BackdropLoader from "../../components/BackdropLoader";
import { Order } from "../../types/orderType";
import { useParams } from "react-router-dom";

interface RecipientType {
  name: string;
  email: string;
  contact: string;
}

const CartItem: FC<{ item: CartItemType }> = ({ item }) => {
  const { item: product } = item;

  return (
    <div className="flex flex-col p-4 border-b border-gray-200">
      <div className="flex items-center gap-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-16 h-16 object-cover rounded-lg"
        />
        <div className="flex-1">
          <h5 className="font-medium text-gray-900">{product.name}</h5>
          <p className="text-sm text-gray-500">{product.category}</p>
          <p className="text-indigo-600 font-medium mt-1">
            ₹{product.price.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <QuantityButton itemId={item.itemId} quantity={item.quantity} />
        </div>
        <div className="text-right">
          <p className="text-gray-500 text-sm">Total</p>
          <p className="text-indigo-600 font-semibold">
            ₹{(product.price * item.quantity).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

const CartSummary: FC<{ amount: number }> = ({ amount }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4 mt-4">
      <div className="flex justify-between py-2">
        <span className="text-gray-500">Subtotal</span>
        <span className="font-medium">₹{amount.toFixed(2)}</span>
      </div>
      <div className="flex justify-between py-2">
        <span className="text-gray-500">Delivery</span>
        <span className="font-medium">₹0.00</span>
      </div>
      <div className="flex justify-between py-2">
        <span className="text-gray-500">Discount</span>
        <span className="font-medium">₹0.00</span>
      </div>
      <div className="flex justify-between pt-3 border-t border-gray-200 mt-2">
        <span className="font-medium text-gray-900">Total</span>
        <span className="font-semibold text-indigo-600">
          ₹{amount.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

const RecipientForm: FC<{
  items: CartItemType[];
  amount: number;
}> = ({ items, amount }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // setError,
    clearErrors,
  } = useForm<RecipientType>();
  const { orderItem, ordering } = useCreateOrder();
  const [formError, setFormError] = useState<string | null>(null);
  const { restroId } = useParams();

  async function submitForm(data: RecipientType) {
    try {
      clearErrors();
      setFormError(null);
      const orderData: Partial<Order> = {
        totalAmount: amount,
        status: "new",
        paymentStatus: "pending",
        delivery: "dine-in",
        items: items.map((item) => ({
          menuItem: item.item._id,
          price: item.item.price,
          quantity: item.quantity,
        })),
        recipientName: data.name,
        recipientEmail: data.email,
        recipientPhoneNumber: data.contact,
        owner: restroId,
      };
      orderItem(orderData);
    } catch (error) {
      setFormError("Failed to place the order. Please try again.");
    }
  }

  if (ordering) return <BackdropLoader />;

  return (
    <div className="mt-6 bg-white rounded-lg">
      <h2 className="font-medium text-lg mb-4">Recipient Details</h2>
      {formError && (
        <div className="text-red-600 text-sm mb-3">{formError}</div>
      )}
      <form onSubmit={handleSubmit(submitForm)} className="space-y-3">
        <div>
          <input
            type="text"
            {...register("name", { required: "Full Name is required" })}
            placeholder="Full Name"
            className={`w-full rounded-md py-2 px-3 border text-sm focus:outline-none focus:ring-2 ${
              errors.name
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-indigo-500"
            }`}
          />
          {errors.name && (
            <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <input
            type="email"
            {...register("email")}
            placeholder="Email Address"
            className={`w-full rounded-md py-2 px-3 border text-sm focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-indigo-500"
            }`}
          />
          {errors.email && (
            <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <input
            type="tel"
            {...register("contact", {
              required: "Phone Number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Phone number must be 10 digits",
              },
            })}
            placeholder="Phone Number"
            className={`w-full rounded-md py-2 px-3 border text-sm focus:outline-none focus:ring-2 ${
              errors.contact
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-indigo-500"
            }`}
          />
          {errors.contact && (
            <p className="text-red-600 text-xs mt-1">
              {errors.contact.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

const ShoppingCart: FC = () => {
  const { amount, items: cartItems } = useSelector(
    (store: RootState) => store.cart,
  );

  useEffect(() => {
    order.getAllOrders();
  }, []);

  if (!cartItems.length) {
    return (
      <div className="min-h-screen">
        <NoData />
      </div>
    );
  }

  return (
    <section className="max-w-lg mx-auto px-4 py-6 md:py-8">
      <h1 className="text-xl font-bold text-center mb-4">Food Plates</h1>

      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b border-gray-200">
          <h2 className="font-medium">Your Cart ({cartItems.length} items)</h2>
        </div>

        <div className="max-h-96 overflow-y-auto">
          {cartItems.map((item) => (
            <CartItem key={item.itemId} item={item} />
          ))}
        </div>
      </div>

      <CartSummary amount={amount} />
      <RecipientForm items={cartItems} amount={amount} />
    </section>
  );
};

export default ShoppingCart;
