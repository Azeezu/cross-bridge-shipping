// import { cn } from "@/lib/utils";

// interface LogoProps {
//   /** "dark" for light backgrounds (header), "light" for the navy footer. */
//   variant?: "dark" | "light";
//   className?: string;
// }

// /**
//  * Cross Bridge Shipping wordmark, built from real text (not a raster
//  * image) so it stays crisp at any size, is readable by screen readers
//  * and search engines, and can be recolored for the dark footer — the
//  * one thing a fixed PNG couldn't do here without a second export.
//  */
// export function Logo({ variant = "dark", className }: LogoProps) {
//   const isDark = variant === "dark";

//   return (
//     <span className={cn("inline-flex flex-col items-start leading-none select-none", className)}>
//       <span
//         className={cn(
//           "font-logo text-[1.55rem] font-semibold tracking-[0.04em] sm:text-[1.75rem]",
//           isDark ? "text-primary-900" : "text-white",
//         )}
//       >
//         Cross Bridge
//       </span>
//       <span
//         className={cn(
//           "mt-0.5 text-[0.6rem] font-semibold tracking-[0.42em] sm:text-[0.65rem]",
//           isDark ? "text-ink-soft" : "text-primary-100",
//         )}
//       >
//         SHIPPING LLC
//       </span>
//       <svg
//         viewBox="0 0 160 20"
//         aria-hidden="true"
//         className={cn("mt-1 h-3 w-24 sm:h-3.5 sm:w-28", isDark ? "text-secondary-500" : "text-secondary-400")}
//       >
//         <path
//           d="M2 12c14 8 28 8 40-1s28-9 40 0 28 9 40 0"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//         />
//         <path
//           d="M122 5.5 133 11l-11 5.5"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     </span>
//   );
// }


import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  /** "dark" for light backgrounds (header), "light" for the navy footer. */
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "dark", className }: LogoProps) {
  const image = (
    <Image
      src="/images/logo.png"
      alt="Cross Bridge Shipping LLC"
      width={808}
      height={565}
      priority
      className="h-16 w-auto object-contain md:h-20"
    />
  );

  if (variant === "light") {
    return (
      <span className={cn("inline-flex rounded-xl bg-white/95 px-4 py-2 shadow-sm", className)}>
        {image}
      </span>
    );
  }

  return <span className={cn("inline-flex", className)}>{image}</span>;
}
