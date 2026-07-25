import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

/**
 * Centers content with a consistent max-width and responsive gutters.
 * Used by every section so horizontal spacing stays perfectly aligned
 * from a 320px phone up to large desktop monitors.
 */
export function Container({ children, className, as: Tag = "div" }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-8", className)}>
      {children}
    </Tag>
  );
}
