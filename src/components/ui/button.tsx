import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 ease-[var(--ease-lux)] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2",
  {
    variants: {
      variant: {
        primary:
          "bg-maroon text-cream shadow-soft-sm hover:bg-maroon-dark hover:shadow-gold active:scale-[0.98]",
        gold: "bg-gold text-ink hover:bg-gold-light hover:shadow-gold active:scale-[0.98]",
        outline:
          "border border-cream/40 text-cream backdrop-blur-sm hover:bg-cream/10 active:scale-[0.98]",
        ghost: "text-maroon hover:bg-maroon/5 active:scale-[0.98]",
      },
      size: {
        default: "h-12 px-7 text-base",
        sm: "h-10 px-5 text-sm",
        lg: "h-14 px-9 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
