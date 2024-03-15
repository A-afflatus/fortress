import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "ft-inline-flex ft-items-center ft-justify-center ft-whitespace-nowrap ft-rounded-md ft-text-sm ft-font-medium ft-ring-offset-background ft-transition-colors focus-visible:ft-outline-none focus-visible:ft-ring-2 focus-visible:ft-ring-ring focus-visible:ft-ring-offset-2 disabled:ft-pointer-events-none disabled:ft-opacity-50",
  {
    variants: {
      variant: {
        default: "ft-bg-primary ft-text-primary-foreground hover:ft-bg-primary/90",
        destructive:
          "ft-bg-destructive ft-text-destructive-foreground hover:ft-bg-destructive/90",
        outline:
          "ft-border ft-border-input ft-bg-background hover:ft-bg-accent hover:ft-text-accent-foreground",
        secondary:
          "ft-bg-secondary ft-text-secondary-foreground hover:ft-bg-secondary/80",
        ghost: "hover:ft-bg-accent hover:ft-text-accent-foreground",
        link: "ft-text-primary ft-underline-offset-4 hover:ft-underline",
      },
      size: {
        default: "ft-h-10 ft-px-4 ft-py-2",
        sm: "ft-h-9 ft-rounded-md ft-px-3",
        lg: "ft-h-11 ft-rounded-md ft-px-8",
        icon: "ft-h-10 ft-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
