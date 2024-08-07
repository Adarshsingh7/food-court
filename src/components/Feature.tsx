import { FC } from 'react';
import { CakeIcon, HandThumbUpIcon, HeartIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

interface Feature {
  name: string;
  description: string;
  icon: FC<React.SVGProps<SVGSVGElement>>;
  to: string;
}

const features: Feature[] = [
  {
    name: 'Fresh Ingredients',
    description:
      'We source only the freshest ingredients from local farms to ensure you get the best quality meals.',
    icon: CakeIcon,
    to: '/',
  },
  {
    name: 'Expert Chefs',
    description:
      'Our team of expert chefs craft delicious vegetarian dishes with creativity and passion.',
    icon: HandThumbUpIcon,
    to: '/',
  },
  {
    name: 'Healthy Options',
    description:
      'Our menu is designed to offer nutritious and balanced meal options that cater to various dietary needs.',
    icon: HeartIcon,
    to: '/',
  },
  {
    name: 'Global Cuisine',
    description:
      'Explore a diverse range of vegetarian dishes from different cultures and regions around the world.',
    icon: GlobeAltIcon,
    to: '/',
  },
];

const Example: FC = () => {
  return (
    <div className="bg-green py-24 sm:py-32 sm:rounded-3xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-green-600">Discover the Best</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for a great dining experience
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Enjoy a variety of delicious vegetarian dishes made with the finest ingredients and crafted by expert chefs.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-2 lg:max-w-none lg:gap-y-16">
            {features.map((feature) => (
              <a href={feature.to} key={feature.name} className="relative pl-10">
                <dt className="text-xs sm:text-base font-semibold leading-6 sm:leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                    <feature.icon aria-hidden="true" className="h-4 w-4 sm:h-6 sm:w-6 text-black" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-xs sm:text-base leading-6 sm:leading-7 text-gray-600">{feature.description}</dd>
              </a>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Example;
