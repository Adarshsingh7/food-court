import { useSelector } from "react-redux"
import { Form } from "react-router-dom"
import { RootState } from "../store";
import { Button } from "./Button";

function OrderFrom() {
    const cartItem = useSelector((state: RootState) => state.cart.items);

    return (
        <div className="py-6 px-4">
            <h2 className="text-xl font-semibold mb-8">Please fill the details before placing</h2>
            <Form method="POST">
                <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
                    <label className="sm:basis-40">First Name:</label>
                    <div className="flex flex-col grow">
                        <input className="input w-1/2" type="text" name="customerName" required />
                    </div>
                </div>
                <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
                    <label className="sm:basis-40">Phone number:</label>
                    <div className="flex flex-col grow">
                        <input className="input w-1/2" type="tel" name="phone" required />
                    </div>
                </div>
                <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center relative">
                    <label className="sm:basis-40">Address:</label>
                    <div className="grow">
                        <input className="input w-1/2" type="text" name="address" required />
                    </div>
                </div>
                <input type="hidden" value={JSON.stringify(cartItem)} name="orderedItem" />
                <Button>Confirm your order</Button>
            </Form>
        </div>
    )
}

export const action = async ({ request }: { request: Request }) => {
    console.log(request)
    const data = Object.fromEntries(await request.formData())
    const order = {
        ...data,
        orderedItem: data.orderedItem instanceof File ? data.orderedItem.name : JSON.parse(data.orderedItem),
    }
    console.log(order)
    return null
}

export default OrderFrom
