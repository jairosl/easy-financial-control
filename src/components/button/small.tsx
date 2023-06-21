import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonSmallProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function ButtonSmall({ children, ...rest }: ButtonSmallProps) {
  return (
    <button
      className="py-2 px-4 bg-green rounded-md text-sm font-bold text-white leading-[160%] hover:bg-green-light transition-colors"
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
}
