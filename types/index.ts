import type { ComponentType, SVGProps } from "react";

/** Structural type that both lucide-react icons and our hand-rolled brand SVGs satisfy. */
export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconComponent;
}

export interface ContactDetail {
  icon: IconComponent;
  label: string;
  value: string;
  href?: string;
}

export interface StatItem {
  icon: IconComponent;
  value: string;
  label: string;
}

export interface ServiceItem {
  icon: IconComponent;
  title: string;
  description: string;
}

export interface FeatureItem {
  icon: IconComponent;
  title: string;
  description: string;
}

export interface ProcessStepItem {
  number: string;
  icon: IconComponent;
  title: string;
  description: string;
}

export interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export type EnquiryFormErrors = Partial<Record<keyof EnquiryFormData, string>>;

export type SubmitStatus = "idle" | "submitting" | "success" | "error";
