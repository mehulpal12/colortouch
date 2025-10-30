import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface GradientBorderButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

/**
 * Animated gradient border button matching the provided design.
 * Uses a moving linear-gradient background with padding to render the border.
 */
export const GradientBorderButton = React.forwardRef<
  HTMLButtonElement,
  GradientBorderButtonProps
>(({ className, asChild = false, children, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <span
      className={cn(
        "relative inline-flex rounded-xl p-[1.5px]",
        // Pastel rainbow gradient with motion
        "bg-[linear-gradient(90deg,#ff7ab6,#ffcd70,#7be495,#8bb7ff,#ff7ab6)]",
        "bg-[length:300%_300%] animate-gradient-move",
        // Soft outer glow
        "before:content-[''] before:absolute before:-inset-px before:rounded-[calc(theme(borderRadius.xl)+2px)] before:bg-inherit before:blur-md before:opacity-40 before:-z-10",
      )}
    >
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-[12px] px-6 py-3",
          "bg-background text-foreground shadow-sm",
          "text-base font-semibold tracking-[-0.01em]",
          "transition-transform duration-200 will-change-transform",
          "hover:scale-[1.02] active:scale-[0.98]",
          className,
        )}
        {...props}
      >
        {children}
      </Comp>
    </span>
  );
});

GradientBorderButton.displayName = "GradientBorderButton";

export default GradientBorderButton;
