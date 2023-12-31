import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        days: "border border-input bg-transparent shadow-sm hover:text-accent-foreground",

        //4 buttons
        logIn:
          " text-lg font-bold border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        signIn:
          "bg-jimOrange shadow-xl border-background border-[2px] text-lg font-bold    hover:bg-gray-700 text-background  ",
        create:
          " shadow-xl border-black border-[2px] text-lg font-bold    hover:text-white bg-white text-jimOrange hover:border-white hover:bg-gray-700 ",

        jim: " text-white bg-jimOrange p-2 px-5 rounded-md hover:bg-jimOrange active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300",
        navBar: "text-foreground bg-transparent hover:bg-background",
        edit: " text-lg font-bold border border-input bg-jimGrayLight shadow-sm hover:bg-jimGray hover:text-accent-foreground",
      },
      size: {
        default: "h-7 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-4 ",
        icon: "h-9 w-9",
        icon2: "h-7 w-7",
        md: "h-9 rounded-md ",
        cancel: "h-9 px-2",
        create: "h-10 rounded-xl w-[110px] ",
        logIn: "h-9 rounded-xl lg:w-[300px] md:w-[220px] w-[180px] ",
        addNewProduct:
          "md:h-10 md:px-2 md:text-lg rounded-lg px-2 h-10 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
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
