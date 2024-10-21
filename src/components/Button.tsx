import { ButtonHTMLAttributes } from "react";

type ButtonProps = { text: string } & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ text, ...rest }: ButtonProps) => {
  return (
    <button
      className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 ease-in-out"
      {...rest}
    >
      {text}
    </button>
  );
};
