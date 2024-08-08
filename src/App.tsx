/** @format */

import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import Hero from "./pages/Hero";
import { Provider } from "react-redux";
import store from "./store.ts";

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
        element: <div>menu</div>,
      },
      {
        path: "/cart",
        element: <div>cart</div>,
      },
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
