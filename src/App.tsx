/** @format */

import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { action as orderAction } from "./components/OrderFrom.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
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
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import Signup from "./pages/Signup.tsx";
import Login from "./pages/Login.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0
    },
  },
})

const router = createBrowserRouter([
  {
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
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
    path: "/signup",
    element: <Signup />,
  },
  {
    path: '/login',
    element: <Login />
  }
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
