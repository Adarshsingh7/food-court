/** @format */

"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  PopoverGroup,
  TabGroup,
} from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Cart from "./Cart.tsx";
import { Link } from "react-router-dom";
import { FAKE_USER } from "./AuthRoute.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../store.ts";

const navigation = {
  categories: [
    {
      id: "standard",
      name: "Standard",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc: "role.webp",
          imageAlt: "New vegetarian dishes on display.",
        },
        {
          name: "Salads & Soups",
          href: "#",
          imageSrc: "bean-salad.webp",
          imageAlt: "Assorted vegetarian salads and soups.",
        },
      ],
      sections: [
        {
          id: "meals",
          name: "Meals",
          items: [
            { name: "Veg Thali", href: "#" },
            { name: "Pasta", href: "#" },
            { name: "Pizza", href: "#" },
            { name: "Burgers", href: "#" },
            { name: "Sandwiches", href: "#" },
            { name: "Wraps", href: "#" },
            { name: "Tacos", href: "#" },
            { name: "Noodles", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "sides",
          name: "Sides",
          items: [
            { name: "French Fries", href: "#" },
            { name: "Onion Rings", href: "#" },
            { name: "Spring Rolls", href: "#" },
            { name: "Garlic Bread", href: "#" },
            { name: "Salads", href: "#" },
            { name: "Soups", href: "#" },
          ],
        },
        {
          id: "drinks",
          name: "Drinks",
          items: [
            { name: "Smoothies", href: "#" },
            { name: "Fresh Juices", href: "#" },
            { name: "Mocktails", href: "#" },
            { name: "Iced Teas", href: "#" },
            { name: "Soft Drinks", href: "#" },
            { name: "Coffee", href: "#" },
            { name: "Tea", href: "#" },
          ],
        },
      ],
    },
    {
      id: "gourmet",
      name: "Gourmet",
      featured: [
        {
          name: "Gourmet Special",
          href: "#",
          imageSrc: "fast-food.jpg",
          imageAlt: "Gourmet vegetarian dishes.",
        },
        {
          name: "Chef’s Choice",
          href: "#",
          imageSrc: "/idli.jpg",
          imageAlt: "Chef’s special vegetarian dishes.",
        },
      ],
      sections: [
        {
          id: "meals",
          name: "Meals",
          items: [
            { name: "Paneer Tikka", href: "#" },
            { name: "Vegetable Stir Fry", href: "#" },
            { name: "Mushroom Risotto", href: "#" },
            { name: "Stuffed Bell Peppers", href: "#" },
            { name: "Veg Sushi", href: "#" },
            { name: "Stuffed Zucchini", href: "#" },
            { name: "Gourmet Pasta", href: "#" },
            { name: "Veg Lasagna", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "sides",
          name: "Sides",
          items: [
            { name: "Bruschetta", href: "#" },
            { name: "Stuffed Olives", href: "#" },
            { name: "Mini Veg Kebabs", href: "#" },
            { name: "Veggie Platter", href: "#" },
            { name: "Stuffed Mushrooms", href: "#" },
            { name: "Caprese Salad", href: "#" },
          ],
        },
        {
          id: "desserts",
          name: "Desserts",
          items: [
            { name: "Fruit Salad", href: "#" },
            { name: "Mango Sorbet", href: "#" },
            { name: "Chia Pudding", href: "#" },
            { name: "Vegan Chocolate Cake", href: "#" },
            { name: "Apple Pie", href: "#" },
            { name: "Lemon Tart", href: "#" },
            { name: "Ice Cream", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Home", href: "/", role: ["admin", "user"] },
    { name: "Contact", href: "#", role: ["admin", "user"] },
    { name: "Menu", href: "/menu", role: ["admin", "user"] },
    { name: "Events", href: "#", role: ["admin", "user"] },
    { name: "Ordres", href: "/history", role: ["admin"] },
  ],
};

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { items } = useSelector((store: RootState) => store.cart);

  return (
    <div className="bg-white">
      <Cart open={cartOpen} setOpen={setCartOpen} />
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200"></div>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <Link
                    to={page.href}
                    className="-m-2  p-2 font-medium text-gray-900 block"
                  >
                    {page.name}
                  </Link>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 px-4 py-6"></div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative z-10 bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get Exclusive Offers & Updates from Our Store
        </p>

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to="/">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </Link>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.pages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.href}
                      className={`items-center text-sm font-medium text-gray-700 hover:text-gray-800 ${
                        page.role.includes(FAKE_USER.role) ? "flex" : "hidden"
                      }`}
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center">
                <div className="ml-4 flow-root lg:ml-6">
                  <Link to="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      onClick={() => setCartOpen(!cartOpen)}
                      aria-hidden="true"
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      {items.length > 0 ? items.length : ""}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
