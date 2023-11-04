import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        // Grooming
        Nails: "bg-groomingPink1 border-transparent shadow hover:bg-pink-300",
        Bath: "bg-groomingPink2 border-transparent shadow hover:bg-pink-300",
        Haircut: "bg-groomingPink3 border-transparent shadow hover:bg-pink-300",
        Teeth: "bg-groomingPink4 border-transparent shadow hover:bg-pink-300",
        Ears: "bg-groomingPink5 border-transparent shadow hover:bg-pink-300",
        "Anal Glands":
          "bg-groomingPink6 border-transparent shadow hover:bg-pink-300",
        Paws: "bg-groomingPink7 border-transparent shadow hover:bg-pink-300",
        Face: "bg-groomingPink8 border-transparent shadow hover:bg-pink-300",
        Eyes: "bg-groomingPink9 border-transparent shadow hover:bg-pink-300",
        Balls: "bg-groomingPink10 border-transparent shadow hover:bg-pink-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
