/** @format */
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
// import Table from '../components/featuredTable';
import { getEndRoute } from "../utils/getEndRoute";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const links = ["dashboard", "account", "users"];

  return (
    <div className="col-span-2 hidden sm:block">
      <ul>
        {links.map((link, index) => (
          <NavLink
            to={link}
            key={index}
            className={({ isActive }) =>
              `mt-5 cursor-pointer px-2 py-2 font-semibold transition capitalize ${
                isActive
                  ? "border-l-blue-700 text-blue-700"
                  : "hover:border-l-blue-700 hover:text-blue-700"
              }`
            }
          >
            <li>{link}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Account"); // Default selected text
  const navigate = useNavigate();

  const handleNavigation = (item: string) => {
    setSelectedItem(item); // Update the selected item text
    navigate(`/dashboard/${item}`);
    setOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="relative my-4 w-56 sm:hidden">
      <label
        className="flex w-full cursor-pointer items-center justify-between rounded-lg p-2 text-sm text-gray-700 bg-white shadow-sm"
        onClick={() => setOpen(!open)}
      >
        <span>{selectedItem}</span> {/* Display the selected item */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </label>
      {open && (
        <ul className="absolute z-10 mt-1 w-full rounded-lg bg-white shadow-lg">
          {["account", "transactions", "pricing"].map((item, index) => (
            <li
              key={index}
              className="cursor-pointer px-4 py-2 text-sm text-slate-600 hover:bg-blue-600 hover:text-white transition-colors"
              onClick={() => handleNavigation(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Dashboard = () => {
  const [endRoute, setEndRoute] = useState("");
  const location = useLocation();
  useEffect(() => {
    // Function to get the end route
    setEndRoute(getEndRoute());
  }, [location]);

  return (
    <div className="mx-4 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-auto">
      <h1 className="p-6 text-4xl font-semibold capitalize">{endRoute}</h1>
      <div className="grid grid-cols-8 sm:grid-cols-10">
        {/* Mobile Dropdown for smaller screens */}
        <Dropdown />

        {/* Sidebar for larger screens */}
        <Sidebar />

        {/* Main Content */}
        <div className="col-span-8 overflow-hidden rounded-xl sm:shadow">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
