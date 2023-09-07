import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex flex-1 h-10 w-full rounded-md bg-transparent px-3 py-2 text-lg file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 disabled:text-gray-400",
          className
        )}
        ref={ref}
        {...props}
        autoComplete="off"
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
