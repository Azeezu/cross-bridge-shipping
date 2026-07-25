import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { NAV_LINKS, SERVICES, SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-primary-100">
      <Container className="grid grid-cols-1 gap-x-8 gap-y-12 py-16 sm:grid-cols-2 lg:grid-cols-5 lg:py-20">
        <div className="sm:col-span-2 lg:col-span-2">
          <a href="#home" aria-label="Cross Bridge Shipping — Home" className="inline-block">
            {/* <Logo variant="light" /> */}
            <Logo variant="light"/>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-100/80">{SITE_CONFIG.tagline}</p>
          <ul className="mt-6 flex items-center gap-3">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-secondary-500 hover:bg-secondary-500"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-primary-100/80 transition-colors hover:text-secondary-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Our Services</h3>
          <ul className="mt-5 space-y-3">
            {SERVICES.map((service) => (
              <li key={service.title}>
                <a href="#services" className="text-sm text-primary-100/80 transition-colors hover:text-secondary-400">
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Contact Us</h3>
          <ul className="mt-5 space-y-3 text-sm text-primary-100/80">
            <li>
              <a href={SITE_CONFIG.phoneHref} className="flex items-start gap-2.5 transition-colors hover:text-secondary-400">
                <Phone className="mt-0.5 size-4 shrink-0 text-secondary-400" aria-hidden="true" />
                {SITE_CONFIG.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-start gap-2.5 transition-colors hover:text-secondary-400"
              >
                <Mail className="mt-0.5 size-4 shrink-0 text-secondary-400" aria-hidden="true" />
                {SITE_CONFIG.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-secondary-400" aria-hidden="true" />
              {SITE_CONFIG.addressLine}
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-8">
          <div className="rounded-2xl bg-primary-800/60 p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
            <div>
              <p className="font-display text-lg font-bold text-white">Get a Quote</p>
              <p className="mt-1 text-sm text-primary-100/80">Send us an enquiry and we&apos;ll get back to you.</p>
            </div>
            <Button href="#contact" icon={ArrowRight} className="mt-4 w-full sm:mt-0 sm:w-auto">
              Get Quote
            </Button>
          </div>
        </Container>
      </div>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center gap-3 py-6 text-xs text-primary-100/70 sm:flex-row sm:justify-between">
          <p>
            © {year} {SITE_CONFIG.legalName}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="transition-colors hover:text-secondary-400">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-secondary-400">
              Terms &amp; Conditions
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
