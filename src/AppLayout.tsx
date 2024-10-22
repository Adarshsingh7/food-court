/** @format */

import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./ui/Footer";
import { useQuery } from "@tanstack/react-query";
import { MenuItem } from "./types/menuType";
import { fetchMenuItems } from "./features/menuFeatures/menuFeatures";
import ErrorPage from "./pages/ErrorPage";
import BackdropLoader from "./components/BackdropLoader";
import { Toaster } from "react-hot-toast";

const AppLayout: FC = function () {
  const { error, isLoading } = useQuery<MenuItem>({
    queryKey: ["menuItem"],
    queryFn: fetchMenuItems,
    retry: 2,
    retryDelay: 1000,
  });

  if (isLoading) return <BackdropLoader />;
  if (error instanceof Error)
    return (
      <div>
        <ErrorPage message={error.message} />
      </div>
    );
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
