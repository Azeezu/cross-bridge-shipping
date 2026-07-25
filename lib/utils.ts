type ClassValue = string | number | null | boolean | undefined;

/**
 * Lightweight class-name joiner. Filters out falsy values so conditional
 * Tailwind classes can be composed without pulling in an extra dependency.
 */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Formats a phone number for use in a tel: link by stripping everything
 * except digits and a leading +.
 */
export function toTelHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

/**
 * Basic RFC-5322-ish email pattern, good enough for client-side form
 * validation (not a substitute for real verification).
 */
export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

/**
 * Accepts a reasonably wide range of phone formats (spaces, dashes,
 * parentheses, leading +) while still catching empty/garbage input.
 */
export function isValidPhone(value: string): boolean {
  const digits = value.replace(/[^\d]/g, "");
  return digits.length >= 7 && /^[\d\s()+-]+$/.test(value);
}
