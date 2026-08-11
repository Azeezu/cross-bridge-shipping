import {
  Anchor,
  Boxes,
  ClipboardCheck,
  ClipboardList,
  Clock,
  Globe,
  Handshake,
  Headphones,
  ListChecks,
  Mail,
  MapPin,
  Network,
  PackageCheck,
  Phone,
  Ship,
  ShieldCheck,
  Tag,
  Timer,
  Truck,
  Users,
  Plane,
  Warehouse,
} from "lucide-react";

import { FacebookIcon, InstagramIcon, LinkedInIcon } from "@/components/icons/BrandIcons";
import type {
  ContactDetail,
  FeatureItem,
  NavLink,
  ProcessStepItem,
  ServiceItem,
  SocialLink,
  StatItem,
} from "@/types";

export const SITE_CONFIG = {
  name: "Cross Bridge Shipping",
  legalName: "Cross Bridge Shipping L.L.C.",
  shortName: "Cross Bridge",
  tagline: "We connect continents and deliver trust. Your cargo, our responsibility.",
  description:
    "Cross Bridge Shipping L.L.C. is a Dubai-based freight forwarder offering ocean freight, air freight, land transportation, customs clearance, warehousing and end-to-end global logistics solutions.",
  url: "https://www.cbsdxb.com",
  ogImage: "/opengraph-image",
  phone: "+971 56 781 3645",
  phoneHref: "tel:+971501234567",
  whatsappHref: "https://wa.me/971501234567",
  email: "info@cbsdxb.com",
  addressLine: "office #51 Madinamall, Muhaisinah 4, Al qusais.Dubai",
  hours: "Mon – Sat: 9:00 AM – 6:00 PM",
  mapEmbedSrc: "https://www.google.com/maps?q=Al+Maktoum+Road,+Dubai,+United+Arab+Emirates&output=embed",
  mapDirectionsHref: "https://www.google.com/maps/search/?api=1&query=Al+Maktoum+Road,+Dubai,+United+Arab+Emirates",
  foundedYear: 2014,
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Our Process", href: "#process" },
  { label: "Contact Us", href: "#contact" },
];

/** Placeholder hrefs — swap in the client's real social profile URLs. */
export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "LinkedIn", href: "#", icon: LinkedInIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
];

export const CONTACT_DETAILS: ContactDetail[] = [
  {
    icon: Phone,
    label: "Call us",
    value: SITE_CONFIG.phone,
    href: SITE_CONFIG.phoneHref,
  },
  {
    icon: Mail,
    label: "Email us",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: SITE_CONFIG.addressLine,
    href: SITE_CONFIG.mapDirectionsHref,
  },
  {
    icon: Clock,
    label: "Working hours",
    value: SITE_CONFIG.hours,
  },
];

export const STATS: StatItem[] = [
  { icon: Handshake, value: "120+", label: "Global Partners" },
  { icon: Boxes, value: "2,500+", label: "Successful Shipments" },
  { icon: Users, value: "98%", label: "Customer Satisfaction" },
];

export const SERVICES: ServiceItem[] = [
  {
    icon: Ship,
    title: "Ocean Freight",
    description: "FCL & LCL shipping solutions worldwide, backed by reliable carrier partnerships.",
  },
  {
    icon: Plane,
    title: "Air Freight",
    description: "Fast, secure air cargo services for time-critical and high-value shipments.",
  },
  {
    icon: Truck,
    title: "Land Transportation",
    description: "Reliable trucking and road freight services across the GCC region.",
  },
  {
    icon: ClipboardCheck,
    title: "Customs Clearance",
    description: "Efficient clearance handled by licensed brokers, with minimal delays.",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "Safe, secure storage and inventory management built around your schedule.",
  },
  {
    icon: Globe,
    title: "Global Logistics",
    description: "End-to-end supply chain solutions connecting every leg of the journey.",
  },
];

export const WHY_CHOOSE_US_FEATURES: FeatureItem[] = [
  {
    icon: Users,
    title: "Experienced Team",
    description: "Skilled professionals with deep industry expertise across every trade lane.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Safe",
    description: "Your cargo is protected and handled with the utmost care, door to door.",
  },
  {
    icon: Network,
    title: "Global Network",
    description: "A strong worldwide network of partners and agents across 120+ countries.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Round-the-clock support ready to assist at every step of the shipment.",
  },
  {
    icon: Timer,
    title: "On-Time Delivery",
    description: "We value your time and hold ourselves to it, shipment after shipment.",
  },
  {
    icon: Tag,
    title: "Competitive Pricing",
    description: "Transparent rates and some of the most competitive pricing in the market.",
  },
];

export const PROCESS_STEPS: ProcessStepItem[] = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Enquiry",
    description: "Tell us what you're shipping, where it's headed, and when it needs to arrive.",
  },
  {
    number: "02",
    icon: ListChecks,
    title: "Planning",
    description: "We map the most efficient route and mode, then confirm a clear plan with you.",
  },
  {
    number: "03",
    icon: Ship,
    title: "Shipping",
    description: "Your cargo moves under continuous tracking and hands-on care, every leg of the way.",
  },
  {
    number: "04",
    icon: PackageCheck,
    title: "Delivery",
    description: "Safe, on-time delivery — confirmed the moment your shipment arrives.",
  },
];
