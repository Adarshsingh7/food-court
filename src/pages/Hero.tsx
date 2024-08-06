/** @format */
import { Button } from "@mui/material";
import Header from "../components/Header.tsx";
import ProductCard from "../components/ProductCard.tsx";
import { FC, PropsWithChildren } from "react";

const Hero: FC = () => {
  return (
    <>
      <Header />
      <div className="md:px-20 py-10 color-black">
        <div className="relative opacity-80">
          <div className="absolute md:left-10 left-5 top-1/2 transform -translate-y-1/2 md:w-full w-1/2">
            <h1 className="md:text-4xl text-lg font-bold text-gray-900">
              Welcome to our store
            </h1>
            <p className="text-gray-700 text-sm md:text-md">
              We have the best products in the market all right to you
            </p>
            <Button
              variant="contained"
              className="bg-blue-500 text-white mt-2"
              size="large"
            >
              Shop Now
            </Button>
          </div>
          <img src="/overview.jpg" />
        </div>

        <MainHeading>Featured Products</MainHeading>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-2">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
};

const MainHeading: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="md:text-4xl sm:text-2xl text-xl font-bold text-gray-700 mx-2">
      <h1 className="underline my-4">{children}</h1>
    </div>
  );
};

export default Hero;
