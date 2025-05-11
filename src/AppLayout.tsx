import { FC, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
// import Header from "./components/Header";
import Footer from "./ui/Footer";
import { Toaster } from "react-hot-toast";

const AppLayout: FC = function () {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 700,
          style: {
            borderRadius: "8px",
            background: "#333",
            color: "#fff",
          },
        }}
        {...({ limit: 3 } as any)}
      />
      {/* <Header /> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
