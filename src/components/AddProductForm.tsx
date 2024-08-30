import { Button } from "./Button";

interface AddProductFormProps {
    onClose: () => void;
}

function AddProductForm({ onClose }: AddProductFormProps) {
    return (
        <form className="max-w-full md:h-[33rem] h-full mx-auto p-6 bg-transparent overflow-auto rounded-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add Product</h1>

            <div className="mb-4">
                <label htmlFor="productName" className="block text-gray-700 font-semibold mb-2">Product Name</label>
                <input type="text" id="productName" className="w-full p-3 bg-gray-50 border-b-2 rounded-md" placeholder="Enter product name" required />
            </div>

            <div className="mb-4">
                <label htmlFor="src" className="block text-gray-700 font-semibold mb-2">Image Source (URL or Upload)</label>
                <input type="file" id="src" className="w-full p-3 rounded-md" accept=".jpg, .jpeg, .png, .gif, .bmp" multiple={false} />
            </div>

            <div className="mb-4">
                <label htmlFor="unit" className="block text-gray-700 font-semibold mb-2">Unit</label>
                <select id="unit" className="w-full p-3 bg-gray-50 border-b-2 rounded-md" required>
                    <option value="piece">Piece</option>
                    <option value="plate">Plate</option>
                    <option value="kg">Kg</option>
                    <option value="litre">Litre</option>
                    <option value="dozen">Dozen</option>
                    <option value="pack">Pack</option>
                    <option value="box">Box</option>
                    <option value="bottle">Bottle</option>
                    <option value="can">Can</option>
                    <option value="bag">Bag</option>
                    <option value="sachet">Sachet</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">Description</label>
                <textarea id="description" className="w-full p-3 bg-gray-50 border-b-2 rounded-md" placeholder="Enter product description" required></textarea>
            </div>

            <div className="mb-4">
                <label htmlFor="price" className="block text-gray-700 font-semibold mb-2">Price</label>
                <input type="number" id="price" className="w-full p-3 bg-gray-50 border-b-2rounded-md" placeholder="Enter price" required />
            </div>

            <div className="mb-4">
                <label htmlFor="productType" className="block text-gray-700 font-semibold mb-2">Product Type</label>
                <select id="productType" className="w-full p-3 bg-gray-50 border-b-2 rounded-md" required>
                    <option value="food">Food</option>
                    <option value="vegetable">Vegetable</option>
                    <option value="fruit">Fruit</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="tags" className="block text-gray-700 font-semibold mb-2">Tags (comma-separated)</label>
                <input type="text" id="tags" className="w-full p-3 bg-gray-50 border-b-2 rounded-md" placeholder="Enter tags, e.g., organic, fresh" />
            </div>

            <div className="mb-4">
                <label htmlFor="quantity" className="block text-gray-700 font-semibold mb-2">Quantity</label>
                <input type="number" id="quantity" className="w-full p-3 bg-gray-50 border-b-2 rounded-md" placeholder="Enter quantity" required />
            </div>

            <div className="mb-4">
                <label htmlFor="discount" className="block text-gray-700 font-semibold mb-2">Discount (%)</label>
                <input type="number" id="discount" className="w-full p-3 bg-gray-50 border-b-2 rounded-md" placeholder="Enter discount (optional)" />
            </div>

            <Button onClick={() => onClose?.()}>Add Product</Button>
        </form>
    );
}


export default AddProductForm;