/** @format */

import { FC } from "react";
import { Button } from "./Button";
import { Link, useNavigate } from "react-router-dom";

const CtaSection: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="relative isolate overflow-hidden bg-yellow px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
      <svg
        viewBox="0 0 1024 1024"
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
      >
        <circle
          r={512}
          cx={512}
          cy={512}
          fill="url(#food-court-gradient)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="food-court-gradient">
            <stop stopColor="#fff" />
            <stop offset={1} stopColor="#fff" />
          </radialGradient>
        </defs>
      </svg>
      <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Enjoy Delicious Meals.
          <br />
          Start ordering from us today.
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Experience the best vegetarian cuisine made from fresh, locally
          sourced ingredients. Your satisfaction is our priority.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
          <Button
            additionalClasses="bg-purple-800 text-white"
            onClick={() => navigate("/menu")}
          >
            Order Now
          </Button>
          <Link
            to="event"
            className="text-sm font-semibold leading-6 text-green-600"
          >
            Book Event <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <div className="relative mt-16 h-80 lg:mt-8">
        <img
          alt="bean salad"
          src="/bean-salad.webp"
          width={1824}
          height={1080}
          className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-gray-200"
        />
      </div>
    </div>
  );
};

export default CtaSection;
