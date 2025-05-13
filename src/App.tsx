/** @format */

import { FC } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import Menu from "./pages/Menu";
import { Provider } from "react-redux";
import store from "./store.ts";
import OrderDetails from "./features/order/OrderDetails.tsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import OrderOverview from "./features/order/OrderOverview.tsx";
import OrderHistory from "./features/order/OrderHistory.tsx";
import Contact from "./pages/Contact.tsx";
import Event from "./pages/Event.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";
import RestroListPage from "./pages/RestroListPage.tsx";
import TermsAndConditions from "./pages/TermsAndConditions.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
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
        element: <RestroListPage />,
      },
      {
        path: "/menu",
        children: [
          { path: "", element: <PageNotFound /> }, // /menu
          {
            path: ":restroId",
            children: [
              { path: "", element: <Menu /> },
              {
                path: "order",
                element: <OrderDetails />,
              },
            ],
          },
        ],
      },
      {
        path: "/history",
        element: <OrderHistory />,
      },
      {
        path: "/terms-and-condition",
        element: <TermsAndConditions />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/event",
        element: <Event />,
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
