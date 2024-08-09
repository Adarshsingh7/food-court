/** @format */

import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const AppLayout: FC = function () {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default AppLayout;
