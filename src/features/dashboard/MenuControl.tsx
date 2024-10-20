import { useQuery } from "@tanstack/react-query";
import { FC, useEffect, useState } from "react";
import { MenuItem } from "../../types/menuType";
import { useForm, SubmitHandler } from "react-hook-form";
import FeaturedTable from "../../components/FeaturedTable";
import { Button } from "@mui/material";
import Modal from "../../components/Modal";
import { useCreateMenuItem } from "./useCreateMenuItem";
import BackdropLoader from "../../components/BackdropLoader";
import { useDeleteMenuItem } from "./useDeleteMenu";
import { useUpdateMenuItem } from "./useUpdateMenuItem";

const filterMenu = (menuItems: MenuItem[]) =>
  menuItems.map((menuItem) => ({
    ID: menuItem.itemId,
    name: menuItem.name,
    price: menuItem.price,
    category: menuItem.category,
    stock: menuItem.stock,
  }));

const MenuControl: FC = () => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [activeEditMenuItem, setActiveMenuItem] = useState<MenuItem | null>(
    null,
  );
  const { data } = useQuery<MenuItem[]>({ queryKey: ["menuItem"] });

  function handleEdit(idx: number) {
    if (!data) return;
    const item = data[idx];
    setActiveMenuItem(item);
    setEditModalOpen(true);
  }

  if (!data) return null;
  return (
    <div className="mb-10">
      <Modal
        open={editModalOpen}
        handleClose={() => {
          setEditModalOpen(false);
          setActiveMenuItem(null);
        }}
      >
        <EditMenuModal
          key={activeEditMenuItem?._id || Math.random()}
          onClose={() => {
            setEditModalOpen(false);
          }}
          item={activeEditMenuItem}
        />
      </Modal>
      <div className="flex justify-between mb-5">
        <h1 className="text-3xl font-bold">Menu</h1>
        <Button variant="outlined" onClick={() => setEditModalOpen(true)}>
          New
        </Button>
      </div>
      <div>
        <FeaturedTable
          data={filterMenu(data)}
          fields={["ID", "name", "price", "category", "stock", "Actions"]}
          action={(idx) => handleEdit(idx)}
        />
      </div>
    </div>
  );
};

const EditMenuModal: FC<EditMenuModalProps> = ({ onClose, item }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Partial<MenuItem>>();
  const { createMenuItem, creating, created } = useCreateMenuItem();
  const { deleteMenuItem, deleted, deleting } = useDeleteMenuItem();
  const { updateMenuItem, updated, updating } = useUpdateMenuItem();

  const onSubmit: SubmitHandler<Partial<MenuItem>> = async (data) => {
    if (item) updateMenuItem({ id: item._id, body: data });
    else createMenuItem(data);
  };

  const handleDeleteItem = () => {
    if (!item) return;
    deleteMenuItem(item._id);
  };

  useEffect(() => {
    if (created || deleted || updated) onClose();
  }, [created, deleted, updated, onClose]);

  if (creating || deleting || updating) return <BackdropLoader />;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-5 mb-5">
        <div>
          <label>Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            autoComplete="off"
            className="w-full border border-gray-300 rounded-md p-2"
            defaultValue={item?.name}
          />
          {errors.name && <span>This field is required</span>}
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            autoComplete="off"
            {...register("description", { required: true })}
            className="w-full border border-gray-300 rounded-md p-2"
            defaultValue={item?.description}
          />
          {errors.description && <span>This field is required</span>}
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            autoComplete="off"
            {...register("price", { required: true })}
            className="w-full border border-gray-300 rounded-md p-2"
            defaultValue={item?.price}
          />
          {errors.price && <span>This field is required</span>}
        </div>
        <div>
          <label>Stock</label>
          <input
            type="number"
            autoComplete="off"
            defaultValue={item?.stock}
            {...register("stock", { required: true })}
            className="w-full border border-gray-300 rounded-md p-2"
          />
          {errors.stock && <span>This field is required</span>}
        </div>
        <div>
          <label>Preparation Time</label>
          <input
            type="number"
            autoComplete="off"
            {...register("preparationTime", { required: true })}
            defaultValue={item?.preparationTime}
            className="w-full border border-gray-300 rounded-md p-2"
          />
          {errors.preparationTime && <span>This field is required</span>}
        </div>
        <div>
          <label>Category:</label>
          <select
            defaultValue={item?.category}
            className="p-1 w-full border border-gray-300 rounded-md"
            {...register("category", { required: true })}
          >
            {[
              "appetizer",
              "main course",
              "dessert",
              "beverages",
              "snacks",
              "vegetable",
            ].map((el) => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
            {errors.category && <span>This field is required</span>}
          </select>
        </div>
        <div>
          <label>Image URL</label>
          <input
            type="text"
            autoComplete="off"
            defaultValue={item?.image}
            {...register("image", { required: true })}
            className="w-full border border-gray-300 rounded-md p-2"
          />
          {errors.image && <span>This field is required</span>}
        </div>
      </div>
      <div className="flex gap-5">
        <Button type="submit" variant="contained">
          {item ? "Update" : "Save"}
        </Button>

        {item && (
          <Button
            type="button"
            onClick={handleDeleteItem}
            color="error"
            variant="contained"
          >
            delete
          </Button>
        )}
      </div>
    </form>
  );
};

interface EditMenuModalProps {
  onClose: () => void;
  item: MenuItem | null;
}
21;

export default MenuControl;
