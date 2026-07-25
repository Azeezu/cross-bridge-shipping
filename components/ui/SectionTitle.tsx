import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: ElementType;
  className?: string;
}

/**
 * The eyebrow + heading (+ optional lede) pattern repeated across About,
 * Services, Why Choose Us, Process and Contact. `tone="light"` flips the
 * heading/description colors for use on the dark Why Choose Us section.
 */
export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  as: Heading = "h2",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <span className="section-eyebrow">{eyebrow}</span>
      <Heading
        className={cn(
          "font-display text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]",
          tone === "light" ? "text-white" : "text-primary-900",
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-primary-100" : "text-ink-soft",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
