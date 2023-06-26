import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonMediumProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function ButtonMedium({ children, ...rest }: ButtonMediumProps) {
  return (
    <button
      className="py-3 px-5 bg-green rounded-md text-sm font-bold text-white leading-[160%] hover:bg-green-light transition-colors hover:cursor-pointer"
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
}
