import { RootState } from "../store";
import { useSelector } from "react-redux"

import OrderItem from "./OrderItem"
import OrderFrom from "./OrderFrom";

function CreateOrder() {
  const cart = useSelector((state: RootState) => state.cart);
  // if(!cart.items.length) return <p>please first order something</p>
  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Order status</h2>
      </div>
      <ul className="dive-stone-200 divide-y border-b border-t">
        {cart.items.map((item) => (
          <OrderItem key={item.itemId} orderItem={item} />
        ))}
      </ul>
      <div className="space-y-2 bg-stone-200 px-6 py-5">
        <p className="font-bold">
          To pay on delivery:&nbsp; ₹ {cart.amount}
        </p>
      </div>
      <OrderFrom/>
    </div>
  )
}

export default CreateOrder
