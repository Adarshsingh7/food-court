/** @format */

import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { action as authAction } from './pages/Login.tsx'
import { action as orderAction } from "./components/OrderFrom.tsx";
import { Provider } from "react-redux";

import AppLayout from "./AppLayout";
import Hero from "./pages/Hero";
import Menu from "./pages/Menu";
import store from "./store.ts";
import Order from "./pages/Order.tsx";
import OrdersDetail from "./pages/OrdersDetail.tsx";
import AuthRoute from "./components/AuthRoute.tsx";
import User from "./pages/User.tsx";
import ManageUser from "./pages/ManageUser.tsx";
import OrderDetails from "./pages/OrderDetails.tsx";
import Login from "./pages/Login.tsx";

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
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <div>cart</div>,
      },
      {
        path: "/order",
        element: <Order />,
        action: orderAction,
      },
      {
        path: "/user",
        element: <User />,
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
        path: "/allorders",
        element: (
          <AuthRoute roles={["admin"]}>
            <OrdersDetail />
          </AuthRoute>
        ),
      },
      {
        path: "/order/:id",
        element: <OrderDetails />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    action: authAction
  }
]);

const App: FC = function () {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;