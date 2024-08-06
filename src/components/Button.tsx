import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, ...props }) => {
  return (
    <button
      className="bg-red hover:opacity-80 text-white px-4 py-2 rounded-md focus:outline-none ml-4"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
