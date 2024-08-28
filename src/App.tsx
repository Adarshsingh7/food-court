/** @format */

import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import Hero from "./pages/Hero";
import Menu from "./pages/Menu";
import { Provider } from "react-redux";
import store from "./store.ts";
import Order from "./pages/Order.tsx";

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
        path: '/order',
        element: <Order/>
      }
    ],
  },
]);

const App: FC = function () {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
