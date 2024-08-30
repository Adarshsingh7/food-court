import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  additionalClasses?: string;
  color?: string;
};

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  additionalClasses = "",
  color,
  ...props
}) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className={`bg-red hover:opacity-80 text-white px-4 py-2 rounded-md focus:outline-none ${additionalClasses}`}
      {...props}
    >
      {children}
    </button>
  );
};

const IconButton: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => {
  return (
    <button
      className={`text-gray-700 dark:text-gray-400 focus:outline-none`}
      {...props}
    >
      {children}
    </button>
  );
};

const SmallButton: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  color = "red",
  ...props
}) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className={`bg-red hover:opacity-80 text-white px-2 py-1 rounded-md focus:outline-none md:text-sm text-xs`}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button, IconButton, SmallButton };
