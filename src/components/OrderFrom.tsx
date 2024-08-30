import { useSelector } from "react-redux"
import { Form } from "react-router-dom"
import { RootState } from "../store";
import { Button } from "./Button";
import { FAKE_USER } from "./AuthRoute";
import { itemType } from "../types/cartType";

interface ElementType {
    itemId: number,
    quantity: number,
    item: itemType
}

function OrderFrom() {
    const cartItem = useSelector((state: RootState) => state.cart.items);

    return (
        <div className="py-6 px-4">
            <h2 className="text-xl font-semibold mb-8">Please fill the details before placing</h2>
            <Form method="POST">
                <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
                    <label className="sm:basis-40">First Name:</label>
                    <div className="flex flex-col grow">
                        <input className="input w-1/2" type="text" name="customerName" defaultValue={FAKE_USER.userName} required />
                    </div>
                </div>
                <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
                    <label className="sm:basis-40">Phone number:</label>
                    <div className="flex flex-col grow">
                        <input className="input w-1/2" type="tel" name="phone" defaultValue={FAKE_USER.phone} required />
                    </div>
                </div>
                <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center relative">
                    <label className="sm:basis-40">Address:</label>
                    <div className="grow">
                        <input className="input w-1/2" type="text" name="address" defaultValue={FAKE_USER.address} required />
                    </div>
                </div>
                <input type="hidden" value={JSON.stringify(cartItem)} name="orderedItem" />
                <Button>Confirm your order</Button>
            </Form>
        </div>
    )
}

export const action = async ({ request }: { request: Request }) => {
    const data = Object.fromEntries(await request.formData())
    const parsedData = {
        ...data,
        orderedItem: data.orderedItem instanceof File ? data.orderedItem.name : JSON.parse(data.orderedItem),
    }
    const order = {
        ...parsedData,
        status: 'Ordered',
        orderedItem: parsedData.orderedItem.map((ele: ElementType) => {
            return {
                quantity: ele.quantity,
                productName: ele.item.productName,
                price: ele.item.price,
            }
        })
    }
    console.log(order)
    return null
}

export default OrderFrom
