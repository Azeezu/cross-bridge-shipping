import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

/**
 * Utility strip above the header. Hidden below `md` — on a 320px phone
 * this information competes with the logo and nav for space, so it
 * moves to the Contact section and footer instead, and the site relies
 * on the floating WhatsApp button for quick mobile contact.
 */
export function TopBar() {
  return (
    <div className="hidden bg-primary-900 text-primary-100 md:block">
      <Container className="flex h-11 items-center justify-between gap-6 text-xs">
        <div className="flex items-center gap-5">
          <a
            href={SITE_CONFIG.phoneHref}
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <Phone className="size-3.5 text-secondary-400" aria-hidden="true" />
            {SITE_CONFIG.phone}
          </a>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <Mail className="size-3.5 text-secondary-400" aria-hidden="true" />
            {SITE_CONFIG.email}
          </a>
          <span className="hidden items-center gap-1.5 lg:flex">
            <MapPin className="size-3.5 text-secondary-400" aria-hidden="true" />
            {SITE_CONFIG.addressLine}
          </span>
        </div>
        <div className="flex items-center gap-5">
          <span className="hidden items-center gap-1.5 lg:flex">
            <Clock className="size-3.5 text-secondary-400" aria-hidden="true" />
            {SITE_CONFIG.hours}
          </span>
          <ul className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="flex size-6 items-center justify-center rounded-full text-primary-100 transition-colors hover:text-secondary-400"
                >
                  <Icon className="size-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}
