/** @format */
import { Button } from "./../components/Button.tsx";
import Header from "../components/Header.tsx";
import ProductCard from "../components/ProductCard.tsx";
import { FC, PropsWithChildren } from "react";
import Feature from "../components/Feature.tsx";
import CtaSection from "../components/CtaSection.tsx";
import Footer from "../components/Footer.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../store.ts";

const Hero: FC = () => {
  const products = useSelector((state: RootState) => state.product);
  return (
    <>
      {/* <SmallCart /> */}
      <div className="md:px-20 px-2 py-10 color-black">
        <SectionWrapper>
          <img
            src="/overview.jpg"
            className="w-full h-64 md:h-96 object-cover opacity-80"
            alt="Overview"
          />
          <div className="absolute inset-0 flex items-center justify-left px-5 md:px-0">
            <div className="bg-opacity-75 p-5 rounded-lg text-center flex flex-col gap-5">
              <h1 className="md:text-4xl text-lg font-bold text-gray-900">
                Welcome to our store
              </h1>
              <p className="text-gray-700 text-sm md:text-md mt-2">
                We have the best products in the market all right to you
              </p>
              <Button additionalClasses="md:w-[50%]">Shop Now</Button>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <MainHeading>Featured Products</MainHeading>
          <div className="grid lg:grid-cols-4 grid-cols-2 grid-col-1 gap-2 ">
            {products.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <Feature />
        </SectionWrapper>

        <SectionWrapper>
          <CtaSection />
        </SectionWrapper>
      </div>
      <Footer />
    </>
  );
};

const SectionWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className="relative mb-14">{children}</div>;
};

const MainHeading: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="md:text-4xl sm:text-2xl text-2xl font-bold text-gray-800 mx-2">
      <h1 className="my-4">{children}</h1>
    </div>
  );
};

export default Hero;
