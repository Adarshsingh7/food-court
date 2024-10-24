/** @format */

import { FC } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import Hero from "./pages/Hero";
import Menu from "./pages/Menu";
import { Provider } from "react-redux";
import store from "./store.ts";
import AuthRoute from "./components/AuthRoute.tsx";
import User from "./pages/User.tsx";
import ManageUser from "./pages/ManageUser.tsx";
import OrderDetails from "./features/order/OrderDetails.tsx";
import Login from "./pages/Login.tsx";
import ProductOverview from "./pages/productOverview.tsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import OrderOverview from "./features/order/OrderOverview.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Account from "./features/dashboard/Account.tsx";
import DashboardOverview from "./features/dashboard/DashboardOverview.tsx";
import MenuControl from "./features/dashboard/MenuControl.tsx";
import OrderHistory from "./features/order/OrderHistory.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/menu",
        children: [
          { path: "", element: <Menu /> },
          { path: "/menu/:id", element: <ProductOverview /> },
        ],
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          { path: "account", element: <Account /> },
          { path: "users", element: <Account /> },
          { path: "dashboard", element: <DashboardOverview /> },
          { path: "menu", element: <MenuControl /> },
        ],
      },
      {
        path: "/cart",
        element: <div>cart</div>,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/allusers",
        element: (
          <AuthRoute roles={["admin"]}>
            <ManageUser />
          </AuthRoute>
        ),
      },
      {
        path: "/order",
        element: <OrderDetails />,
      },
      {
        path: "/history",
        element: <OrderHistory />,
      },
      {
        path: "/order/:id",
        element: <OrderOverview />,
      },
    ],
  },
]);

const App: FC = function () {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
