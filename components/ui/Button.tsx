import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { IconComponent } from "@/types";

type Variant = "primary" | "outline" | "outlineLight";
type Size = "md" | "lg";

interface SharedProps {
  variant?: Variant;
  size?: Size;
  icon?: IconComponent;
  iconPosition?: "left" | "right";
  loading?: boolean;
  className?: string;
  children: ReactNode;
}

type ButtonAsLink = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-secondary-500 text-white shadow-sm shadow-secondary-900/20 hover:bg-secondary-600 hover:shadow-md active:bg-secondary-700",
  outline:
    "border-2 border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white",
  outlineLight:
    "border-2 border-white/70 text-white hover:bg-white hover:text-primary-900 hover:border-white",
};

const sizeClasses: Record<Size, string> = {
  md: "h-11 px-6 text-sm gap-2",
  lg: "h-14 px-8 text-base gap-2.5",
};

/**
 * Renders an <a> when `href` is supplied, otherwise a <button>. Every CTA
 * on the site — nav "Get Quote", hero actions, form submit — flows
 * through this one component so hover/focus/transition behavior stays
 * identical everywhere.
 */
export function Button({
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  loading = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 ease-out",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-500",
    "disabled:pointer-events-none disabled:opacity-60",
    variantClasses[variant],
    sizeClasses[size],
    "group/btn",
    className,
  );

  const content = (
    <>
      {loading ? (
        <Loader2 className="size-4 animate-spin" aria-hidden="true" />
      ) : (
        Icon &&
        iconPosition === "left" && (
          <Icon className="size-4 shrink-0" aria-hidden="true" />
        )
      )}
      <span>{children}</span>
      {!loading && Icon && iconPosition === "right" && (
        <Icon
          className="size-4 shrink-0 transition-transform duration-200 group-hover/btn:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (typeof props.href === "string") {
    const { href, ...anchorProps } = props as ButtonAsLink;
    return (
      <a href={href} className={classes} {...anchorProps}>
        {content}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = props as ButtonAsButton;
  return (
    <button type={type} className={classes} disabled={loading || buttonProps.disabled} {...buttonProps}>
      {content}
    </button>
  );
}
