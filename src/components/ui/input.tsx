import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "h-13 w-full rounded-sm border border-ink/10 bg-white px-4 py-3.5 text-sm text-ink placeholder:text-ink/35",
          "transition-colors duration-200 focus-visible:border-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/30",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
