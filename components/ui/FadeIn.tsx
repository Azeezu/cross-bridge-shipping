"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Starting offset direction. Defaults to a gentle upward reveal. */
  direction?: "up" | "left" | "right" | "none";
  as?: "div" | "li";
}

const offsets: Record<NonNullable<FadeInProps["direction"]>, { x?: number; y?: number }> = {
  up: { y: 28 },
  left: { x: -28 },
  right: { x: 28 },
  none: {},
};

/**
 * Scroll-triggered fade-up used across every section for the "fade-up
 * animations on scroll" requirement. Animates once when ~15% into view,
 * and collapses to a simple opacity fade when the user prefers reduced
 * motion.
 */
export function FadeIn({ children, delay = 0, className, direction = "up", as = "div" }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();
  const offset = shouldReduceMotion ? {} : offsets[direction];

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.6,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  const MotionTag = as === "li" ? motion.li : motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px 0px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
