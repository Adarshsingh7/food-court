/** @format */

import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import NoData from "../../ui/NoData";
import { CartItemType } from "../../types/cartType";
import QuantityButton from "../../components/QuantityButtons";
import { order } from "./order";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { emptyCart } from "../../slice/cartSlice";

interface ReciptType {
  name: string;
  email: string;
  contact: string;
}

const CartItem: FC<{ item: CartItemType }> = ({ item }) => {
  const { item: product } = item;

  return (
    <div
      key={product.itemId}
      className="grid grid-cols-1 lg:grid-cols-2 gap-6 border-t border-gray-200 py-6"
    >
      <div className="flex items-center flex-col md:flex-row gap-6 w-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-[140px] rounded-xl object-cover"
        />
        <div className="w-full max-w-sm">
          <h5 className="font-semibold text-xl text-black text-center md:text-left">
            {product.name}
          </h5>
          <p className="font-normal text-lg text-gray-500 my-2 text-center md:text-left">
            {product.category}
          </p>
          <h6 className="font-medium text-lg text-indigo-600 text-center md:text-left">
            ₹{product.price.toFixed(2)}
          </h6>
        </div>
      </div>

      <div className="flex items-center flex-col md:flex-row gap-6 w-full">
        <h6 className="font-bold text-2xl text-black w-full text-center">
          0
          <span className="text-sm text-gray-300 ml-3 lg:hidden">
            (Delivery Charge)
          </span>
        </h6>

        {/* Quantity Controls */}
        <div className="flex items-center justify-center gap-2">
          <QuantityButton itemId={item.itemId} quantity={item.quantity} />
        </div>

        <h6 className="font-bold text-2xl text-indigo-600 w-full text-center">
          ₹{(product.price * item.quantity).toFixed(2)}
        </h6>
      </div>
    </div>
  );
};

const CartSummary: FC<{ amount: number }> = ({ amount }) => {
  return (
    <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
      <div className="flex justify-between mb-6">
        <p className="text-xl text-gray-400">Sub Total</p>
        <h6 className="text-xl text-gray-900">₹{amount.toFixed(2)}</h6>
      </div>
      <div className="flex justify-between pb-6 border-gray-200">
        <p className="text-xl text-gray-400">Delivery Charge</p>
        <h6 className="text-xl text-gray-900">0</h6>
      </div>
      <div className="flex justify-between pb-6 border-b border-gray-200">
        <p className="text-xl text-gray-400">Discount</p>
        <h6 className="text-xl text-gray-900">0</h6>
      </div>
      <div className="flex justify-between py-6">
        <p className="text-2xl font-medium text-gray-900">Total</p>
        <h6 className="text-2xl font-medium text-indigo-500">
          ₹{amount.toFixed(2)}
        </h6>
      </div>
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

  if (!cartItems.length) return <NoData />;

  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
        <h2 className="font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
          Food Plate
        </h2>

        {/* Cart Table Header */}
        <CartHeader />

        {/* Cart Items */}
        {cartItems.map((item) => (
          <CartItem item={item} />
        ))}

        {/* Summary Section */}
        <CartSummary amount={amount} />

        {/* Action Buttons */}
        <RecipientDetails items={cartItems} amount={amount} />
        {/* <PlaceOrder
					items={cartItems}
					amount={amount}
				/> */}
      </div>
    </section>
  );
};

const RecipientDetails: FC<{
  items: CartItemType[];
  amount: number;
}> = ({ items, amount }) => {
  const { register, handleSubmit } = useForm<ReciptType>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function submitForm(data: ReciptType) {
    console.log(data);
    const response = await order.createOrder({
      totalAmount: amount,
      status: "new",
      paymentStatus: "pending",
      delivery: "dine-in",
      items: items.map((item) => ({
        menuItem: item.item._id + "",
        price: item.item.price,
        quantity: item.quantity,
      })),
      recipientName: data.name,
      recipientEmail: data.email,
      recipientPhoneNumber: data.contact,
    });
    if (response) {
      dispatch(emptyCart());
      navigate(`/order/${response._id}`);
    }
  }

  return (
    <div className="p-4 mx-auto max-w-xl bg-white font-[sans-serif]">
      <h1 className="text-3xl text-gray-800 font-extrabold text-center">
        Enter Recipient Details
      </h1>
      <form onSubmit={handleSubmit(submitForm)} className="mt-8 space-y-4">
        <input
          type="text"
          {...register("name", { required: true })}
          placeholder="Name"
          className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
        />
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="username@email.com"
          className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
        />
        <input
          type="text"
          {...register("contact", { required: true })}
          placeholder="+123456789"
          className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

const CartHeader: FC = () => {
  return (
    <div className="hidden lg:grid grid-cols-2 py-6">
      <div className="font-normal text-xl leading-8 text-gray-500">Product</div>
      <div className="font-normal text-xl leading-8 text-gray-500 flex justify-between">
        <span className="w-full max-w-[200px] text-center">
          Delivery Charge
        </span>
        <span className="w-full max-w-[260px] text-center">Quantity</span>
        <span className="w-full max-w-[200px] text-center">Total</span>
      </div>
    </div>
  );
};

export default ShoppingCart;
